import React from 'react';
import Background from '../static/snow.jpg';

class Projects extends React.Component {
  render() {
    return (
      <div>
        <h1>Projects</h1>
        <br />
        <div>
          <h4><b>Tesla</b> (2008 - present)</h4>
          <span>
            CEO of Tesla. I run management things and build self driving cars!
            Check out a portfolio of my work <a href="https://www.tesla.com/">here</a>.
          </span>
          <br /> <br />
          <h4><b>PayPal</b> (2003 - present)</h4>
          <span>
            Created PayPal
          </span>
          <br /> <br />
          <h5><b>Some other interests of mine include</b></h5>
          <ul>
            <li>Space travel</li>
            <li>Visiting mars</li>
            <li>Digging tunnels</li>
            <li>Cooler better faster transportation</li>
            <li>Selling hats and flame throwers</li>
          </ul>
        </div>
        <img className="backgroundImage image" src={Background} />
      </div>
    )
  }
}

export default Projects;