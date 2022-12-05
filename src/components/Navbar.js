import React, { Component } from 'react'
import night from './night-mode.svg'
import {
  Link
} from "react-router-dom";

export class Navbar extends Component {

  render() {
    return (
      <div><nav className={`navbar navbar-expand-lg  navbar-${this.props.mode} bg-${this.props.mode}`} >
      <div className="container-fluid">
        <Link className="navbar-brand" to="/">NewsMonkey</Link>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse " id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{color:'white'}} >
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item"><Link className="nav-link" to="/business">Business</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/entertainment">Entertainment</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/general">General</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/health">Health</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/science">Science</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/sports">Sports</Link></li>
            <li className="nav-item"><Link className="nav-link" to="/technology">Technology</Link></li>
          </ul>
          
        </div>
      </div>
    </nav>
    <div className="container d-flex flex-row bd-highlight mb-3 overflow-auto">
    <div className='p-2 bd-highlight'>
      <button><Link className="nav-link active" aria-current="page" to="/">Home</Link>
      </button>
      </div>
      <div className='p-2 bd-highlight'><button><Link className="nav-link" to="/business">Business</Link>
      </button>
      </div>
      <div className='p-2 bd-highlight'><button>
      <Link className="nav-link" to="/entertainment">Entertainment</Link>
      </button>
      </div>
      <div className='p-2 bd-highlight'><button>
      <Link className="nav-link" to="/general">General</Link>
      </button>
      </div>
      <div className='p-2 bd-highlight'><button>
      <Link className="nav-link" to="/health">Health</Link>
      </button>
      </div>
      <div className='p-2 bd-highlight'><button>
      <Link className="nav-link" to="/science">Science</Link>
      </button>
      </div>
      <div className='p-2 bd-highlight'><button>
      <Link className="nav-link" to="/sports">Sports</Link>
      </button>
      </div>
      <div className='p-2 bd-highlight'><button>
      <Link className="nav-link" to="/technology">Technology</Link>
      </button>
      </div>
    </div>
    <div className={`form-check form-switch text-${this.props.mode==='dark'?'light':'dark'}`}>
          {/* <input className="form-check-input" type="checkbox" onClick={this.props.toggleMode}  role="Switch" aria-checked="true" id="flexSwitchCheckDefault"/> */}
          <img className='night' style={{margin: '-32px'}} onClick={this.props.toggleMode} src={night} alt="" srcset="" />
          </div>
    </div>
    )
  }
}

export default Navbar