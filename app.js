/*
How will this work
-user clicks a button that brings up a form (add book)
-once a submit button is clicked data for the form is put into an object
-that objects data is then displayed on a page
-repeating adds new objects, and new boxes to the page

needs
-object storage (in an array)
-a way to create new objects
    -clicking add book prompts the user to fill out a form
    -clicking submit calls the function that takes that form data and puts it in an an object which is then stored in an array

//example object
let bookOne = {
    title: "title",
    author: "author",
    pages: 300,
    isFiction: false,
    isFinished: true
}

*/
/*
let placeholder = {
  title : "Friday the 13th",
  author : "Jasons Mom",
  pages : 666,
  isRead : true
}

let myLibrary = [placeholder];

function Book(title, author, pages) {
  // the constructor...
  this.title = title
  this.author = author
  this.pages = pages
}

function addBookToLibrary() { //take user’s input and store the new book objects into an array
  // do stuff here
  //form name -> input name-> input value
let anotherBook = new Book(
  bookDescriptionForm.title.value, 
  bookDescriptionForm.author.value, 
  bookDescriptionForm.pages.value
  );
 // Check if the book is already in the library
  let isDuplicate = false;
  for (let i = 0; i < myLibrary.length; i++) {
    if (
      myLibrary[i].title == anotherBook.title &&
      myLibrary[i].author == anotherBook.author &&
      myLibrary[i].pages == anotherBook.pages
    ) {
      isDuplicate = true;
      alert("error")
      break;
    }};

myLibrary.push(anotherBook);
createCard(anotherBook)
document.getElementById("bookDescriptionForm").reset(); //clears previous form input
//loop over array to create elements in the DOM from the objects 

}

//create book card
function createCard (book) {
  const card = document.createElement('div');//the card that contains the object
  const ul = document.createElement('ul');//the structure for displaying the object
  const liTitle = document.createElement('li');//the individual object properties
  const liAuthor = document.createElement('li');
  const liPages = document.createElement('li');
 
  //add data to card
  liTitle.textContent = book.title;
  liAuthor.textContent = book.author;
  liPages.textContent = book.pages;

 //apppend it all
  ul.appendChild(liTitle);
  ul.appendChild(liAuthor);
  ul.appendChild(liPages)
  card.appendChild(ul);
 
  const library = document.querySelector(".library");//the library section in HTML
  library.appendChild(card);

  card.classList.add('bookCard');
  ul.classList.add('attributes');
}



*/
//make the add book display a form
const addBookBTN = document.querySelector('#addABookBTN');
addBookBTN.addEventListener('click', () => {
    document.getElementById("bookDescriptionForm").style.visibility = "visible" ;
})
//hide the form after submission
const submitThisBookBTN = document.querySelector('#submitBookBTN');
submitThisBookBTN.addEventListener('click', () => {
  document.getElementById('bookDescriptionForm').style.visibility = "hidden";
})

//data storage, logic of adding book to Library to the array
let myLibrary = [];

function addBook (auth, tit, pag){
  const myBook = new Book(auth, tit, pag);

  avoidDuplication(myLibrary, myBook);

}

//class structuring
class Book {

  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }

  get title(){
    return this._title;
  }
  get author(){
    return this._author;
  }
  get pages(){
    return this._pages;
  }

set title(input){
  if (input.length < 1){
    alert('book title is too short');
    return;
  }
  return this._title = input;
}
set author(input){
  if (input.length < 1){
    alert('Please enter the name of the author');
    return;
  }
  this._author = input;
}
set pages(input){
  if (input < 1){
    alert('Please enter the number of pages');
    return;
  }
  this._pages = input;
}
}

//runs when adding book to make sure theres no duplicates
function avoidDuplication(library, book){
  let isDuplicate = false;

  library.forEach((item) => {
    if (item.toString() === book.toString()) {
      isDuplicate= true;
      alert('Already in Library')
      console.log(item.toString(), book.toString());
    }
  });
  if (!isDuplicate) {
    library.push(book);
    createBookCard(book)
  }
}

//submit book button on the DOM
function submitBook(){
  const title = document.getElementById("title").value;
  const author = document.getElementById("author").value;
  const pages = parseInt(document.getElementById("pages").value);
  addBook(title, author, pages)
  //render the library
  //render the card
}

//runs after book is confirmed to not be duplicated
function createBookCard(bookObject){
  //create card
  const library = document.querySelector(".library");//the library section in HTML
  const card = document.createElement('div');//the card that contains the object
  const ul = document.createElement('ul');//the structure for displaying the object
  const liTitle = document.createElement('li');//the individual object properties
  const liAuthor = document.createElement('li');
  const liPages = document.createElement('li');

  liTitle.textContent = bookObject.title;
  liAuthor.textContent = bookObject.author;
  liPages.textContent = bookObject.pages;

  ul.appendChild(liTitle);
  ul.appendChild(liAuthor);
  ul.appendChild(liPages)
  card.appendChild(ul);
  library.appendChild(card);

  card.classList.add('bookCard');
  ul.classList.add('attributes');
 
}