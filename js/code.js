// variables
let myLibrary = []; 
const newBook = document.querySelector(".new-book");
const library = document.querySelector(".library-container");


// cardBook.innerHTML =`<div>Title: <span></span></div>
// <div>Author: <span></span></div>
// <div>Pages: <span></span></div>
// <div>ID: <span></span></div>
// <div>Readed: <span></span></div>`;

// functions
function Book(title, author, pages, readed){ //constructor
    this.title = title;
    this.author = author;
    this.pages = pages;
    readed ? this.readed = "readed" : this.readed = "not readed";
    addBookToLibrary(this);
}

Book.prototype.info = function(){
    return `${this.title}, ${this.author}, ${this.pages} pages, ${this.readed}`;
}

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
    cardNode.innerHTML =`<div>Title: <span></span></div>
    <div>Author: <span></span></div>
    <div>Pages: <span></span></div>
    <div>ID: <span></span></div>
    <div>Readed: <span></span></div>`;
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
newBook.addEventListener("click", () => {
    createCardBook();
})