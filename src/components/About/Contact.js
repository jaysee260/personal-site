import { h } from 'preact';
import { contact } from './data.json';

function renderIcons(data) {
  // If not an email, return href. if email, prepend 'mailto:' to href
  let setHref = i => !(i.name === 'email') ? i.href : 'mailto:' + i.href;

  let icons = data.map(i =>  (
      <a id={i.name} class='icon' href={setHref(i)} target='_blank'>
          <i class={`${i.fa_class}`}></i>
      </a>
  ))
  return icons;
}

const Contact = () =>
  <div id='contact'>
    {renderIcons(contact)}
  </div>

export default Contact;