import { h } from 'preact';
import data from './skills.json';
import Skill from './Skill';
import Set from './Set';

// Render a section of icons for every skill type
function renderSkills(data) {
  // determine skill types
  let types = [];
  data.forEach(skill => {
    if(!types.includes(skill.type))
      types.push(skill.type);
  });

  // Render a skill set for each skill type
  let sets = types.map(type => {
    // return skills whose type matches current type
    let skills = data.filter(skill => skill.type === type);
    return <Set type={type} skills={skills} />
  })

  return sets;

  // let skills = data.map(s => <Skill icon={s.icon} name={s.name} />)
  // return skills;
}

const Skillset = () => 
  <div id='skillset'>
    {renderSkills(data)}
  </div>

export default Skillset;