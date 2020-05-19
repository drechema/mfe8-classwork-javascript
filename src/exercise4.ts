interface Book {
    title:string;
    isRead: boolean;
}

/**
 * Decide if a book is read or not
 * @param books array of books
 * @param titleToSearch book title to search
 * @returns {boolean} true/false
 */
function isBookRead(books, titleToSearch) {
    const b = books.find(b=>b.title==titleToSearch);
    return b ? b.isRead : false;
}

function exercise4() {
    console.log("Testing Exercise 4:");
    const books = [
        { title: "Harry Potter y la piedra filosofal", isRead: true },
        { title: "Canción de hielo y fuego", isRead: false },
        { title: "Devastación", isRead: true },
    ];
    console.log("books:", books);
    console.log("isBookRead(books, 'Devastación')",isBookRead(books, "Devastación")); // true
    console.log("isBookRead(books, 'Canción de hielo y fuego')",isBookRead(books, "Canción de hielo y fuego")); // false
    console.log("isBookRead(books, 'Los Pilares de la Tierra')",isBookRead(books, "Los Pilares de la Tierra")); // false
}
