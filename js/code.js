// variables
const myLibrary = [];
const library = document.querySelector(".library-container");
const form = document.querySelector("#form-book");
const title = form.elements["title"];
const author = form.elements["author"];
const pages = form.elements["pages"];
const read = form.elements["read"];
let btnRemove = document.querySelectorAll(".btn-remove");
let readCard = document.querySelectorAll(".read-card");





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
    read.checked ? auxString = "checked" : auxString = "";

    cardNode.innerHTML = `<div>
                    <div>Title: ${title.value}</div>
                    <div>Author: ${author.value}</div>
                    <div>Pages: ${pages.value}</div>
                </div>
                <div>
                    <label for="read">Read: </label>
                    <input type="checkbox" ${auxString} name="read" class="read-card">
                    <button class="btn-remove"><svg style="width:15px;height:15px" viewBox="0 0 24 24">
                        <path fill="currentColor"
                            d="M9,3V4H4V6H5V19A2,2 0 0,0 7,21H17A2,2 0 0,0 19,19V6H20V4H15V3H9M7,6H17V19H7V6M9,8V17H11V8H9M13,8V17H15V8H13Z" />
                    </svg>
                </button>
                </div>`;
    // <div>ID: <span class=">${newBook.id} </span></div>

}
function createCardBook() {
    const newBook = new Book(title.value, author.value, pages.value, read.checked); //create book obj and add to the library array
    let bookCard = document.createElement("div");
    
    bookCard.classList.add("book-card");
    bookCard.setAttribute("data-index", newBook.id);
    addCardBookText(bookCard, newBook); //take the form value and put into this card
    library.appendChild(bookCard);
    updateListEvents();
}

function removeBook(element) {
    let cardNode = element.parentElement.parentElement;
    let bookId = cardNode.getAttribute("data-index");
    
    myLibrary.forEach((element, index, array) => {
        if(element.id == bookId){
            myLibrary.splice(index, 1);
            displayLibrary();
        }
    });
    cardNode.remove();
}
function updateRead(element){
    let cardNode = element.parentElement.parentElement;
    let bookId = cardNode.getAttribute("data-index");

    myLibrary.forEach((book) => {
        if(book.id == bookId){
            book.read ? book.read = false : book.read = true;
            if(book.read){
                console.log("now this book is read");
            } else console.log("now this book is unread");
            
        }
    });
}

// events
form.addEventListener("submit", (event) => {
    event.preventDefault()
    createCardBook();
    form.reset();
})

function updateListEvents() {
    btnRemove = document.querySelectorAll(".btn-remove");
    readCard = document.querySelectorAll(".read-card");
    // btnRemove.addEventListener('click', (event) => {
    //     removeBook(element);
    //     console.log("changed");
    // });
    
    Array.from(btnRemove).forEach(function (element) {
        if(element.getAttribute('data-listener') !== 'true'){
            element.setAttribute('data-listener', 'true');
            element.addEventListener('click', (event) => {
                removeBook(element);
            });
        }
    });

    Array.from(readCard).forEach(function (element) {
        if(element.getAttribute('data-listener') !== 'true'){
            element.setAttribute('data-listener', 'true');
            element.addEventListener('change', (event) => {
                updateRead(element);
            });
        }
    });
}

