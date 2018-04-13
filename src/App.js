import React, { Component } from "react";
import { Route } from "react-router-dom";
import Article from "./article";
import { Footer, Layout, Navbar } from "./layout";
import Explore from "./explore";
import Links from "./links";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Layout>
        <Navbar />
        <Route path="/article" component={Article} />
        <Route path="/explore" component={Explore} />
        <Route path="/links" component={Links} />
        <Route exact path="/" component={Links} />
        <Footer />
      </Layout>
    );
  }
}

export default App;
