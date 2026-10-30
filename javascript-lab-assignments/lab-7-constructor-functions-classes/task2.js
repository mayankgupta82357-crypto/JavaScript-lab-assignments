
 // Name: Mayank Gupta
 // Roll No.: 2510303296
 // Assignment: 7, Task 2

class Book {
    constructor(title, pages) {
        this.title = title;
        this.pages = pages;
    }

    summary() {
        return this.title + " has " + this.pages + " pages";
    }
}

const book1 = new Book("Algorithms", 320);
console.log(book1.summary());
