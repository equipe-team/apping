import React, { Component } from 'react';
import PersonCard from './PersonCard'
import logo from './logo.svg';
import './App.css';
import CardBase from './CardBase';
import ScreeningDetail from './ScreeningDetail';
import ApplicationCard from './ApplicationCard';

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
           <div className='h-100 pa3' style={{
             background: '#333D4B'
           }}>
              <div className='flex'>
                <CardBase>
                  <ScreeningDetail/>
                  <ScreeningDetail/>
                </CardBase>
                <CardBase>
                  <ApplicationCard />
                </CardBase>
                <div className='flex flex-column'>
                  <PersonCard name={'Rene Brandel'} lastMessage={'Hello, Sir! Pretend that I have a british accent'} />
                  <PersonCard name={'Rene Brandel'} lastMessage={'Hello, Sir! Pretend that I have a british accent'} />
                  <PersonCard name={'Rene Brandel'} lastMessage={'Hello, Sir! Pretend that I have a british accent'} />
                </div>
              </div>

              <div>
              </div>
           </div>

         
        </div>
      
      </div>
    );
  }
}