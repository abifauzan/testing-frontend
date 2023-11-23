import IconBox from "@/assets/icons/IconBox";
import { HeaderWrapper } from "./style";
import IconArrowLeft from "@/assets/icons/IconArrowLeft";
import Link from "next/link";
import { FC, PropsWithChildren } from "react";
import Container from "../container";

const Header = () => {
  return (
    <HeaderWrapper className="w-full h-[150px] bg-[#a060fa]">
      <Container isBody={false}>
        <div className="w-full flex justify-between items-start relative pt-10">
          <div className="flex items-center gap-[3px] ">
            <IconArrowLeft width="30" height="30" />
            <span className="text-lg font-semibold tracking-[0.5%]">Back</span>
          </div>
          <Link
            href="/"
            className="absolute left-1/2 flex items-center gap-[10px]"
          >
            <IconBox width="30" height="30" />
            <span className="font-medium text-[24px]">Product List</span>
          </Link>
          <div />
        </div>
      </Container>
    </HeaderWrapper>
  );
};

export default Header;
