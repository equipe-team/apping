import React, { Component } from 'react';

export default class ScreeningDetails extends Component {

    sendNotification() {
        fetch('https://8592cd6e.ngrok.io/', {
            method: 'POST',
            body: 'How are you' 
        })
    }

    render() {
        return (
        <div
          className='flex flex-column justify-top white'
          style={{width: 200, height: 75, background: '#203044'}}>
         <div >
          <img src={this.props.src} className="profilePic"/>
            <span className="personName">{this.props.name}</span>
            <img
                src="https://cdn0.iconfinder.com/data/icons/math-business-icon-set/93/1_1-128.png"
                className="inviteBtn"
                onClick={this.sendNotification.bind(this)}
            />
          </div>
        </div>
        )
    }
}