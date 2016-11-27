import React, { Component } from 'react';


export default class ScreeningDetails extends Component {
    render() {
        return (
        <div
          className='flex flex-column justify-top white'
          style={{width: 200, height: 75, background: '#203044'}}>
          <div >
          <img src={this.props.src} className="profilePic"/>
            {this.props.name}
            <img src="https://cdn0.iconfinder.com/data/icons/math-business-icon-set/93/1_1-128.png" className="inviteBtn"/>
          </div>
        </div>
        )
    }
}