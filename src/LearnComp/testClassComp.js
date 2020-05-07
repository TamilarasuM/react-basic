import React, { Component, Fragment } from "react";

class TestApp extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Before State TestApp" , count:0 };

    const posts = [
      {id: 1, title: 'Hello World', content: 'Welcome to learning React!'},
      {id: 2, title: 'Installation', content: 'You can install React from npm.'}
    ];

  }
  componentDidMount() {
    console.log("componentDidMount");
  }
  componentDidUpdate(prevProps, prevState) {
    console.log("prevProps", prevProps);
    console.log("prevState", prevState);
    console.log("componentDidUpdate");
  }
  componentWillMount() {
    console.log("componentWillMount");
  }
  btnClicked = (e) => {
    var updateCount = this.state.count +10;
    this.setState({ name: "Modified with state test App",count: updateCount });
  };

  
  render() {
    return (
    <Fragment>
    
    <button onClick={this.btnClicked}> Click Me. {this.state.name} and count is  {this.state.count}</button>
    <br/>
    </Fragment>
    );
  }
}

export default TestApp;
