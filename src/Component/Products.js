import React from "react";
import { BrowserRouter, Link, Route, Switch } from "react-router-dom";
import Product from './product'

const Products = ({ match }) => {
  const productsData = [
    {
      id: 1,
      name: "NIKE Liteforce Blue Sneakers",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin molestie.",
      status: "Available",
    },

    //Rest of the data has been left out for code brevity
  ];
  /* Create an array of `<li>` items for each product */
  const linkList = productsData.map((product) => {
    return (
      <li>
        <Link to={`${match.url}/${product.id}`}>{product.name}</Link>
      </li>
    );
  });

  return (
    <div>
      <div>
        <div>
          <h3> Products</h3>
          <ul> {linkList} </ul>
        </div>
      </div>

      <Route
        path={`${match.url}/:productId`}
        render={(props) => <Product data={productsData} {...props} />}
      />
      <Route
        exact
        path={match.url}
        render={() => <div>Please select a product.</div>}
      />
    </div>
  );
};

export default Products;