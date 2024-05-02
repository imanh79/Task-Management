//* types

import { IconProps } from "@/types/types";

const Icon = ({ iconName, style, color, initialstyle }: IconProps) => {
  return (
    <i
      className={` iconstyle
                    ${style ? style : "far"}
                    fa-${iconName}
                    ${color ? color : ""}
                    text-xl ${initialstyle} 
            `}
    ></i>
  );
};

export default Icon;
