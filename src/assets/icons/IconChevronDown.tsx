import { IconPropType } from "@/utils/type";
import { FC } from "react";

const IconChevronDown: FC<IconPropType> = ({ width, height }) => {
  const widthIcon = width || "20";
  const heightIcon = height || "21";
  return (
    <svg
      width={widthIcon}
      height={heightIcon}
      viewBox="0 0 20 21"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M4.55806 7.55806C4.80214 7.31398 5.19786 7.31398 5.44194 7.55806L10 12.1161L14.5581 7.55806C14.8021 7.31398 15.1979 7.31398 15.4419 7.55806C15.686 7.80214 15.686 8.19786 15.4419 8.44194L10.4419 13.4419C10.1979 13.686 9.80214 13.686 9.55806 13.4419L4.55806 8.44194C4.31398 8.19786 4.31398 7.80214 4.55806 7.55806Z"
        fill="#AA5AFA"
      />
    </svg>
  );
};

export default IconChevronDown;
