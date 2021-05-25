import { StrictMode } from "react";
import ReactDOM from "react-dom";
import React from 'react';
import App from "./App";
import {BrowserRouter as Router} from 'react-router-dom';
const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <Router>
    <App />
    </Router>
  </StrictMode>,
  rootElement
);
