import { h } from 'preact';

/*
  * @TODO
  * Add Blog Tab
*/

// Returns tab title in lowercase to set as href.
const setHref = v =>
  // If value has any whitespace, replace it with _
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