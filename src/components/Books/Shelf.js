import { h } from 'preact';
import Book from './Book';

// Assumes it receives filtered books array
const Shelf = ({ title, books }) => 
  <section id={`${title}-books`}>
    <h3>{ title.toUpperCase() }</h3>
    <ul>
      { books.map(b => <Book cover={b.cover} title={b.title} site={b.site}/>) }
    </ul>
  </section>

export default Shelf;