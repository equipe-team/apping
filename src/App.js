import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CardBase from './CardBase';
import ScreeningDetail from './ScreeningDetail';

export default class App extends Component {
  render() {
    return (
      <div className='vh-100 w-100 flex'>
        <div style={{
          width: '145px',
          backgroundColor: '#152233'
        }}>
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

        <div className='w-100'>
           <div className='flex w-100 items-center justify-between' style={{
            height: '80px',
            backgroundColor: '#213043',

           }}>
             <div className='white f3 ttu'>
            
             Equipe
               
             </div>

              <div className='flex'>
                <div>
                
                </div>

                <div>
                notifications
                </div>
              </div>
           </div>
           <CardBase>
            
           </CardBase>
            <ScreeningDetail/>
            <ScreeningDetail/>
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