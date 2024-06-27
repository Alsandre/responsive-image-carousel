import React, { Dispatch, ReactNode, SetStateAction, useState } from "react";

export const IMAGE_LIST: { imageURL: string; description: string }[] = [
  {
    imageURL:
      "https://images.unsplash.com/photo-1579762715118-a6f1d4b934f1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8aWxsdXN0cmF0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    description: "Three birds one branch",
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1575995872537-3793d29d972c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aWxsdXN0cmF0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    description: "Japanish Flowers",
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1579762715459-5a068c289fda?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8aWxsdXN0cmF0aW9ufGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60",
    description: "Birds",
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1633081121063-fc64ad4a793f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fGlsbHVzdHJhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    description: "The Bird",
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1612760721786-a42eb89aba02?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzZ8fGlsbHVzdHJhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    description: "Sexy Cat",
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1584448097639-99cf648e8def?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NDh8fGlsbHVzdHJhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    description: "Woman on the bench",
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1579273166629-ef19c29b11fb?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTF8fGlsbHVzdHJhdGlvbnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
    description: "A pair of Birds",
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1580192985016-7e15ef081dd8?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTM2fHxpbGx1c3RyYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    description: "The One whos name should not be Told",
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1578763460789-324a7fcc0ee2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTY2fHxpbGx1c3RyYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    description: "Sterling Pair",
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1578305849070-79fcf6d788c1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjM2fHxpbGx1c3RyYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    description: "Try to keep your Nose away!",
  },
  {
    imageURL:
      "https://images.unsplash.com/photo-1579273166051-40ca02008446?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjMyfHxpbGx1c3RyYXRpb258ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60",
    description: "Pretty Betty",
  },
];

type ContextType = {
  sliderVariant: string;
  controlsVariant: {left: string; right: string};
  control: string;
  imageCollection: { imageURL: string; description: string }[];
};

interface SliderContextInterface {
  sliderState: ContextType;
  setSliderState: Dispatch<SetStateAction<ContextType>>;
}

const defaultContext = {
  sliderState: {
    sliderVariant: "default",
    controlsVariant: {left: 'button-left-position2', right: 'button-right-position2'},
    control: "button",
    imageCollection: IMAGE_LIST,
  },
  setSliderState: (context: ContextType) => {},
} as SliderContextInterface;

export const SliderContext = React.createContext(defaultContext);

type ProviderType = {
  children: ReactNode;
};

export default function SliderContextProvider({ children }: ProviderType) {
  const [sliderState, setSliderState] = useState<ContextType>({
    sliderVariant: "",
    controlsVariant: {left: 'button-left-position2', right: 'button-right-position2'},
    control: "",
    imageCollection: IMAGE_LIST,
  });

  return (
    <SliderContext.Provider value={{ sliderState, setSliderState }}>
      {children}
    </SliderContext.Provider>
  );
}

