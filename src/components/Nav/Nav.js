import { h } from 'preact';

// Returns all lowercase tab title to set as href.
// If title has any whitespace, replaces it with _
const setHref = v =>
  /\s/.test(v) ? v.split(' ').join('_').toLowerCase() :
  v.toLowerCase();

const Nav = ({ tabs }) => 
  <nav>
    {
      tabs.map(t => (
        <p>
          <a href={ t.path }>{ t.title.toUpperCase() }</a>
        </p>
      ))
    }
  </nav>

export default Nav;