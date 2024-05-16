"use client";
import { useState } from "react";
import { Button } from "../ui/button";
import Icon from "../ui/icon";
import { useTheme } from "@/app/provider";
import TitleMenu from "./title";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

const Navtogglemenu = ({
  handleMenuToggle,
  additionalstyles,
  onMouseMove,
  value,
}: any) => {
  console.log(value);
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
