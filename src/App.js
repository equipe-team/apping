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
              
      
        
          <div className='mv4' style={{
            height: '42px'
          }}>
         
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 40 40" height='100%' enable-background="new 0 0 32 32"><g><path fill="#808080" d="M30,32H2.02C0.91,32,0,31.1,0,30V10c0-0.97,0.7-2,2-2h1c0.55,0,1,0.45,1,1s-0.45,1-1,1H2v20h28V10h-1c-0.55,0-1-0.45-1-1   s0.45-1,1-1h1c1.3,0,2,1.03,2,2v20C32,31.1,31.1,32,30,32z"/><path fill="#808080" d="M26,17c-0.55,0-1-0.45-1-1V2H7v14c0,0.55-0.45,1-1,1s-1-0.45-1-1V2c0-1.1,0.9-2,2-2h18c1.1,0,2,0.9,2,2v14   C27,16.55,26.55,17,26,17z"/><path fill="#808080" d="M16,9h-5c-0.55,0-1-0.45-1-1s0.45-1,1-1h5c0.55,0,1,0.45,1,1S16.55,9,16,9z"/><path fill="#808080" d="M21,13H11c-0.55,0-1-0.45-1-1s0.45-1,1-1h10c0.55,0,1,0.45,1,1S21.55,13,21,13z"/><path fill="#808080" d="M20,23h-7c-1.1,0-2-0.9-2-2v-1H4c-0.55,0-1-0.45-1-1s0.45-1,1-1h8c0.55,0,1,0.45,1,1v2h7v-2c0-0.55,0.45-1,1-1h7   c0.55,0,1,0.45,1,1s-0.45,1-1,1h-6v1C22,22.1,21.1,23,20,23z"/></g></svg>
          </div>
        
          <div className='mv4' style={{
            height: '42px'
      	  
          }}>
         
         <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 80 80" height='100%'><g transform="translate(0,-972.36218)"><path style={{textIndent:0, textTransform:'none',direction:'ltr',blockProgression:'tb',baselineShift:'baseline',color:'#808080',enableBackground:'accumulate'}} d="m 28.0625,993.36213 c -0.2559,0 -0.4923,0.086 -0.6875,0.2812 l -7.0938,7.09377 c -0.3905,0.3905 -0.3904,1.0156 0,1.4062 0.3906,0.3905 1.0471,0.3906 1.4376,0 l 7.0624,-7.06247 c 0.3906,-0.3905 0.3905,-1.0469 0,-1.4375 -0.1952,-0.1952 -0.4628,-0.2812 -0.7187,-0.2812 z m 23.875,0 c -0.2559,0 -0.5235,0.086 -0.7187,0.2812 -0.3905,0.3906 -0.3906,1.047 0,1.4375 l 7.0624,7.06247 c 0.3905,0.3906 1.047,0.3905 1.4376,0 0.3904,-0.3906 0.3905,-1.0157 0,-1.4062 l -7.0938,-7.09377 c -0.1952,-0.1953 -0.4316,-0.2812 -0.6875,-0.2812 z m -11.9375,4 c -9.377,0 -17,7.62297 -17,16.99997 0,9.377 7.623,17.0001 17,17.0001 9.3769,0 17,-7.6231 17,-17.0001 0,-9.377 -7.6231,-16.99997 -17,-16.99997 z m 0,2 c 8.2961,0 15,6.70377 15,14.99997 0,8.2962 -6.7039,15.0001 -15,15.0001 -8.2962,0 -15,-6.7039 -15,-15.0001 0,-8.2962 6.7038,-14.99997 15,-14.99997 z m 0,3.99997 c -0.5523,0 -1,0.4477 -1,1 l 0,10 c 0,0.2761 0.1004,0.5378 0.2812,0.7187 l 6.375,6.3439 c 0.3906,0.3905 1.0157,0.3905 1.4063,0 0.3905,-0.3905 0.3905,-1.0159 0,-1.4064 L 41,1013.9246 l 0,-9.5625 c 0,-0.5523 -0.4477,-1 -1,-1 z" fill="#808080" fill-opacity="1" stroke="none" marker="none" visibility="visible" display="inline" overflow="visible"/></g></svg>
          </div>
        
          <div className='mv4' style={{
            height: '42px'
          
          }}>
          <svg xmlns="http://www.w3.org/2000/svg" version="1.0" x="0px" y="0px" viewBox="0 0 32 32" height="100%"><path fill="#808080" d="M24,7.2h0.9h2V5.8h-2H7.1h-2v1.3h2H8c0.4,1.7,1.7,7,5.3,8.9c-3.6,1.8-4.9,7.1-5.3,8.8H7.1v0h-2v1.3h2.7h16.4h2.7v-1.3h-2v0  H24c-0.4-1.8-1.7-7-5.3-8.8C22.2,14.2,23.6,8.9,24,7.2z M22.6,24.8H9.4c0.5-2.2,2.2-8.2,6.6-8.2C20.4,16.7,22.1,22.7,22.6,24.8z   M16,15.3c-4.4,0-6.1-6-6.6-8.2h13.2C22.1,9.3,20.4,15.3,16,15.3z"/></svg>
        </div>

          <div className='mv4' style={{
            height: '42px'
            }}>

          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 48 48" height='100%' enable-background="new 0 0 48 48"><g><path fill="#808080" d="M29.8,32.1H18.2v-9.5c0-3.2-0.7-6.5-2.2-10.2c-0.6-1.4-0.7-2.9-0.6-4.3C15.9,4.2,19.1,1,23,0.6     c5.2-0.6,9.6,3.5,9.6,8.6c0,1.3-0.3,2.5-0.8,3.7c-1.3,2.9-2,6.1-2,9.8V32.1z M20.2,30.1h7.6v-7.5c0-3.9,0.7-7.5,2.2-10.6     c0.4-0.9,0.6-1.8,0.6-2.8c0-3.9-3.4-7.1-7.4-6.6c-3,0.3-5.5,2.8-5.8,5.8c-0.1,1.2,0,2.3,0.4,3.3c1.6,4,2.4,7.6,2.4,11V30.1z"/></g><g><path fill="#808080" d="M40.3,43.6H7.7V35c0-2.7,2.2-4.9,4.9-4.9h22.9c2.7,0,4.9,2.2,4.9,4.9V43.6z M9.7,41.6h28.6V35     c0-1.6-1.3-2.9-2.9-2.9H12.6c-1.6,0-2.9,1.3-2.9,2.9V41.6z"/></g></svg>
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

              <div className='flex mh4'>
                <div style={{
            height: '42px'
          
          }}>
            
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 24 24" height='100%' style={{
              background: '#213043'}}
              ><path fill="#808080" d="M20.852,20.062l-4.608-4.608c1.141-1.323,1.834-3.043,1.834-4.923c0-4.162-3.386-7.547-7.547-7.547  c-4.161,0-7.547,3.386-7.547,7.547s3.386,7.547,7.547,7.547c1.88,0,3.6-0.693,4.923-1.834l4.608,4.608  c0.109,0.109,0.252,0.164,0.395,0.164c0.143,0,0.286-0.055,0.395-0.164C21.071,20.634,21.071,20.28,20.852,20.062z M10.531,16.96  c-3.545,0-6.429-2.884-6.429-6.429s2.884-6.429,6.429-6.429c3.545,0,6.429,2.884,6.429,6.429S14.076,16.96,10.531,16.96z"/></svg>
                </div>

                <div className='flex mh4'>
                <div style={{
            height: '42px'
          
          }}>
            
            <svg xmlns="http://www.w3.org/2000/svg" version="1.1" x="0px" y="0px" viewBox="0 0 24 24" height='100%' style={{
              background:'#213043'}}
              ><path fill="#808080"d="M22.158,17.982h-2.33V9.768c0-0.016-0.001-0.032-0.002-0.047C19.768,5.459,16.267,1.999,12,1.999  c-4.267,0-7.768,3.46-7.826,7.721C4.173,9.736,4.172,9.752,4.172,9.768v8.215h-2.33c-0.322,0-0.583,0.261-0.583,0.583  c0,0.322,0.261,0.583,0.583,0.583h6.756C8.885,20.767,10.3,22.001,12,22.001c1.7,0,3.115-1.234,3.402-2.853h6.756  c0.322,0,0.583-0.261,0.583-0.583C22.74,18.243,22.48,17.982,22.158,17.982z M12,20.836c-1.055,0-1.943-0.717-2.21-1.688h4.42  C13.944,20.119,13.055,20.836,12,20.836z M18.663,17.923H5.337V9.809c0.001-0.012,0.001-0.024,0.001-0.036  C5.368,6.129,8.356,3.164,12,3.164c3.644,0,6.632,2.965,6.661,6.608c0,0.012,0.001,0.024,0.001,0.036V17.923z"/></svg>

                  </div>
                </div>
              </div>
           </div>
           <div className='h-100 pa3' style={{
             background: '#333D4B'
           }}>
              <div className='flex'>
                <CardBase>
                  <ScreeningDetail src={"http://blogs.hellomagazine.com/passporttothestars/5546-jackie.jpg"} name={"Bruce Lee"}/>
                  <ScreeningDetail src={"http://kingofwallpapers.com/profile-pics/profile-pics-007.jpg"} name={"Sarah Hood"}/>
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