import React from "react";
import ReactDOM from "react-dom";
import {
  BrowserRouter as Router,
  Route,
  Switch
} from 'react-router-dom'
import Container from "./components/LayoutComponents/Container/Container";
import Layout from "./components/Layout/Layout";
import "./styles/skeleton.css";

ReactDOM.render(
  <Router basename="/app">
     <Container css={{ height: "100vh" }}>
      <Switch>
        <Route path='/' render={props => <Layout {...props} />} />
      </Switch>
  </Container>
</Router>,
  document.getElementById("root")
);
