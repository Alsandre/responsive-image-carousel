import React from 'react';

import SliderContextProvider from './context/slider-context';
import Slider from './components/slider/Slider';
import OptionLayout from './layout/OptionLayout';

import Animate from './layout/Animate';


function App() {
  return (
    <SliderContextProvider>
      <OptionLayout />
      <Animate><Slider /></Animate>
    </SliderContextProvider>
  );
}

export default App;
