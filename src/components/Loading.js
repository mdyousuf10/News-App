import React, { Component } from 'react'
import loading from '../Spinner.gif'

export class Loading extends Component {
  render() {
    return (
      <div className='text-center mt-4' >
        <img style={{
          width: '100px'
        }} src={loading} alt="loading" />
      </div>
    )
  }
}

export default Loading