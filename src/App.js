
import './App.css';
import Navbar from './components/Navbar'

import React, { Component } from 'react'
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

export default class App extends Component {
      constructor() {
        super();
        this.state = {
          mode:'light'
        };
      }
      toggleMode = ()=>{
        if(this.state.mode ==='light'){  
          this.setState({
            mode:'dark'
        })
        console.log(this.state.cmode);
        document.body.style.backgroundColor = 'black';      
        }  
        else{
          this.setState({
            mode:'light'
        })
         console.log(this.state.cmode);
        document.body.style.backgroundColor = 'white'; 
        }
      }
  render() {
    return (
        <Router>
      <Navbar mode={this.state.mode} toggleMode={this.toggleMode}/>
      <Switch>
        <Route exact path="/"><News key='general' mode={this.state.mode} toggleMode={this.toggleMode} pagesize={6} country='in' category={'general'}/></Route>
        <Route exact path="/business"><News key='business'  pagesize={6} country='in' category={'business'}/></Route>
        <Route exact path="/entertainment"><News key = "entertainment"  pagesize={6} country='in' category={'entertainment'}/></Route>
        <Route exact path="/general"><News key = "general"  pagesize={6} country='in' category={'general'}/></Route>
        <Route exact path="/health"><News key = "health"  pagesize={6} country='in' category={'health'}/></Route>
        <Route exact path="/science"><News key = "science"  pagesize={6} country='in' category={'science'}/></Route>
        <Route exact path="/sports"><News key = "sports"  pagesize={6} country='in' category={'sports'}/></Route>
        <Route exact path="/technology"><News key = "technology"  pagesize={6} country='in' category={'technology'}/></Route>
      </Switch>
      </Router>
    )   
  }
}


