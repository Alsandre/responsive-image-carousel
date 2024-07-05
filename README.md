# Responsive Image Carousel

A responsive image carousel components for React applications. Here are two components responsible for manual and automatic switch between provided list of images. Carousel layout is built using flex and use minimal styling, everything can be overwritten by leveraging `classname` prop from the component, furthermore each child can be styled by passing class name for the corresponding child to the component as a prop there are `leftChildClass`, `midChildClass` and `rightChildClass`. Styling all children same way is even easier there is `allChildClass` that will be applied to each child. 

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