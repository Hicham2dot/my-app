import express from "express";
import type { Response,Request } from "express";
import { chatController } from './controllers/chat.controler';


const router =express.Router();

router.use(express.json());

// Route API qui renvoie du texte simple
router.get('/api/message', (req: Request, res: Response) => {
    res.send("Hello from the server!");
});

router.post('/api/chat', chatController.sendMessage);

export default router;
