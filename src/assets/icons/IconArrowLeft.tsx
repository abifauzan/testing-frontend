import { IconPropType } from "@/utils/type";
import { FC } from "react";

const IconArrowLeft: FC<IconPropType> = ({ width, height }) => {
  const widthIcon = width || "20";
  const heightIcon = height || "21";
  return (
    <svg
      width={widthIcon}
      height={heightIcon}
      viewBox={`0 0 20 21`}
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M10.4419 5.05806C10.686 5.30214 10.686 5.69786 10.4419 5.94194L6.50888 9.875H15.4167C15.7618 9.875 16.0417 10.1548 16.0417 10.5C16.0417 10.8452 15.7618 11.125 15.4167 11.125H6.50888L10.4419 15.0581C10.686 15.3021 10.686 15.6979 10.4419 15.9419C10.1979 16.186 9.80214 16.186 9.55806 15.9419L4.55806 10.9419C4.31398 10.6979 4.31398 10.3021 4.55806 10.0581L9.55806 5.05806C9.80214 4.81398 10.1979 4.81398 10.4419 5.05806Z"
        fill="#FCFCFC"
      />
    </svg>
  );
};

export default IconArrowLeft;
