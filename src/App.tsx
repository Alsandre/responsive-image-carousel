import React from 'react';

import SliderContextProvider from './context/slider-context';

import Slider from './components/slider/Slider';
import OptionLayout from './layout/OptionLayout';

function App() {
  return (
    <SliderContextProvider>
      <OptionLayout />
      <Slider />
    </SliderContextProvider>
  );
}

export default App;
