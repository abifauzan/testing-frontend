import { IconPropType } from "@/utils/type";
import { FC } from "react";

const IconPlus: FC<IconPropType> = ({ width, height }) => {
  const widthIcon = width || "20";
  const heightIcon = height || "21";
  return (
    <svg
      width={widthIcon}
      height={heightIcon}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 5.75C12.4142 5.75 12.75 6.08579 12.75 6.5V11.75H18C18.4142 11.75 18.75 12.0858 18.75 12.5C18.75 12.9142 18.4142 13.25 18 13.25H12.75V18.5C12.75 18.9142 12.4142 19.25 12 19.25C11.5858 19.25 11.25 18.9142 11.25 18.5V13.25H6C5.58579 13.25 5.25 12.9142 5.25 12.5C5.25 12.0858 5.58579 11.75 6 11.75H11.25V6.5C11.25 6.08579 11.5858 5.75 12 5.75Z"
        fill="#FCFCFC"
      />
    </svg>
  );
};

export default IconPlus;