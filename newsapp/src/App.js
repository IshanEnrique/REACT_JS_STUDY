import './App.css';

import React, { Component } from 'react'
import NavBar from './components/NavBar';
import News from './components/News';
import config from './config/local-config.json';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


export default class App extends Component {
  
  newsApi=config.newsApi;

  render() {
    return (
      <div>
        <Router>
        <NavBar />
          <Routes>
            
            <Route exact path='/' element ={<News newsApi={this.newsApi} category={"general"}  /> } />

            <Route exact path='/business' element={       <News key="business" newsApi={this.newsApi} category={"business"}  />} />
            <Route exact path='/entertainment' element={  <News key="entertainment" newsApi={this.newsApi} category={"entertainment"}  />} />
            <Route exact path='/general' element={        <News key="general" newsApi={this.newsApi} category={"general"}  />} />
            <Route exact path='/health' element={         <News key="health" newsApi={this.newsApi} category={"health"}  />} />
            <Route exact path='/science' element={        <News key="science" newsApi={this.newsApi} category={"science"}  />} />
            <Route exact path='/sports' element={         <News key="sports" newsApi={this.newsApi} category={"sports"}  />} />
            <Route exact path='/technology' element={     <News key="technology" newsApi={this.newsApi} category={"technology"}  />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
