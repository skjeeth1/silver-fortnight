const library = [];
let index = 0;

const cont = document.querySelector(".container");

const button = document.querySelector("button");
button.addEventListener('click', (e) => {
    addToBookLibrary("blah", "author", 142, true);
})

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.createDomElement = function () {

        console.log("blah");

        const main = document.createElement("div");
        const title = document.createElement("div");
        const author = document.createElement("div");
        const pages = document.createElement("div");
        const read = document.createElement("div");

        title.innerText = this.title;
        author.innerText = this.author;
        pages.innerText = this.pages;
        read.innerText = this.read ? "Read" : "Not read";

        main.appendChild(title);
        main.appendChild(author);
        main.appendChild(pages);
        main.appendChild(read);

        cont.appendChild(main);
    }
}

function addToBookLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    book.createDomElement();
    library.push(book);
}
