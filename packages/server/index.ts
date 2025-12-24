import express from 'express';
import type { Request, Response } from 'express';
import dotenv from 'dotenv';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 4000;  // Port 4000 pour le backend

// Route API qui renvoie du texte simple
app.get('/api/message', (req: Request, res: Response) => {
    res.send("Hello from the server!");
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

export default app;