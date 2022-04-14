import React, { Component } from 'react';
import filler from '../../images/shepherd.png';
import feathers from '../../images/feathers.png'

const SectionFive = () => {
    return (
      <div id='section-five'>
        <div id="section-five-img">  
          <img id='filler-img' src={feathers}/>
        </div>
        <div id="section-five-text">
          <div>
            <h1>Light As A Feather</h1>
            <h3>We created StashQL to be a light-weight NPM package so that your application can run as smoothly as possible</h3>
          </div>
        </div>
      </div>
    );
};

export default SectionFive;