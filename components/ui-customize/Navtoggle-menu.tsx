"use client";

import Icon from "../ui/icon";

const Navtogglemenu = ({
  handleMenuToggle,
  additionalstyles,
  onMouseMove,
  value,
}: any) => {
  return (
    <div
      onClick={handleMenuToggle}
      onMouseMove={onMouseMove}
      className={`m-auto iconhoverbtn  ${additionalstyles}`}
    >
      <Icon
        iconName="bars"
        initialstyle={` ${value ? "hover:text-accent-foreground" : ""}`}
      />
    </div>
  );
};

export default Navtogglemenu;
