import { h } from 'preact';

const Skill = ({ icon, name }) =>
  <img class='skill' src={icon} alt={name} title={name}/>

export default Skill;