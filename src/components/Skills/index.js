import { h } from 'preact';
import data from './skills.json';
import Skill from './Skill';
import Category from './Category';

// Render an icon for every skill
function renderSkills(data) {
  let categories = [];
  data.forEach(skill => {
    if(!categories.includes(skill.type))
      categories.push(skill.type);
  });

  let sets = categories.map(type => {
    // return skill whose type matches current type
    let skills = data.filter(skill => skill.type === type);
    return <Category type={type} skills={skills} />
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