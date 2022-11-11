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


let myLibrary = [];

function Book(title, author, pages, isFiction, isFinished) {
  // the constructor...
  this.title = title
  this.author = author
  this.pages = pages
  this.isFiction = isFiction
  this.isFinished = isFinished

}

function addBookToLibrary() {
  // do stuff here
}


const addBookBTN = document.querySelector('#addABookBTN');
//click add a book to make the form visible
addBookBTN.addEventListener('click', () => {
    document.getElementById("bookDescriptionForm").style.visibility = "visible" ;
})