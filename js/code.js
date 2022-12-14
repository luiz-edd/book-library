// variables
let myLibrary = [];
const library = document.querySelector(".library-container");
const form = document.querySelector("#form-book");
const title = form.elements["title"];
const author = form.elements["author"];
const pages = form.elements["pages"];
const readed = form.elements["readed"];
let btnRemove = document.querySelectorAll(".btn-remove");





// cardBook.innerHTML =`<div>Title: <span></span></div>
// <div>Author: <span></span></div>
// <div>Pages: <span></span></div>
// <div>ID: <span></span></div>
// <div>Readed: <span></span></div>`;

// constructor and prototypes
function Book(title, author, pages, readed) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readed = readed;
    addBookToLibrary(this);
}
Book.prototype.info = function () {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, Readed: ${this.readed}`;
}

//functions
function addBookToLibrary(book) {
    myLibrary.push(book);
}
function displayLibrary() {
    let i = 0;
    myLibrary.forEach(book => {
        console.log("Book number " + i + ": " + book.info() + "\n----------------- ");
        i++;
    });
}
function addCardBookText(cardNode) {
    // let cardBook = document.createElement('div');
    let auxString = ""
    readed.checked ? auxString = "Yes" : auxString = "No";
    cardNode.innerHTML = `<div>Title: <span>${title.value}</span></div>
    <div>Author: <span>${author.value}</span></div>
    <div>Pages: <span>${pages.value}</span></div>
    <div>ID: <span></span></div>
    <div>Readed: <span>${auxString}</span></div>
    <button class="btn-remove">Remove</button>`;
}
function createCardBook() {
    const newBook = new Book(title.value, author.value, pages.value, readed.checked); //create book obj and add to the library array
    let bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    bookCard.setAttribute("data-index", 1);
    addCardBookText(bookCard); //take the form value and put into this card 
    library.appendChild(bookCard);
    updateList();
}

function removeBook(element) {
    myLibrary.includes()
    element.parentElement.remove();
}

// events   
form.addEventListener("submit", (event) => {
    event.preventDefault()
    createCardBook();
    form.reset();
})

function updateList() {
    btnRemove = document.querySelectorAll(".btn-remove");
    Array.from(btnRemove).forEach(function (element) {
        element.addEventListener('click', (event) => {
            removeBook(element);
        });
    });
}
//   btnRemove.addEventListener("click", () =>{
    // console.log("test");
// })
