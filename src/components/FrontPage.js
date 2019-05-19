import React from 'react';
import Background from '../static/snow.jpg';
import WebsiteLink from './WebsiteLink';

class FrontPage extends React.Component {
  renderLinks() {
    return (
      this.props.links.map(link => <WebsiteLink link={link.link} image={link.image} />)
    )
  }
  
  renderSearch(name) {
    const dropdownClass = "dropdown-content " + (this.state.showDropdown && "open");
    return (
      <div class="dropdown" ref={myDropdown => this.myDropdown = myDropdown}>
        <button class="dropbtn" onClick={this.openDropdown}>{name}</button>
        <div class={dropdownClass}>
          <button value={6167865} onClick={this.getNewWeather}>Toronto</button>
          <button value={6176823} onClick={this.getNewWeather}>Waterloo</button>
          <button value={5128638} onClick={this.getNewWeather}>New York</button>
          <button value={2654675} onClick={this.getNewWeather}>Bristol</button>
      </div>
    </div>
    )
  }

  render() {
    return (
      <div className="page">
        <img className="backgroundImage image" src={Background} />
        <header className="header sticky">
          <button className="App headerTabs" onClick={this.props.scrollToAbout}>About</button>
          <button className="App headerTabs" onClick={this.props.scrollToProjects}>Projects</button>
        </header>
          <div className="title">Elon Musk</div>
          <h4>Innovator • Rocketship enthusiast</h4>
          {this.renderLinks()}
      </div>
    )
  }
}

export default FrontPage;