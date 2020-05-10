import React, { Component, useContext } from "react";
import {connect } from "react-redux";
import {addTodo} from "../strore/actions";

const Home = ({ dispatch }) => {
  let input;
  return (
    <div>
      {
        <div>
          <div>Home page.. </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              if (!input.value.trim()) {
                return;
              }
              dispatch(addTodo(input.value));
              input.value = "";
            }}
          >
             <input ref={node => input = node} />
            <button type="submit">Add Todo</button>
          </form>

          
        </div>
      }
    </div>
  );
};

export default connect() (Home);
