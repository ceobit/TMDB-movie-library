// delete btn
const ul = document.querySelector('#movieDesc');
ul.addEventListener('click', (event) => {
  if (event.target.tagName === 'BUTTON') {
    const button = event.target;
    const li = button.parentNode;
    const ul = li.parentNode;
    if (button.textContent === 'Remove') {
      ul.removeChild(li);
    }
  }
});

// searching :I tried  it but its not working
const searchBar = document.forms['search-book'].querySelector('input');
searchBar.addEventListener('keyup', function (e) {
  const term = e.target.value.toLowerCase();
  const books = list.getElementsByTagName('li');
  Array.form(books).forEach(function (book) {
    const title = book.firstElementChild.textContent;
    if (title.toLowerCase().indexOf(term) != -1) {
      book.style.display = 'block';
    } else {
      book.style.display = 'none';
    }
  });
});
