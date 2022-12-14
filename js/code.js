// variables
let myLibrary = [];
const library = document.querySelector(".library-container");
const form = document.querySelector("#form-book");
const title = form.elements["title"];
const author = form.elements["author"];
const pages = form.elements["pages"];
const read = form.elements["read"];
let btnRemove = document.querySelectorAll(".btn-remove");





// cardBook.innerHTML =`<div>Title: <span></span></div>
// <div>Author: <span></span></div>
// <div>Pages: <span></span></div>
// <div>ID: <span></span></div>
// <div>read: <span></span></div>`;

// constructor and prototypes
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.id = Math.floor(Math.random() * 100000);
    addBookToLibrary(this);
}
Book.prototype.info = function () {
    return `Title: ${this.title}, Author: ${this.author}, Pages: ${this.pages}, read: ${this.read}`;
}

//functions
function addBookToLibrary(book) {
    myLibrary.push(book);
}
function displayLibrary() {
    let i = 0;
    myLibrary.forEach(book => {
        console.log("Book number " + i + ": " + book.info());
        i++;
    });
    console.log("------------------------------------- ")
}
function addCardBookText(cardNode, newBook) {
    // let cardBook = document.createElement('div');
    let auxString = ""
    read.checked ? auxString = "Yes" : auxString = "No";
    cardNode.innerHTML = `<div>Title: <span>${title.value}</span></div>
    <div>Author: <span>${author.value}</span></div>
    <div>Pages: <span>${pages.value}</span></div>
    <div>Read: <span>${auxString}</span></div>
    <button class="btn-remove">Remove</button>`;
    // <div>ID: <span class=">${newBook.id} </span></div>

}
function createCardBook() {
    const newBook = new Book(title.value, author.value, pages.value, read.checked); //create book obj and add to the library array
    let bookCard = document.createElement("div");
    
    bookCard.classList.add("book-card");
    bookCard.setAttribute("data-index", newBook.id);
    addCardBookText(bookCard, newBook); //take the form value and put into this card
    library.appendChild(bookCard);
    removeBookAndUpdateList();
}

function removeBook(element) {
    let bookId = element.parentElement.getAttribute("data-index");
    myLibrary.forEach((element, index, array) => {
        if(element.id == bookId){
            myLibrary.splice(index, 1);
            displayLibrary();
        }
    });
    element.parentElement.remove();
}

// events
form.addEventListener("submit", (event) => {
    event.preventDefault()
    createCardBook();
    form.reset();
})

function removeBookAndUpdateList() {
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
