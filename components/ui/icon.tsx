//* types

import { IconProps } from "@/types/types";

const Icon = ({ iconName, style, color, initialstyle, onClick }: IconProps) => {
  return (
    <i
      className={` iconstyle
                    ${style ? style : "far"}
                    fa-${iconName}
                    ${color ? color : ""}
                    text-xl ${initialstyle} 
            `}
      onClick={onClick}
    ></i>
  );
};

export default Icon;
