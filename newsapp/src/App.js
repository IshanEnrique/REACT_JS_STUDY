import "./App.css";

import React, { Component } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import config from "./config/local-config.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

export default class App extends Component {
  newsApi = config.newsApi;

  componentDidMount(){
        this.newsApi.apiToken=process.env.REACT_APP_NEWS_API_KEY;    
  }
  state={
    progress:0
  }

  setProgress=(progress)=>{
    
    this.setState({progress:progress})
  }
  render() {
    return (
      <div>
        <Router>
          <LoadingBar
            color="red"
            height={2.5}
            progress={this.state.progress}
            
          />
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={<News setProgress={this.setProgress}  newsApi={this.newsApi} category={"general"} />}
            />

            <Route
              exact
              path="/business"
              element={
                <News setProgress={this.setProgress} 
                  key="business"
                  newsApi={this.newsApi}
                  category={"business"}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress={this.setProgress} 
                  key="entertainment"
                  newsApi={this.newsApi}
                  category={"entertainment"}
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News setProgress={this.setProgress} 
                  key="general"
                  newsApi={this.newsApi}
                  category={"general"}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News setProgress={this.setProgress}  key="health" newsApi={this.newsApi} category={"health"} />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News setProgress={this.setProgress} 
                  key="science"
                  newsApi={this.newsApi}
                  category={"science"}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News setProgress={this.setProgress}  key="sports" newsApi={this.newsApi} category={"sports"} />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News setProgress={this.setProgress} 
                  key="technology"
                  newsApi={this.newsApi}
                  category={"technology"}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  }
}
