import { h, Component } from 'preact';
import Router from 'preact-router';
import Header from './components/Header'
import Nav from './components/Nav/Nav';
import tabs from './components/Nav/tabs.json';

import About from './components/About';
import Skills from './components/Skills';
import Books from './components/Books';

export default class App extends Component {
  render(props) {
    return (
      <div id='main'>
        <Header />
        <Nav tabs={tabs} />

        <Router>
          <About path='/about' />
          <Skills path='/skills' />
          <Books path='/books' />
        </Router>
      </div>
    )
  }
}