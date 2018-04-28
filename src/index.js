import { h, render } from 'preact';
import App from './App';
import './styles/index.scss';

const root = document.getElementById('root');

render(
  <App/>,
  root, root.lastChild
);