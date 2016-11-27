import React, { Component } from 'react';

export default class ContactCard extends Component {
    render() {
        return (
        <div
          className='shadow-5 flex justify-start items-start white pa3 ma2 pointer'
          style={{background: '#213043'}}>
          <div className='flex flex-column gray mr3 items-start'>
            <div className='f3'>
                16
            </div>
            <div>
                Nov
            </div>
          </div>
          <div className='flex flex-column'>
            <div className='f3 b truncate'>
              {this.props.name}
            </div>
           <div className='f5 truncate mt3'>
              {this.props.lastMessage}
            </div>
          </div>
        </div>
        )
    }
}