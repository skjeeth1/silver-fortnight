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
        e.target.reset();
        console.log(data.get("read_check"));
        dialogEl.close();
    }
)

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.button = null;
    this.domEl = null;

    this.createDomElement = function () {
        const main = document.createElement("div");
        const title = document.createElement("div");
        const author = document.createElement("div");
        const pages = document.createElement("div");
        const read_card = document.createElement("div");
        const read = document.createElement("button");
        const rem = document.createElement("button");

        rem.addEventListener('click', (e) => {
            removeFromLibrary(this.title);
        });

        this.button = rem;
        this.domEl = main;

        title.innerText = this.title;
        author.innerText = this.author;
        pages.innerText = this.pages + "pages";
        read_card.innerText = "Status: " + (this.read ? "Read" : "Not read");
        read.innerText = !this.read ? "Read?" : "Not read?";
        rem.innerText = "Remove";

        main.appendChild(title);
        main.appendChild(author);
        main.appendChild(pages);
        main.appendChild(read_card);
        main.appendChild(read);
        main.appendChild(rem);
        
        main.classList.add("card");
        read.classList.add("define")
        cont.appendChild(main);

        read.addEventListener('click', (e) => {
            this.read = !this.read;
            e.target.innerText = !this.read ? "Read?" : "Not read?";
        })

    }
}

function addToBookLibrary(title, author, pages, read) {
    const book = new Book(title, author, pages, read);
    book.createDomElement();
    library.push(book);
}

function removeFromLibrary(title) {
    for (let i = library.length - 1; i >= 0; i--) {
        if (library[i].title == title) {
            cont.removeChild(library[i].domEl);
            library.splice(i);
        }
    }
}
