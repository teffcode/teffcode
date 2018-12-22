import React, { Component } from 'react';

import Card from '../components/Card';

import '../styles/MedellinCSS.css';

class MedellinCSS extends Component {
  render() {
    return (
      <div className="medellincss">
        <code>
          I'm co-organizer of <span>MedellínCSS</span> community. <br/>
          We are interested on tech about CSS and Front-end in general. <br/>
          And, we are <span>1000</span> members in Meetup application.
        </code>
        <section className="medellincss__cards">
          <Card img="" link="" text=""></Card>
          <Card img="" link="" text=""></Card>
          <Card img="" link="" text=""></Card>
          <Card img="" link="" text=""></Card>
        </section>
      </div>
    );
  }
}

export default MedellinCSS;