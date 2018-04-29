// Dependencies
import { h, Component } from 'preact';
import Router from 'preact-router';

// Import Main Components
import Header from './components/Header'
import Nav from './components/Nav/Nav';
import tabs from './components/Nav/tabs.json';
import About from './components/About';
import Skills from './components/Skills';
import Books from './components/Books';

/* 
  * @TODO
  * Add footer with links to github, twitter, and email
  * Incorporate blog (future)
*/

class App extends Component {
  render(props) {
    return (
      <div id='main'>
      {/* Components outside of router persist
      throughout all pages */}
        <Header />
        <Nav tabs={tabs} />

        <Router>
          <About  path='/about'   />
          <Skills path='/skills'  />
          <Books  path='/books'   />
        </Router>
      </div>
    )
  }
}

export default App;