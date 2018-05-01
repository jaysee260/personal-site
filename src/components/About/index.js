import { h } from 'preact';
// import Markdown from 'preact-markdown';
import Profile from './Profile';
import Bio from './Bio';

const About = () => (
  <div id='about'>
    <Profile />
    <Bio />
  </div>
);

export default About;