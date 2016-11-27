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
        }}
        className='flex flex-column items-center'
        >
          <div>
          photo
          </div>
              
      
        
          <div className='mv5' style={{
            height: '42px'
          }}>
         
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 32 32" height='100%' enable-background="new 0 0 32 32"><g><path d="M30,32H2.02C0.91,32,0,31.1,0,30V10c0-0.97,0.7-2,2-2h1c0.55,0,1,0.45,1,1s-0.45,1-1,1H2v20h28V10h-1c-0.55,0-1-0.45-1-1   s0.45-1,1-1h1c1.3,0,2,1.03,2,2v20C32,31.1,31.1,32,30,32z"/><path d="M26,17c-0.55,0-1-0.45-1-1V2H7v14c0,0.55-0.45,1-1,1s-1-0.45-1-1V2c0-1.1,0.9-2,2-2h18c1.1,0,2,0.9,2,2v14   C27,16.55,26.55,17,26,17z"/><path d="M16,9h-5c-0.55,0-1-0.45-1-1s0.45-1,1-1h5c0.55,0,1,0.45,1,1S16.55,9,16,9z"/><path d="M21,13H11c-0.55,0-1-0.45-1-1s0.45-1,1-1h10c0.55,0,1,0.45,1,1S21.55,13,21,13z"/><path d="M20,23h-7c-1.1,0-2-0.9-2-2v-1H4c-0.55,0-1-0.45-1-1s0.45-1,1-1h8c0.55,0,1,0.45,1,1v2h7v-2c0-0.55,0.45-1,1-1h7   c0.55,0,1,0.45,1,1s-0.45,1-1,1h-6v1C22,22.1,21.1,23,20,23z"/></g></svg>
          </div>
        
          <div className='mv5' style={{
            height: '42px'
      	  
          }}>
         
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24" x="0px" y="0px" height="100%"><path d="M22.7 5.683c-0.186 0.188-0.445 0.305-0.73 0.305s-0.544-0.116-0.73-0.305l-2.93-2.943c-0.185-0.189-0.3-0.449-0.3-0.735s0.114-0.546 0.3-0.736c0.186-0.188 0.444-0.304 0.73-0.304s0.544 0.116 0.73 0.305l2.93 2.943c0.185 0.189 0.3 0.449 0.3 0.735s-0.114 0.546-0.3 0.736zM20.97 12c-0.001 2.126-0.739 4.079-1.974 5.618l1.864 2.859c0.079 0.142 0.126 0.312 0.126 0.493 0 0.359-0.184 0.675-0.462 0.859l-0.074 0.045c-0.132 0.082-0.292 0.131-0.464 0.131-0.347 0-0.648-0.199-0.793-0.49l-1.612-2.487c-1.522 1.226-3.478 1.968-5.608 1.968-2.109 0-4.048-0.727-5.58-1.945l-1.542 2.454c-0.185 0.295-0.508 0.488-0.876 0.488-0.185 0-0.359-0.049-0.509-0.134-0.293-0.162-0.492-0.474-0.492-0.833 0-0.182 0.051-0.352 0.14-0.496l1.848-2.896c-1.24-1.529-1.99-3.499-1.99-5.644 0-4.971 4.029-9 9-9s9 4.029 9 9c0 0.004 0 0.007 0 0.011zM11.97 5c-3.866 0-7 3.134-7 7s3.134 7 7 7c3.866 0 7-3.134 7-7s-3.134-7-7-7zM15.97 13h-4c-0.552 0-1-0.448-1-1v-4c0-0.552 0.448-1 1-1s1 0.448 1 1v3h3c0.552 0 1 0.448 1 1s-0.448 1-1 1zM2.73 5.708c-0.186 0.188-0.445 0.305-0.73 0.305s-0.544-0.116-0.73-0.305c-0.186-0.189-0.3-0.449-0.3-0.735s0.115-0.546 0.3-0.735l2.92-2.938c0.189-0.199 0.456-0.323 0.751-0.323 0.572 0 1.036 0.464 1.036 1.036 0 0.298-0.126 0.566-0.327 0.755z"/></svg>
          </div>
        
          <div className='mv5' style={{
            height: '42px'
          
          }}>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.0" x="0px" y="0px" viewBox="0 0 32 32" height="100%"><path d="M24,7.2h0.9h2V5.8h-2H7.1h-2v1.3h2H8c0.4,1.7,1.7,7,5.3,8.9c-3.6,1.8-4.9,7.1-5.3,8.8H7.1v0h-2v1.3h2.7h16.4h2.7v-1.3h-2v0  H24c-0.4-1.8-1.7-7-5.3-8.8C22.2,14.2,23.6,8.9,24,7.2z M22.6,24.8H9.4c0.5-2.2,2.2-8.2,6.6-8.2C20.4,16.7,22.1,22.7,22.6,24.8z   M16,15.3c-4.4,0-6.1-6-6.6-8.2h13.2C22.1,9.3,20.4,15.3,16,15.3z"/></svg>
        </div>

          <div className='mv5' style={{
            height: '42px'
            }}>

          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 48 48" height='100%' enable-background="new 0 0 48 48"><g><path fill="#000000" d="M29.8,32.1H18.2v-9.5c0-3.2-0.7-6.5-2.2-10.2c-0.6-1.4-0.7-2.9-0.6-4.3C15.9,4.2,19.1,1,23,0.6     c5.2-0.6,9.6,3.5,9.6,8.6c0,1.3-0.3,2.5-0.8,3.7c-1.3,2.9-2,6.1-2,9.8V32.1z M20.2,30.1h7.6v-7.5c0-3.9,0.7-7.5,2.2-10.6     c0.4-0.9,0.6-1.8,0.6-2.8c0-3.9-3.4-7.1-7.4-6.6c-3,0.3-5.5,2.8-5.8,5.8c-0.1,1.2,0,2.3,0.4,3.3c1.6,4,2.4,7.6,2.4,11V30.1z"/></g><g><path fill="#000000" d="M40.3,43.6H7.7V35c0-2.7,2.2-4.9,4.9-4.9h22.9c2.7,0,4.9,2.2,4.9,4.9V43.6z M9.7,41.6h28.6V35     c0-1.6-1.3-2.9-2.9-2.9H12.6c-1.6,0-2.9,1.3-2.9,2.9V41.6z"/></g></svg>
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
                  <ScreeningDetail src={"http://blogs.hellomagazine.com/passporttothestars/5546-jackie.jpg"}/>
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