import React, { Component } from 'react';

import Card from '../components/Card';

import '../styles/Workshops.css';

import sass from '../assets/Workshops/sass.png'
import splash from '../assets/Workshops/splash-ionic.png'
import react from '../assets/Workshops/react.png'
import layout from '../assets/Workshops/layout.png'
import emoji from '../assets/Workshops/emoji.png'

class Workshops extends Component {
  render() {
    return (
      <div className="workshops">
        <code>Here I share some <span>workshops</span> that I do for communities:</code>
        <section className="workshops__cards">
          <Card img={sass} link="https://github.com/teffcode/sass-workshop" text="Landing Page - SASS and BEM for MedellinCSS"></Card>
          <Card img={layout} link="https://github.com/teffcode/piocamp-css-workshop" text="Web Page - CSS for PioCamp"></Card>
          <Card img={emoji} link="https://github.com/teffcode/EmojiWorkshop_ReactJS" text="Todo List - React for PionerasDev"></Card>
          <Card img={react} link="https://github.com/teffcode/piocamp-react-workshop" text="Search - React for PioCamp"></Card>
          <Card img={splash} link="https://github.com/teffcode/Splash_Ionic" text="Ionic Splash - CSS Animations for PionerasDev"></Card>
        </section>
      </div>
    );
  }
}

export default Workshops;