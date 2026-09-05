class Book {
    constructor (
        public name: string
    ) {}
}

export function getBook() : Book {
    return new Book('Bible');
}