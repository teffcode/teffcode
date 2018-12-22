import React, { Component } from 'react';

import '../styles/MedellinCSS.css';

import meet1 from '../assets/MedellinCSS/meet1.jpeg'
import meet2 from '../assets/MedellinCSS/meet2.jpeg'
import meet3 from '../assets/MedellinCSS/meet3.jpeg'
import meet4 from '../assets/MedellinCSS/meet4.jpeg'
import meet5 from '../assets/MedellinCSS/meet5.jpeg'
import meet6 from '../assets/MedellinCSS/meet6.jpeg'
import meet7 from '../assets/MedellinCSS/meet7.jpeg'
import meet8 from '../assets/MedellinCSS/meet8.jpeg'
import meet9 from '../assets/MedellinCSS/meet9.jpeg'
import meet10 from '../assets/MedellinCSS/meet10.jpeg'

class MedellinCSS extends Component {
  render() {
    return (
      <div className="medellincss">
        <code>
          I'm co-organizer of <span>MedellínCSS</span> community. <br/>
          We are interested on tech about CSS and Front-end in general. <br/>
          And, we are <span>1000</span> members in Meetup application. <br/> <br/>
          Here, some pics !
        </code>
        <section className="medellincss__images">
          <img src={meet1} alt="meetup1-pic"/>
          <img src={meet2} alt="meetup1-pic"/>
          <img src={meet3} alt="meetup1-pic"/>
          <img src={meet4} alt="meetup1-pic"/>
          <img src={meet5} alt="meetup1-pic"/>
          <img src={meet6} alt="meetup1-pic"/>
          <img src={meet7} alt="meetup1-pic"/>
          <img src={meet8} alt="meetup1-pic"/>
          <img src={meet9} alt="meetup1-pic"/>
          <img src={meet10} alt="meetup1-pic"/>
        </section>
      </div>
    );
  }
}

export default MedellinCSS;