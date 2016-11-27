import React, { Component } from 'react';
import azure  from 'azure';

export default class ScreeningDetails extends Component {

    render() {

        var sendNotification = function (){

           
            var notificationHubService = azure.createNotificationHubService('Equipe', 'Endpoint=sb://equipe.servicebus.windows.net/;SharedAccessKeyName=DefaultFullSharedAccessSignature;SharedAccessKey=wawiOibI+6VvrN+tfGoaJzk1rw+6g6JKIIl5tdl2vcs=');
        notificationHubService.apns.send(
            null,
            {"aps":
                {
                "alert": "Hello from Mobile Services!"
                }
            },
            function (error)
            {
                if (!error) {
                    console.warn("Notification successful");
         }
     }
 );
        }

        return (
        <div
          className='flex flex-column justify-top white'
          style={{width: 200, height: 75, background: '#203044'}}>
          <div >
          <img src={this.props.src} className="profilePic"/>
            <span className="personName">{this.props.name}</span>
            <img src="https://cdn0.iconfinder.com/data/icons/math-business-icon-set/93/1_1-128.png" className="inviteBtn" onClick={sendNotification}/>
          </div>
        </div>
        )
    }
}