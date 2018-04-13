import React, { Component } from "react";
import { Route } from "react-router-dom";
import Article from "./article";
import { Footer, Layout, Navbar } from "./layout";
import Explore from "./explore";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Layout>
        <Navbar />
        <Route path="/article" component={Article} />
        <Route path="/explore" component={Explore} />
        <Route exact path="/" component={Explore} />
        <Footer />
      </Layout>
    );
  }
}

export default App;
