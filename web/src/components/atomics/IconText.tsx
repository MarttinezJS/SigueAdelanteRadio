import { Spacer } from "@nextui-org/react";
import type { IconType } from "react-icons";

interface IconTextProps {
  icon: JSX.Element;
  text: string;
}

export const IconText = ({ icon, text }: IconTextProps) => {
  return (
    <div className="flex items-center lg:text-xl xl:text-2xl">
      {icon}
      <Spacer />
      {text}
    </div>
  );
};
