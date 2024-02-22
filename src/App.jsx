import { Component } from 'react'

import Navbar from './Components/Navbar'
import News from './Components/News'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";

export default class App extends Component {
  render() {

    // const page = 6
    return (
      <div>
        <Router>
          <Navbar/>
          <Routes>
            <Route path='/' element={<News key='general' country='in' category='entertainment' />}></Route>
            <Route path='/Technology' element={<News key='tech' country='in' category='tech' />}></Route>
            <Route path='/Business' element={<News key='Business' country='in' category='business' />}></Route>
            <Route path='/Entertainment' element={<News key='Entertainment' country='in' category='Entertainment' />}></Route>
            <Route path='/General' element={<News key='general' country='in' category='general' />}></Route>
            <Route path='/Health' element={<News key='health' country='in' category='health' />}></Route>
            <Route path='/Science' element={<News key='Science' country='in' category='science' />}></Route>
            <Route path='/Sports' element={<News key='Sports' country='in' category='sports' />}></Route>
          </Routes>
        </Router>
      </div>
    )
  }
}
