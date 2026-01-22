import express from 'express';
import dotenv from 'dotenv';
import { conversationRepository} from './repositories/conversation.repository';
import { chatService } from './services/chat.service';
import { chatController } from './controllers/chat.controler';
import router from './routers';



dotenv.config();


const app = express();
app.use(router);
app.use(express.json());

const PORT = process.env.PORT || 3001;  // Port 4000 pour le backend

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
}
);

export default app;