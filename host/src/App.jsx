import React from "react";
import ReactDOM from "react-dom";

import Counter from "remote/Counter";
import Exemplu from "remote2/Exemplu";

import { connect } from 'react-redux';

import {Provider} from "react-redux";
import PostsContainer from './components/PostsContainer'
import store from "./redux/store";

import "./index.css";

const App = () => (
  <div className="container">
    <div>Name: host</div>
    <Counter/>
    <Exemplu/>
    <Provider store={store}>
    <PostsContainer />
   </Provider>
  </div>
);
ReactDOM.render(<App />, document.getElementById("app"));
