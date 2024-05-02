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
      className={`m-auto ${additionalstyles}`}
    >
      <Icon iconName="bars" />
    </Button>
  );
};

export default MenuToggleBtn;
