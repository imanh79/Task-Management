"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import Icon from "../ui/icon";
import { useTheme } from "@/app/provider";
import TitleMenu from "./title";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const MenuToggleBtn = ({ handleMenuToggle, additionalstyles }: any) => {
  return (
    <Button
      size="sm"
      variant="ghost"
      onClick={handleMenuToggle}
      className={`m-auto !px-0 !pb-4 h-[44px]  ${additionalstyles}`}
    >
      <Icon iconName="bars" initialstyle=" iconhoverbtn " />
    </Button>
  );
};

export default MenuToggleBtn;
