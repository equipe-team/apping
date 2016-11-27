import React, { Component } from 'react';

export default class ContactCard extends Component {
    render() {
        return (
        <div
          className='shadow-5 flex justify-start items-center white pa3'
          style={{background: '#213043'}}>
          <div className='flex flex-column black-40 mr2 items-start'>
            <div>
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