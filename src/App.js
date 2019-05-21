import React, { Component } from 'react';
import '../node_modules/react-linechart/dist/styles.css';
import './App.scss';
import 'bootstrap/dist/css/bootstrap.css';
import FrontPage from './components/FrontPage';
import AboutMe from './components/AboutMe';
import Projects from './components/Projects';

class App extends Component {
  constructor (props) {
    super(props);
    this.myAbout = React.createRef();
    this.myProjects = React.createRef();
  }

  scrollToAbout = () => window.scrollTo(0, this.myAbout.current.offsetTop)
  scrollToProjects = () => window.scrollTo(0, this.myProjects.current.offsetTop)

  render() {
  const links = [
    { link: 'https://www.linkedin.com/', image: require('./static/linkedin.png')},
    { link: 'https://github.com/UWCoffeeNCode', image: require('./static/github.svg')},
    { link: 'https://twitter.com/elonmusk', image: require('./static/twitter.png')},
    { link: 'https://www.facebook.com', image: require('./static/facebook.jpg')}
  ]
  
    return (
      <div>
        <div className="App">
          <div className="particles background">
          <FrontPage
            links={links}
            scrollToAbout={this.scrollToAbout}
            scrollToProjects={this.scrollToProjects}
          />
          <div ref={this.myAbout}>
            <AboutMe />
          </div>
          <div className="page subpage" ref={this.myProjects}>
            <Projects />
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
