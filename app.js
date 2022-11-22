//console.log("Hello World")

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





let placeholder = {
  title : "Halloween",
  author : "Mike Myers",
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
let anotherBook = new Book(bookDescriptionForm.title.value, bookDescriptionForm.author.value, bookDescriptionForm.pages.value);
myLibrary.push(anotherBook);
//console.table(myLibrary);
document.getElementById("bookDescriptionForm").reset(); //clears previous form input
//loop over array to create elements in the DOM from the objects 
for (let i = 0; i < myLibrary.length; i++){
  console.log(myLibrary[i].title, myLibrary[i].author, myLibrary[i].pages);
}

}

//div>ul>li{title}{author}{pages} this is the element structure
//trying to create the book, this will be added to the  addToLibrary Function
const container = document.createElement('div');//the card that contains the object
const ul = document.createElement('ul');//the structure for displaying the object
const liTitle = document.createElement('li')//the individual object properties
const liAuthor = document.createElement('li')
const liPages = document.createElement('li')
const libraryDisplay = document.querySelector(".library");//the library section in HTML

container.classList.add('bookCard') ;

//container.textContent = "are we working?";//dummy content, refactor to be dynamic
liTitle.textContent = "Title";
liAuthor.textContent = "Author";
liPages.textContent = "Pages";

ul.appendChild(liTitle);
ul.appendChild(liAuthor);
ul.appendChild(liPages)
container.appendChild(ul);
libraryDisplay.appendChild(container);





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

