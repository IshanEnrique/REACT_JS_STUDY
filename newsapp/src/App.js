import "./App.css";

import React, { useState,useEffect } from "react";
import NavBar from "./components/NavBar";
import News from "./components/News";
import config from "./config/local-config.json";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoadingBar from "react-top-loading-bar";

function App() {
  const [newsApi, setNewsApi] = useState(config.newsApi);

  config.newsApi.apiToken=process.env.REACT_APP_NEWS_API_KEY;

  useEffect(() => {    
  }, []);

  const [progress, setProgress] = useState(0);

const  setProgressBar=(progress1)=>{
    setProgress(progress1);
  }
  
    return (
      <div>
        <Router>
          <LoadingBar
            color="red"
            height={2.5}
            progress={progress}
            
          />
          <NavBar />
          <Routes>
            <Route
              exact
              path="/"
              element={<News setProgress={ setProgressBar}  newsApi={ newsApi} category={"general"} />}
            />

            <Route
              exact
              path="/business"
              element={
                <News setProgress={ setProgressBar} 
                  key="business"
                  newsApi={ newsApi}
                  category={"business"}
                />
              }
            />
            <Route
              exact
              path="/entertainment"
              element={
                <News setProgress={ setProgressBar} 
                  key="entertainment"
                  newsApi={ newsApi}
                  category={"entertainment"}
                />
              }
            />
            <Route
              exact
              path="/general"
              element={
                <News setProgress={ setProgressBar} 
                  key="general"
                  newsApi={ newsApi}
                  category={"general"}
                />
              }
            />
            <Route
              exact
              path="/health"
              element={
                <News setProgress={ setProgressBar}  key="health" newsApi={ newsApi} category={"health"} />
              }
            />
            <Route
              exact
              path="/science"
              element={
                <News setProgress={ setProgressBar} 
                  key="science"
                  newsApi={ newsApi}
                  category={"science"}
                />
              }
            />
            <Route
              exact
              path="/sports"
              element={
                <News setProgress={ setProgressBar}  key="sports" newsApi={ newsApi} category={"sports"} />
              }
            />
            <Route
              exact
              path="/technology"
              element={
                <News setProgress={ setProgressBar} 
                  key="technology"
                  newsApi={ newsApi}
                  category={"technology"}
                />
              }
            />
          </Routes>
        </Router>
      </div>
    );
  
}


export default App;