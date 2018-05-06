import { h } from 'preact';
import Contact from './Contact';

const Profile = () =>
    <section>
      <p>
      {/* https://pbs.twimg.com/profile_images/893115397225930752/n4PNi5Xu_400x400.jpg */}
        <img src='https://www.w3schools.com/w3images/avatar2.png'/>
      </p>
      <Contact />
    </section>

export default Profile;