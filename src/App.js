import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className='vh-100 w-100 flex justify-center items-center'>
        <div
          className='shadow-5 flex flex-column justify-center items-center white'
          style={{width: 300, background: '#333D4C'}}>
          <div>
          </div>
          <div className='b f3 mt3'>
            Rene Brandel
          </div>
          <div className='white-80 f6 mt3'>
            Prague, Czech Republic
          </div>
          <div className='flex justify-center items-center bg-black mt3 pa3'>
            <div className='tc' style={{width: 120}}>
              Available
            </div>
            <div className='flex flex-column justify-center items-center' style={{width: 120}}>
              <div>
                100%
              </div>
              <div>
                Response Rate
              </div>
            </div>
            <div className='flex flex-column justify-center items-center' style={{width: 120}}>
              <div>
                1 hour
              </div>
              <div>
                Response Time
              </div>
            </div>
          </div>
          <div className='tl w-100 b white-70 mt3 ph3 pv2'>
            Coder's message
          </div>
          <div className='tl w-100 white ph3 pv1 mb3'>
            I've been coding since 7+ years. I started out as a C# developer but then I discovered the power of the functional programming languages like JavaScript and Python.
          </div>
          <div className='pa3 w-100 flex items-center justify-center pointer white'
            style={{
              background: 'linear-gradient(135deg, #4887c4 0%,#9579b8 100%)' 
            }}>
            Contact Me
          </div>
        </div>
      </div>
    );
  }
}

export default App;
