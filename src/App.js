import React from 'react';
// import logo from './logo.svg';
import './App.css';

import Wrapper from './components/Wrapper';
import Photo from './components/Photo';
import Title from './components/Title';


function App() {
   return (
         <Wrapper>
               <h1>Med amin</h1>
               <Photo src="/profile.png" />

              <Title style={{color:'red'}}>My Name here</Title>

              <Title small>My job here</Title> 

         </Wrapper>
   );
 }

 export default App;


























