function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  fetch('https://anapioficeandfire.com/api/books')
      .then((response) => response.json())
      .then((json)=> {renderBooks(json)});
  
      
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;
    h2.textContent = book.name;
    main.appendChild(h2);
  });
}

fetch(`https://anapioficeandfire.com/api/books/${bookId}`)
     .then( response => response.json())
     .then((data) =>{
      
     })

document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
