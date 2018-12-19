import React, { Component } from 'react';

import '../styles/Aboutme.css';

class AboutMe extends Component {
  render() {
    return (
      <section className="aboutme">
        <img src="https://pbs.twimg.com/profile_images/949660707758460928/1Mrd1dB3_400x400.jpg" alt="Estefany-profile-pic"/>
        <code>Hi, I'm Estefany Aguilar Restrepo</code>
        <code>I'm Co-Organizer of <span>MedellínCSS</span> Community</code>
        <code>and I'll tell you a little about myself :)</code>
        <article>
          <code>
            - I was born on February 1, 1994 👶 <br/> 
            - I live in Medellín, Colombia 💐 <br/> 
            - I'm Telecommunications Engineer 🎓 <br/> 
            - I was speaker at <span>JS Conf CO 2018</span> 🎤 <br/> 
            - I was mentor at <span>PioCamp</span> 💅 <br/> (Programming  Bootcamp to Girls)<br/> 
            - I was mentor at <span>NG Girls</span> 🅰 <br/> 
            - I was <span>Coder Dojo</span> volunteer 💻 <br/> (I taught App Inventor) <br/> 
          </code>
        </article>
      </section>
    );
  }
}

export default AboutMe;