import { h } from 'preact';
import data from './skills.json';
import Skill from './Skill';

// Render an icon for every skill
function renderSkills(data) {
  let skills = data.map(s => <Skill icon={s.icon} name={s.name} />)
  return skills;
}

const Skillset = () => 
  <div id='skillset'>
    {renderSkills(data)}
  </div>

export default Skillset;