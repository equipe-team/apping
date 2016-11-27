import React, { Component } from 'react';

export default class ScreeningDetails extends Component {
    render() {
        return (
        <div
          className='flex flex-column justify-top white'
          style={{width: 200, height: 75, background: '#203044'}}>
          <div >
          <img src={this.props.src} className="profilePic"/>
            Test
          </div>
        </div>
        )
    }
}