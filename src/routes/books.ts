import { getBook, getAllBooks } from '../services/bookService'
import express, { type Request, type Response } from 'express';

const router = express.Router();

// define the home page route
router.get('/', async (req: Request, res: Response) => {
  const books = await getAllBooks();
  
  res.send(books);
});

export default router;