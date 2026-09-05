import express from 'express';
import bookRouter from './routes/books.ts';

const app = express();

app.use(express.json());

app.use('/books', bookRouter);

app.listen(3000, () => {
  console.log('Listening on port 3000');
});