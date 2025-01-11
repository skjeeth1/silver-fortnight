const library = [];

const cont = document.querySelector(".container");
const dialogEl = document.querySelector("dialog");

document.querySelector("#add-element").addEventListener('click', (e) => {
    dialogEl.showModal();
});

document.querySelector("form").addEventListener(
    'submit', (e) => {
        e.preventDefault();
        const data = new FormData(e.target);
        addToBookLibrary(
            data.get("book_title"),
            data.get("author_name"),
            data.get("count_pages"),
            data.get("read_check")
        );
        
        console.log(data.get("read_check"));
        dialogEl.close();
    }
)

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

    this.createDomElement = function () {
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
