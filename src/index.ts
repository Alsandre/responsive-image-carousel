import { ReactNode } from "react";

export { Carousel } from "./components/Carousel";
export { AutoCarousel } from "./components/autoCarousel/";
export { ManualCarousel } from "./components/manualCarousel/";

export type TCarouselStyles = {
  [key: string]: string;
};
export type ImageSrc = { imageURL: string };

export interface ICarousel {
  style?: TCarouselStyles;
  children?: ReactNode;
  imageList?: ImageSrc[];
  className?: string;
  slideAnimation?: string;
  sliderSpeed?: number;
  imageClass?: string;
  slidesPerScreen?: number;
}
