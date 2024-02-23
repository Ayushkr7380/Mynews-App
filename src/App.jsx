import { Component } from "react";
import LoadingBar from 'react-top-loading-bar'

import Navbar from "./Components/Navbar";
import News from "./Components/News";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


export default class App extends Component {
  state = {
    progress : 20
}

setprogress=(progress)=>{
    this.setState({
        progress : progress
    })
}
  render() {
    // const page = 6
    return (
      <div>
        <Router>
          <Navbar />
          <LoadingBar
          color="#f11946"
          progress={this.state.progress}
          onLoaderFinished={() => this.state.setprogress(0)}
        />
          <Routes>
            <Route
              path="/"
              element={
                <News key="general" setprogress={this.setprogress} country="in" category="entertainment" />
              }
            ></Route>
            <Route
              path="/Technology"
              element={<News key="tech" setprogress={this.setprogress} country="in" category="tech" />}
            ></Route>
            <Route
              path="/Business"
              element={<News key="Business" setprogress={this.setprogress} country="in" category="business" />}
            ></Route>
            <Route
              path="/Entertainment"
              element={
                <News
                  key="entertainment"  setprogress={this.setprogress}
                  country="in"
                  category="entertainment"
                />
              }
            ></Route>
            <Route
              path="/General"
              element={<News key="general" setprogress={this.setprogress} country="in" category="general" />}
            ></Route>
            <Route
              path="/Politics"
              element={<News key="politics" setprogress={this.setprogress} country="in" category="politics" />}
            ></Route>
            <Route
              path="/Science"
              element={<News key="Science" setprogress={this.setprogress} country="in" category="science" />}
            ></Route>
            <Route
              path="/Sports"
              element={<News key="Sports" setprogress={this.setprogress} country="in" category="sports" />}
            ></Route>
            <Route
              path="/Food"
              element={<News key="food" setprogress={this.setprogress} country="in" category="food" />}
            ></Route>
          </Routes>
        </Router>
      </div>
    );
  }
}
