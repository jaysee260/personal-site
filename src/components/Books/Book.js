import { h } from 'preact';

const Book = ({ cover, title, site }) =>
  <li>
    <a href={site} target='_blank'>
      <img class='book' src={cover} alt={title} />
    </a>
  </li>

export default Book;