import React, { useState, Fragment } from "react";
import "./App.css";
import Home from "./Component/home";
import About from "./Component/about";

import { BrowserRouter, Link , Route, Switch } from 'react-router-dom';

import Sample from "./Sample";
import { ThemeContext, themes } from "./colorContext/theme-context";

function App() {
  const [sampleState, setSampleState] = useState({
    persons: "Tamil from state",
  });

  const btnClick = () => {
    setSampleState({ persons: "Arasu state changed using useState" });

    //   async getDataFetch(){
    //     const response =
    //       await fetch("https://dog.ceo/api/breeds/list/all",
    //         { headers: {'Content-Type': 'application/json'}}
    //       )
    //     console.log(await response.json())
    // }
  };

  
  return (
    <Fragment>
      <div>
        <Link to="/home">Home </Link>
        <Link to="/about">About Us </Link>
        <Link to="/sample">Sample Routing </Link>
      </div>
      <br />
     
     
   
    <div className="App">

      <main>
        <Switch>
          <Route path="/home" component={Home}/>
          <Route path="/about" component={About} />
        </Switch>
      </main>
     
      <header className="App-header">
        <button onClick={() => btnClick()}>
          Welcome {sampleState.persons}
        </button>
      </header>

      <ThemeContext.Provider value={themes}>
      <Sample testData="Tamil">Parent data 1: </Sample>
      <Sample testData="Prabu">Parent data 2: </Sample>
      <Sample testData="Naveen">Parent data 3:</Sample>
      <br />
      </ThemeContext.Provider>
    </div>
    </Fragment>
  );
}

export default App;
