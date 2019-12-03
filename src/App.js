// src/App.js
import React, { Component } from 'react';
import User from './componets/User';
import Navbar  from './componets/Navbar.js'

// App.js
class App extends Component {
  state = {
    userA: {
      firstName: "Harper",
      avatarUrl: "https://www.refreshmiami.com/wp-content/uploads/2018/07/55085_logo-ironhack.png",
      bootcamp: 'Ironhack',
    },
    userB: {
      firstName: "Ana",
      avatarUrl: "https://s3.amazonaws.com/owler-image/logo/ironhack_owler_20180828_221413_original.png",
      bootcamp: 'Ironhack',
    },
    clickCount: 0,
    backColor: 'yellow',
  };

  colorMapper = () => {
    const hexColor = "#" + Math.floor(Math.random() * 16777215).toString(16);
    return hexColor;
  };

  clickHandler = () => {
    
    const updatedCount = this.state.clickCount + 1;

    this.setState( { clickCount: updatedCount } );
    
    /* YOUR CODE HERE */
    if( (updatedCount % 5) === 0 ) {

      const newColor = this.colorMapper();
      // const updatedCount =this.state.clickCount +1;
      this.setState({backColor: newColor})

    }
    // else {
    //   // const updatedCount = this.state.clickCount +1;
    //   // this.setState({ clickCount: updatedCount})
    // }
  };

  render() {
    return (
      <div className="App">

      <Navbar />
        
        <h1>React = state and props</h1>
        <p>Count is: {this.state.clickCount}</p>
        <button onClick={this.clickHandler}> Click me </button>

        <User
          theColor={this.state.backColor}
          firstName={this.state.userA.firstName}
          image={this.state.userA.avatarUrl}
          bootcampName={this.state.userA.bootcamp}
           />
        <User 
          firstName={this.state.userB.firstName}
          image={this.state.userB.avatarUrl}
          bootcampName={this.state.userB.bootcamp}
           />
      </div>
    );
  }
}

export default App;