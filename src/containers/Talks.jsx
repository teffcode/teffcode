import React, { Component } from 'react';

import Card from '../components/Card';

import '../styles/Talks.css';

class Talks extends Component {
  render() {
    return (
      <div className="talks">
        <code>Here I share some <span>talks</span> that I have given:</code>
        <section className="talks__cards">
          <Card img="" link="https://goo.gl/4wz1NE" text="Programming Visual Art for JS Conf CO 2018"></Card>
          <Card img="" link="https://goo.gl/SH27Qw" text="How to begin with the WEB ? for PioCamp"></Card>
          <Card img="" link="https://github.com/teffcode/slides-view-encapsulation" text="View Encapsulation for Angular Medellín"></Card>
          <Card img="" link="https://github.com/teffcode/CSSGrid_CustomSlides" text="CSS Grid for Medellín CSS"></Card>
          <Card img="" link="https://goo.gl/D6M1WE" text="React for Pioneras Developers"></Card>
          <Card img="" link="https://github.com/teffcode/animations-css-recipe" text="CSS Animations for Pioneras Developers"></Card>
        </section>
      </div>
    );
  }
}

export default Talks;