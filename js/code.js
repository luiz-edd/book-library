// variables
let myLibrary = []; 
//node
const library = document.querySelector(".library-container");
const form = document.querySelector("#form-book");
const title = form.elements["title"];
const author = form.elements["author"]; 
const pages = form.elements["pages"];
const readed = form.elements["readed"];





// cardBook.innerHTML =`<div>Title: <span></span></div>
// <div>Author: <span></span></div>
// <div>Pages: <span></span></div>
// <div>ID: <span></span></div>
// <div>Readed: <span></span></div>`;

// constructor and prototypes
function Book(title, author, pages, readed){ 
    this.title = title;
    this.author = author;
    this.pages = pages;
    readed ? this.readed = "readed" : this.readed = "not readed";
    addBookToLibrary(this);
}

Book.prototype.info = function(){
    return `${this.title}, ${this.author}, ${this.pages} pages, ${this.readed}`;
}

//functions
function addBookToLibrary(book){
    myLibrary.push(book);
}

function displayLibrary(){
    let i = 0;
    myLibrary.forEach(book => {
        console.log("Book number "+ i +": "+ book.info() +"\n ----------------- " );
        i++;
    });
}

function addCardBookText(cardNode){
    // let cardBook = document.createElement('div');
    let auxString =""
    readed.checked ? auxString = "Yes" : auxString = "No";

    cardNode.innerHTML =`<div>Title: <span>${title.value}</span></div>
    <div>Author: <span>${author.value}</span></div>
    <div>Pages: <span>${pages.value}</span></div>
    <div>ID: <span></span></div>
    <div>Readed: <span>${auxString}</span></div>`;
}

function createCardBook() {
    let bookCard = document.createElement("div");
    bookCard.classList.add("book-card");
    addCardBookText(bookCard);
    library.appendChild(bookCard);
}

// let book1 = new Book("hobbit", "alguem", 432, false);
// let book2 = new Book("zelda", "suama", 200, true);
// let book3 = new Book("titan", "dsa", 432, false);
 

// events   
form.addEventListener("submit", (event) => {
    event.preventDefault()
    createCardBook();
    form.reset();
})