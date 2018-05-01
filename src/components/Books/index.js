import { h } from 'preact';
import data from './books.json';
import Shelf from './Shelf';

// Renders a Shelf of Books for each category.
function renderBooks(data) {
  // Capture book categories
  let categories = [];
  data.forEach(book => {
    if(!categories.includes(book.status))
      categories.push(book.status);
  })

  let shelves = categories.map(cat => {
    // return books whose category match current category
    let books = data.filter(book => book.status === cat);
    return <Shelf title={cat} books={books} />
  })

  return shelves;
}

const Books = () => (
  <div id='bookshelf'>
    {renderBooks(data)}
  </div>
);

export default Books;