import { h } from 'preact';
import Contact from './Contact';

const Profile = () =>
    <section>
      <p>
      {/* https://www.w3schools.com/w3images/avatar2.png */}
        <img src='https://pbs.twimg.com/profile_images/893115397225930752/n4PNi5Xu_400x400.jpg'/>
      </p>
      <Contact />
    </section>

export default Profile;