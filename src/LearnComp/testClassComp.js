import React, { Component, Fragment } from "react";
import styles from "../App.css";
import { connect} from 'react-redux';
import {reducer } from "../strore/reducer"

console.log(styles) 

class TestApp extends Component {
  constructor(props) {
    super(props);
    this.state = { name: "Before State TestApp", count: 0 };
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

  counterChangedHandeler = (e) => {
    debugger
    var updateCount = this.state.count + 10;
    this.setState({ name: "Modified with state test App", count: updateCount });
  };

  render() {
    return (
      <Fragment>
        <div className={styles.error}>
          {/* <button  onClick={this.counterChangedHandeler}> */}
          <button  onClick={this.counterChangedHandeler}>
            Click Me. {this.state.name} and count is {this.state.count}
          </button>
          {
            //  {todos.map(todo => (
            //   <li key={todo.id} {...todo} onClick={() => toggleTodo(todo.id)} />
            // ))}
          }
        </div>
      </Fragment>
    );
  }
}

const mapStateToProps = state=> {
  return { ctn : state.count} 
}
const mapDispatchToProps = ({dispatch}) => {
debugger
  return { 
    onIncremental:() => { 
    debugger
    dispatch({type:"increment"}) } }
}

export default connect(mapStateToProps, mapDispatchToProps) (TestApp);
