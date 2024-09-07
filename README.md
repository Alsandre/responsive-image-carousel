# Responsive Image Carousel

A responsive image carousel for React applications. The component use props to be managed dynamically. Every single prop is optional, but at least one of two, children or images list, should be provided for the component to be rendered. Carousel is headless meaning it does not have any styling, just basics. To make it appealing there are some props that target different parts of the component. For example `className` prop is used to attach class to the wrapper div, alternatively `style` prop can be used to pass styles object that will also be applied to wrapper div. Aside from wrapper if slides are passed as list of images `imageClass` can be used to attach class to the underling image tag, the other case if `children` are passed to carousel they can be pre-styled and the component will handle rendering them in carousel. For animation purposes `slideAnimation` prop can be used which would apply animation to slides. For controlling slider speed `sliderSpeed` prop is used. The carousel has _auto_, _manual_ and _mixed_ modes, by default `auto` mode is enabled. In case of _mixed_ mode carousel stops whiled hovered and if optional `controls` are enabled can be navigated using chevron buttons, alternatively icon for navigation can be provided via `buttonIcon` prop and button styling can be adjusted via `btnClassName` prop. By default component renders 3 slides per screen this behavior can be controlled through `slidesPerScreen` prop, which accepts numbers from 1 to any. As mentioned above slides can be provided as list of images or as children of compoenent, for passing in as a list `imageList` prop is used, otherwise wrap the component around list of elements and they will be regarded as children, more commonly list of elements will be passed as dynamic array or directly mapped inside JSX.

## Installation

To install the package, run:

```bash
yarn add @alsandre/responsive-image-carousel
```

## Usage

```js
import React from "react";
import { Carousel } from "@alsandre/responsive-image-carousel";

const IMAGE_LIST = [
  { imageURL: "https://picsum.photos/800/400?random=1" },
  { imageURL: "https://picsum.photos/800/400?random=2" },
  { imageURL: "https://picsum.photos/800/400?random=3" },
  { imageURL: "https://picsum.photos/800/400?random=4" },
  { imageURL: "https://picsum.photos/800/400?random=5" },
  { imageURL: "https://picsum.photos/800/400?random=6" },
  { imageURL: "https://picsum.photos/800/400?random=7" },
];

function App() {
  return (
    <Carousel>
      {IMAGE_LIST.map((item, index) => (
        <img
          key={index}
          style={{ width: "100%", height: "100%" }}
          src={item.imageURL}
          alt=""
        />
      ))}
    </Carousel>
  );
}

export default App;
```

## Running the Demo

1. To run the demo locally, navigate to `demo` directory:

```bash
cd ./demo
```

2. Install dependencies:

```bash
yarn install
```

3. Start the demo:

```bash
yarn start
```

This will run the app in development mode. Open http://localhost:3000 to view it in the browser.