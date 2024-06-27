type TCarouselStyles = {
  [key: string]: string
}

export interface ICarousel {
    variant?: string;
    style: TCarouselStyles;
    children: React.ReactNode;
    showControls?: boolean;
    centerControls?: boolean;
  }
 