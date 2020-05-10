import React from "react";
import { Link, Route } from "react-router-dom";
import About from "./about";

const Category = ({ match }) => {
    console.log(match);
  return (
    <div>
      {" "}
      <ul>
        <li>
          <Link to={`${match.url}/shoes`}>Shoes</Link>
        </li>
        <li>
          <Link to={`${match.url}/boots`}>Boots</Link>
        </li>
        <li>
          <Link to={`${match.url}/footwear`}>Footwear</Link>
        </li>
      </ul>
      <Route
        path={`${match.path}/:name`}
        render={({ match }) => (
          <div>
            {"Inside Sub category"}
            <h3> {match.params.name} </h3>
            <About></About>
          </div>
        )}
      />
    </div>
  );
};
export default Category;