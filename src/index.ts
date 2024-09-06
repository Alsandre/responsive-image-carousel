import { ReactNode } from "react";

export { Carousel } from "./components/Carousel";

export type TCarouselStyles = {
  [key: string]: string;
};
export type ImageSrc = { imageURL: string };

export interface ICarousel {
  controls?: boolean;
  style?: TCarouselStyles;
  children?: ReactNode;
  imageList?: ImageSrc[];
  className?: string;
  slideAnimation?: string;
  sliderSpeed?: number;
  imageClass?: string;
  slidesPerScreen?: number;
  buttonIcon?: ReactNode;
  btnClassName?: string
}
