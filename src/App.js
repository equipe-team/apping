import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

export default class App extends Component {
  render() {
    return (
      <div className='vh-100 w-100 flex'>
        <div >
          <div>
          photo
          </div>
              
          <div>
          inbox
          </div>
        
          <div>
          alarm
          </div>
        
          <div>
          timer
          </div>
        
          <div>
          stamp
          </div>
        </div>

        <div>
           <div className='flex'>
             <div>
               equipe
             </div>

              <div className='flex'>
                <div>
                search
                </div>

                <div>
                notifications
                </div>
              </div>
           </div>

           <div>
          
              <div>
              </div>

              <div>
              </div>
           </div>

         
        </div>
      
      </div>
    );
  }
}