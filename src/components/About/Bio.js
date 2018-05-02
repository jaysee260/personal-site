import { h } from 'preact';
import Markdown from 'preact-markdown';


// Ideally, we'd pass in markdown as
// props and use preact-markdown to render
const Bio = ({ about }) => 
    <article>
      <Markdown markdown={about} />
    </article>

export default Bio;