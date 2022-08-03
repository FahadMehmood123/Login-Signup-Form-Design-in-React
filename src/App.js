import React from 'react';
import './App.css';
import './Slideshow'
import Slideshow from './Slideshow';
import Grandchild from './Grandchild';



function App() {

  return (
    <>
      <div id='parent'>
        <div id='child1'>
          <Slideshow />
        </div>
        <div id='child2'>
          <Grandchild />
        </div>
      </div>
    </>
  )

}

export default App;
