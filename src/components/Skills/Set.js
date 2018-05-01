import { h } from 'preact';
import Skill from './Skill';

const Set = ({ type, skills }) => 
  <section class='skill-category' id={type}>
    {
      skills.map(s => <Skill icon={s.icon} name={s.name} />)
    }
  </section>

export default Set;