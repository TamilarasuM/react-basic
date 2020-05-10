import React, { useState, Fragment } from "react";
import { Link, Route, Switch } from "react-router-dom";
import Home from "./Component/home";
import About from "./Component/about";
import Category from "./Component/category";
import Products from "./Component/Products";
import Sample from "./Sample";
import { ThemeContext, themes } from "./colorContext/theme-context";
import  "./App.css";

function App() {
  const [sampleState, setSampleState] = useState({ persons: "Tamil from state"});
  const btnClick = () => {
  setSampleState({ persons: "Arasu state changed using useState" });
};
// const test
const element = (
  <div>
    <h1>Hello, world!</h1>
    <h2>It is {new Date().toLocaleTimeString()}.</h2>
  </div>
);

return (
    <Fragment>
      <div className="navigation">
        <Link to="/home">Home </Link>
        <Link to="/about">About Us </Link>
        <Link to="/category">Category </Link>
        <Link to="/products">Products </Link>
      </div>
      <br />
      <div className="App">
        <div className="">
          <main>
            <Switch>
              <Route path="/home" component={Home} />
              <Route path="/about" component={About} />
              <Route path="/category" component={Category} />
              <Route path="/products" component={Products} />
              <Route
                path="/:id"
                render={() => (
                  <p>
                    I want this text to show up for all routes other than '/',
                    '/products' and '/category'{" "}
                  </p>
                )}
              />
            </Switch>
          </main>
        </div>
        <br />
        <header className="App-header">
          {element}
          <br />
          <button onClick={() => btnClick()}>{sampleState.persons}</button>
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
