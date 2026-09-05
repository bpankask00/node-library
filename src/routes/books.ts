import { getBook } from '../services/bookService'
import express, { type Request, type Response } from 'express';

const router = express.Router();

// define the home page route
router.get('/', (req: Request, res: Response) => {
  res.send(getBook().name);
});

export default router;