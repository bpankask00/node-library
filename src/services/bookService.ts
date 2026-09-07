import Book from '../models/book'
import fs from 'node:fs/promises';

async function getBookDB() : Promise<Record<string, Book>> {
    const raw = await fs.readFile('./books.json', 'utf8');

    return JSON .parse(raw) as Record<string, Book>;
}


export async function getBook(id : string) : Promise<Book> {
    const books = await getBookDB();

    console.log(books[1]);

    return books[id];
}

export async function getAllBooks() : Promise<Record<string, Book>> {
    return await getBookDB();
}