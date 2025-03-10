import "./style/App.css";
import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default class App extends Component {
  pageSize = 10;

  state = {
    progress:0
  }

  setProgress(progress){
    this.setState({progress: progress})
  }

  render() {
    return (
      <div>
        <Router>
          <NavBar />
          <LoadingBar
            color="#f11946"
            progress={this.state.progress}
          />
          <Routes>
            <Route
              path="/"
              element={
                <News
                  setProgress = {setProgress}
                  key="general"
                  pageSize={this.pageSize}
                  country="us"
                  category="general"
                />
              }
            ></Route>
            <Route
              path="/business"
              element={
                <News
                  setProgress = {setProgress} 
                  key="business"
                  pageSize={this.pageSize}
                  country="us"
                  category="business"
                />
              }
            ></Route>
            <Route
              path="/entertainment"
              element={
                <News
                  setProgress = {setProgress} 
                  key="entertainment"
                  pageSize={this.pageSize}
                  country="us"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              path="/health"
              element={
                <News
                  setProgress = {setProgress} 
                  key="health"
                  pageSize={this.pageSize}
                  country="us"
                  category="health"
                />
              }
            ></Route>
            <Route
              path="/science"
              element={
                <News
                  setProgress = {setProgress} 
                  key="science"
                  pageSize={this.pageSize}
                  country="us"
                  category="science"
                />
              }
            ></Route>
            <Route
              path="/sports"
              element={
                <News
                  setProgress = {setProgress} 
                  key="sports"
                  pageSize={this.pageSize}
                  country="us"
                  category="sports"
                />
              }
            ></Route>
            <Route
              path="/technology"
              element={
                <News
                  setProgress = {setProgress} 
                  key="technology"
                  pageSize={this.pageSize}
                  country="us"
                  category="technology"
                />
              }
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
