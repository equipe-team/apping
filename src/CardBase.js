import React, { Component } from 'react';

export default class CardBase extends Component {
    render() {
        return (
        <div
            className='shadow-5 flex flex-column items-center white'
            style={{backgroundColor: '#333'}}>
        {this.props.children} 
        </div>
        )
    }
}