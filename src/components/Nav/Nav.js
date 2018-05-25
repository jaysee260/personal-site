import { h } from 'preact';
import { Link } from 'preact-router/match'

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
    {tabs.map(t => (
        <p>
          <Link activeClassName='active' href={ t.path }>{ t.title.toUpperCase() }</Link>
        </p>
      ))}
  </nav>

export default Nav;