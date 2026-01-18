import express from 'express';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';
import OpenAI from 'openai';
import z from 'zod';
import { conversationRepository} from './repositories/conversation.repository';


dotenv.config();
const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});

const app = express();
const PORT = process.env.PORT || 3001;  // Port 4000 pour le backend
app.use(express.json());

// Route API qui renvoie du texte simple
app.get('/api/message', (req: Request, res: Response) => {
    res.send("Hello from the server!");
});


 
const ChatRequestSchema = z.object({
    prompt: z.string().min(1),
    conversationId: z.string().optional(),
});

app.post('/api/chat', async (req: Request, res: Response) => {
    const parsed = ChatRequestSchema.safeParse(req.body);
    if(!parsed.success) {
        return res.status(400).json({error: parsed.error.issues});
    }
    try {
    const {prompt, conversationId} = req.body;
    const response = await client.responses.create({
        model: "gpt-4",
        input: prompt,
        temperature: 0.7,
        previous_response_id: conversationRepository.getLastResponseId(conversationId!),

    })
    conversationRepository.setLastResponseId(conversationId, response.id);
    res.json({message: response.max_output_tokens});
    } catch (error) {
        res.status(500).json({error: 'Internal Server Error'});
    }
});

export default app;