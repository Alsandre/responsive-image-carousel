import React from 'react';

import SliderContextProvider from './context/slider-context';
import Slider from './components/slider/Slider';
import OptionLayout from './layout/OptionLayout';

import Animate from './layout/Animate';
import Carousel from './components/Carousel';


function App() {
  return (
    // <SliderContextProvider>
    //   <OptionLayout />
    //   <Animate><Slider /></Animate>
    // </SliderContextProvider>
    <Carousel style={{}}>
      <div style={{width: '100%', height: '100%', backgroundColor: 'lightgreen'}}></div>
      <div style={{width: '100%', height: '100%', backgroundColor: 'darkgreen'}}></div>
      <div style={{width: '100%', height: '100%', backgroundColor: 'lightblue'}}></div>
      <div style={{width: '100%', height: '100%', backgroundColor: 'lightyellow'}}></div>
      <div style={{width: '100%', height: '100%', backgroundColor: 'lightskyblue'}}></div>
      <div style={{width: '100%', height: '100%', backgroundColor: 'lightseagreen'}}></div>
      <div style={{width: '100%', height: '100%', backgroundColor: 'lightsalmon'}}></div>
    </Carousel>
  );
}

export default App;
