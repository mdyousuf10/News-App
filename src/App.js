
import './App.css';
import Navbar from './components/Navbar'

import React, { Component } from 'react'
import News from './components/News';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoadingBar from 'react-top-loading-bar'

export default class App extends Component {

  

        state = {
          // mode:'light',
          progress:0
        }
      setProgress=(progress)=>{
        this.setState({
          progress:progress
        })
      }
      
      toggleMode = ()=>{
        if(this.state.mode ==='light'){  
          this.setState({
            mode:'dark'
        })
        document.body.style.backgroundColor = 'black';      
        }  
        else{
          this.setState({
            mode:'light'
        })
        document.body.style.backgroundColor = 'white'; 
        }
      }
      
  render() {
    return (
      <>
        <Router>
      <Navbar mode={this.state.mode} toggleMode={this.toggleMode}/>
      {/* used top-loader npm package  */}
      <LoadingBar
        height={3}
        color='#f11946'
        progress={this.state.progress}
      />
     
      <Switch>
        <Route exact path="/"><News setProgress={this.setProgress} key='general' mode={this.state.mode} toggleMode={this.toggleMode} pagesize={15} country='in' category={'general'}/></Route>
        <Route exact path="/business"><News setProgress={this.setProgress} key='business'  mode={this.state.mode} toggleMode={this.toggleMode} pagesize={15} country='in' category={'business'}/></Route>
        <Route exact path="/entertainment"><News setProgress={this.setProgress} key = "entertainment"  mode={this.state.mode} toggleMode={this.toggleMode} pagesize={15} country='in' category={'entertainment'}/></Route>
        <Route exact path="/general"><News setProgress={this.setProgress} key = "general"  mode={this.state.mode} toggleMode={this.toggleMode} pagesize={15} country='in' category={'general'}/></Route>
        <Route exact path="/health"><News setProgress={this.setProgress} key = "health"  mode={this.state.mode} toggleMode={this.toggleMode} pagesize={15} country='in' category={'health'}/></Route>
        <Route exact path="/science"><News setProgress={this.setProgress} key = "science"  mode={this.state.mode} toggleMode={this.toggleMode} pagesize={15} country='in' category={'science'}/></Route>
        <Route exact path="/sports"><News setProgress={this.setProgress} key = "sports"  mode={this.state.mode} toggleMode={this.toggleMode} pagesize={15} country='in' category={'sports'}/></Route>
        <Route exact path="/technology"><News setProgress={this.setProgress} key = "technology"  mode={this.state.mode} toggleMode={this.toggleMode} pagesize={15} country='in' category={'technology'}/></Route>
      </Switch>
      </Router>
      </>
    )   
  }
}


