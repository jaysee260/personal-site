import { h } from 'preact';
import Markdown from 'preact-markdown';

const Bio = ({ about }) => 
  <article>
    <Markdown markdown={about} />
  </article>

export default Bio;