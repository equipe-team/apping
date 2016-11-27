import React, { Component } from 'react';

export default class CardBase extends Component {
    render() {
        return (
        <div
            className='shadow-5 flex flex-column justify-center items-center white ma2'
            style={{backgroundColor: '#213043'}}>
            {this.props.children} 
        </div>
        )
    }
}