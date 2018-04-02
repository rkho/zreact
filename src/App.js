import React, { Component } from 'react';
import './App.css';

import fillerText from './fillerText';
import Categories from './components/Categories';
import Section from './components/Section';

class App extends Component {
  constructor (props) {
    super (props);
    this.state = {
      activeTabIndex: 0
    }
  }

  getFillerContent () {
    if (this.state.activeTabIndex !== 3) {
      return fillerText.tabContent[this.state.activeTabIndex];
    }

    return fillerText.randomlyGenerateAllContent();
  }

  onClick (index) {
    if (this.state.activeTabIndex !== index) {
      this.setState({
        activeTabIndex: index
      });
    }
  }

  render() {
    return (
      <div className="App">
        <Categories
          activeTabIndex={this.state.activeTabIndex}
          onClick={(index) => this.onClick(index)}
          tabNames={fillerText.tabNames}
        />
        <Section
          content={this.getFillerContent()}
        />
      </div>
    );
  }
}

export default App;
