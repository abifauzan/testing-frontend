import { FC, PropsWithChildren } from "react";

type PropType = {
  isBody?: boolean;
};

const Container: FC<PropsWithChildren<PropType>> = ({
  children,
  isBody = true,
}) => {
  const bodyClass = isBody ? "px-14" : "";
  return (
    <section className={`container mx-auto ${bodyClass}`}>{children}</section>
  );
};

export default Container;
