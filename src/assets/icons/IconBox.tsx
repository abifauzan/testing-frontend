import { IconPropType } from "@/utils/type";
import { FC } from "react";

const IconBox: FC<IconPropType> = ({ width, height }) => {
  const widthIcon = width || "20";
  const heightIcon = height || "21";
  return (
    <svg
      width={widthIcon}
      height={heightIcon}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.25 10.9875L2.6954 7.18541L3.3046 5.8147L12 9.67932L20.6954 5.8147L21.3046 7.18541L12.75 10.9875V21.5001H11.25V10.9875Z"
        fill="#FCFCFC"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M11.4517 1.923C11.8008 1.76786 12.1992 1.76786 12.5483 1.923L20.9483 5.65633C21.4358 5.873 21.75 6.35647 21.75 6.88997V17.1101C21.75 17.6436 21.4358 18.1271 20.9483 18.3438L12.5483 22.0771C12.1992 22.2322 11.8008 22.2322 11.4517 22.0771L3.05171 18.3438C2.56419 18.1271 2.25 17.6436 2.25 17.1101V6.88997C2.25 6.35647 2.56419 5.873 3.05171 5.65633L11.4517 1.923ZM3.75 6.98745V17.0126L12 20.6793L20.25 17.0126V6.98745L12 3.32079L3.75 6.98745Z"
        fill="#FCFCFC"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M6.81464 4.19534C6.98287 3.81683 7.42609 3.64636 7.8046 3.81458L16.4483 7.65622C16.9358 7.8729 17.25 8.35636 17.25 8.88987V12.4999C17.25 12.9142 16.9142 13.2499 16.5 13.2499C16.0858 13.2499 15.75 12.9142 15.75 12.4999V8.98735L7.19539 5.1853C6.81688 5.01707 6.64641 4.57385 6.81464 4.19534Z"
        fill="#FCFCFC"
      />
    </svg>
  );
};

export default IconBox;
