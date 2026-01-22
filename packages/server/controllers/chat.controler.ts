
import type { Request, Response } from 'express';
import { chatService } from '../services/chat.service';
import z from 'zod';

const ChatRequestSchema = z.object({
    prompt: z.string().min(1),
    conversationId: z.string().optional(),
});

export const chatController = {
    async sendMessage(req: Request, res: Response){
        const parsed = ChatRequestSchema.safeParse(req.body);
        if (!parsed.success) {
            return res.status(400).json({ error: parsed.error.issues });
        }
        try {
            const { prompt, conversationId } = req.body;
            const response = await chatService.sendPrompt(prompt, conversationId);
            res.json(response);
        }
        catch (error) {
            res.status(500).json({ error: 'Internal Server Error' });
        }
    }
}