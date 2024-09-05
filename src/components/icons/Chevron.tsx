interface IChevronProps {
  className?: string;
  onClick?: () => void;
  variant?: string;
}

export enum ECHevronDirections {
  LEFT = "left",
  RIGHT = "right",
}

export const Chevron = ({
  className,
  onClick,
  variant = ECHevronDirections.LEFT,
}: IChevronProps): JSX.Element => {
  return (
    <>
      {variant === ECHevronDirections.RIGHT && (
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          onClick={onClick}
        >
          <path
            d="M0.728516 2.544L10.1845 12L0.728516 21.456L3.27252 24L15.2725 12L3.27252 0L0.728516 2.544Z"
            fill="currentColor"
          />
        </svg>
      )}
      {variant === ECHevronDirections.LEFT && (
        <svg
          width="16"
          height="24"
          viewBox="0 0 16 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={className}
          onClick={onClick}
        >
          <path
            d="M15.2715 2.544L5.81548 12L15.2715 21.456L12.7275 24L0.727484 12L12.7275 0L15.2715 2.544Z"
            fill="currentColor"
          />
        </svg>
      )}
    </>
  );
};
