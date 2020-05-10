import React, { Component, useContext } from "react";
import TestApp from "./LearnComp/testClassComp";
import {ThemeContext} from './colorContext/theme-context';

const customization ={
  border:"1px solid red",
  padding:"20px",
  margin:"20px"
}

function getFullname(user) {
  return user.firstName + " " + user.lastName;
}
const user = { firstName: "Tamil",  lastName: "Arasu"};


function Sample(props) {
  const themeInfo = useContext(ThemeContext);
  
  return (
    <div style={customization}>
      Child comp with props <strong> {props.testData} </strong> 
      and function call <strong> {getFullname(user)} </strong>
      <br />
      Message from Parent displaying using children : <strong> {props.children} </strong>
      <br />
      <TestApp ></TestApp>
        {
          themeInfo.dark &&
          <React.Fragment>
            <strong>Using useContext:</strong> 
            <div style={{ color: themeInfo.dark.foreground , backgroundColor:themeInfo.dark.background }}>  Use content Dark </div>
            <div style={{ color: themeInfo.light.foreground ,  backgroundColor:themeInfo.light.background}}>  Use content light </div>
            <br/>
            <strong>Using Consumer:</strong>
            <ThemeContext.Consumer>
              {colors => <div style={{color: colors.light.foreground ,  backgroundColor: colors.light.background}}> Consumer Area...</div>}
            </ThemeContext.Consumer>
          </React.Fragment>
        }
    </div>
  );
}

export default Sample;
