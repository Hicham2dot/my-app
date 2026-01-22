import { conversationRepository} from '../repositories/conversation.repository';
import OpenAI from 'openai';

const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
});


export const chatService = {
    async sendPrompt(prompt: string, conversationId: string){
            const response = await client.responses.create({
                model: "gpt-4",
                input: prompt,
                temperature: 0.7,
                previous_response_id: conversationRepository.getLastResponseId(conversationId!),
        
            })
            conversationRepository.setLastResponseId(conversationId, response.id);
            return response;
            
    }
}