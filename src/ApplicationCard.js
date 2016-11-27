import React, { Component } from 'react';

export default class ScreeningDetails extends Component {
    render() {
        return (
        <div className='flex flex-column white pa2'>
            <div className='b f4'>
                Application in Progress
            </div>
            <div className="">
                <div>
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
                <div>
                </div>
            </div>
        </div>
        )
    }
}