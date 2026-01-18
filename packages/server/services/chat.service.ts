import { conversationRepository} from '../repositories/conversation.repository';
import OpenAI from 'openai';

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


export const chatService = {
    sendPrompt: async (prompt: string, conversationId: string) => {
            try {
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
        }
    }
}