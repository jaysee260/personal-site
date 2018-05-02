import { h } from 'preact';
import Profile from './Profile';
import Bio from './Bio';
import about from './about.md'

const About = () => (
  <div id='about'>
    <Profile />
    <Bio about={about} />
  </div>
);

export default About;