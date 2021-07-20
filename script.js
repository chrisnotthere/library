const libraryDisplay = document.querySelector('div[id="library"]');
const addBookBtn = document.querySelector('button[id="newBook"]');
const submitBtn = document.getElementById("submit");

let myLibrary = [];
//let bookIndex = 0;

//book constructor
function Book(title, author, pages, read){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;

}

// Book.prototype.info = function(){
//     return {
//         title : this.title,
//         author : this.author,
//         pages : this.pages,
//         read : this.read
//     };
// }

//add book to start oy library array
function addBookToLibrary(book){
    myLibrary.unshift(book);
}


//display all books in library
function displayMyLibrary(library){


    //clear display before getting books
    libraryDisplay.innerHTML = '';

    library.forEach(element => {
        //console.log(element.title);

        //make card for each book
        libraryDisplay.innerHTML += `<div class="card" data-bookTitle="${element.title}">
                                        <div class="container">
                                        <span class="delete" data-bookTitle="${element.title}">&times;</span>
                                        <h4><b>"${element.title}"</b></h4>
                                        <p>by ${element.author}</p>
                                        <p>${element.pages} pages</p>
                                        <p>Read? ${element.read}</p>
                                        </div>
                                    </div>`;

    });

    //define remove book buttons
    const removeBookBtn = document.querySelectorAll('span[class="delete"]');

    removeBookBtn.forEach(element => {
      element.addEventListener('click', function removeBookBtn(e){
    
        title = element.getAttribute('data-booktitle');
        console.log(title);
        removeBook(title);
      });
    });
}


//// add sample books to library ////
const theHobbit = Object.create(Book.prototype);
theHobbit.title = 'The Hobbit';
theHobbit.author = 'J.R.R Tolkien';
theHobbit.pages = 295;
theHobbit.read = false;

const endersGame = Object.create(Book.prototype);
endersGame.title = `Ender's Game`;
endersGame.author = 'Orsen Scott Card';
endersGame.pages = 324;
endersGame.read = true;

const theTimeMachine = Object.create(Book.prototype);
theTimeMachine.title = 'The Time Machine';
theTimeMachine.author = 'H.G.Wells';
theTimeMachine.pages = 84;
theTimeMachine.read = true;

addBookToLibrary(theHobbit);
addBookToLibrary(endersGame);
addBookToLibrary(theTimeMachine);

//print library to the screen
displayMyLibrary(myLibrary);


//// submit button in add book modal
submitBtn.onclick = function() {

    modal.style.display = "none";
    bookTitle = document.getElementById('bookTitle').value;
    bookAuthor = document.getElementById('bookAuthor').value;
    bookPages = document.getElementById('bookPages').value;
    bookRead = document.getElementById('bookRead').checked;

    const newBook = Object.create(Book.prototype);
    newBook.title = bookTitle;
    newBook.author = bookAuthor;
    newBook.pages = bookPages;
    newBook.read = bookRead;

    //alert(newBook);
    addBookToLibrary(newBook);
    displayMyLibrary(myLibrary);

}



function removeBook(title){

  const index = myLibrary.findIndex(book => book.title === title);
  console.log(index);

  myLibrary.splice(index, 1);


  //'refresh' library display after removing a book
  displayMyLibrary(myLibrary);

}








//// the modal stuff for add a new book  ////
// Get the modal
const modal = document.getElementById("myModal");

// Get the <span> element that closes the modal
const span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
addBookBtn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
