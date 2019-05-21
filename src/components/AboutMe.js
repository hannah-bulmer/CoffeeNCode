import React from 'react';
import Picture from '../static/elonMusk.jpg';

class AboutMe extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      checked: {
        drive: true, campfire: true, sail: false, earth: false, wave: false,
      },
    }
  }

  renderOrderedList() {
    const enjoy = "math, programming, travelling, being outdoors, filmmaking, playing Wii".split(',');
    return "<ul>" + enjoy.map(item => "<li>" + item + ",</li>").join('') + "</ul>";
  }

  renderAboutMe() {
    const aboutMe = [
      "I am Elon Musk - a technology entrepreneur, investor, and engineer. I hold South African, Canadian, and U.S. citizenship and am the founder, CEO, and lead designer of SpaceX; co-founder, CEO, and product architect of Tesla, Inc.; co-founder and CEO of Neuralink; founder of The Boring Company; co-founder and co-chairman of OpenAI; and co-founder of PayPal. In December 2016, I was ranked 21st on the Forbes list of The World's Most Powerful People. As of April 2019, I have a net worth of $22.3 billion and am listed by Forbes as the 40th-richest person in the world.",
    ];
    return aboutMe.map(section => <div><div dangerouslySetInnerHTML={{__html: section}} /><br /></div>)
  }

  render() {
    return (
      <div className="page subpage">
            <div className="leftCol about" style={{"background-color": "white"}}>
            <h1>About me</h1>
              {this.renderAboutMe()}
              Source: <a href="https://en.wikipedia.org/wiki/Elon_Musk">Wikipedia</a>
            </div>
            <div className="rightCol">
              <h3>Pic of Me</h3>
              <img src={Picture} style={{width: "80%", "border-radius": "5px", "padding-bottom": "30px"}} />
            </div>
      </div>
    )
  }
}

export default AboutMe;