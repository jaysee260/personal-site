import { h } from 'preact';
import { contact } from './data.json';

function renderIcons(data) {
    let icons = data.map(i =>  (
        <a id={i.name} class='icon' href={i.href} target='_blank'>
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