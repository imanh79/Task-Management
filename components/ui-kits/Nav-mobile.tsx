"use client";
import React, { useState } from "react";
import { ModeToggle } from "../ui/darktheme";
import Icon from "../ui/icon";
import MenuToggleBtn from "../ui-customize/toggle-menu";
import { useTheme } from "@/app/provider";
import MenuItem from "./menu-item";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "../ui/tooltip";
import Navtogglemenu from "../ui-customize/Navtoggle-menu";
import { NavModeToggle } from "../ui-customize/Navdarkmode";
import Link from "next/link";

const Navmobile = () => {
  const { toggle, settoggle, togglem, settogglem } = useTheme();
  const [value, setvalue] = useState(false);
  const onMouseMove = () => {
    setvalue(true);
  };
  const handleMenuToggle = () => {
    settogglem(!togglem);
    settoggle(!toggle);
  };

  const hovermenuhandler = (handleMenuToggle: any) => {};
  return (
    <div className="flex flex-col items-center w-full bg-bgside  ">
      <TooltipProvider>
        <div onMouseMove={hovermenuhandler}>
          <Tooltip>
            <TooltipTrigger>
              <Icon
                iconName="bars"
                initialstyle="mt-2  gap-0 iconhoverbtn"
                onClick={handleMenuToggle}
              />{" "}
            </TooltipTrigger>{" "}
            <TooltipContent className=" absolute left-10 -top-11 !border-divider bg-background">
              <p>Menu</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <Tooltip>
          <TooltipTrigger>
            <Icon iconName="search" initialstyle="mt-5 gap-0 iconhoverbtn" />{" "}
          </TooltipTrigger>{" "}
          <TooltipContent className=" absolute left-10 top-8 !border-divider bg-background">
            <p>Search</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Link href="./">
              {" "}
              <Icon iconName="home" initialstyle="mt-8 gap-0 iconhoverbtn" />
            </Link>{" "}
          </TooltipTrigger>{" "}
          <TooltipContent className=" absolute left-10 top-[44px] !border-divider bg-background">
            <p>Home</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Link href="./">
              <Icon iconName="list" initialstyle="mt-1 gap-0  iconhoverbtn" />{" "}
            </Link>{" "}
          </TooltipTrigger>{" "}
          <TooltipContent className=" absolute left-10 top-[15px] !border-divider bg-background">
            <p>List</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Link href="./important">
              <Icon iconName="star" initialstyle="mt-1 gap-0 iconhoverbtn" />{" "}
            </Link>{" "}
          </TooltipTrigger>
          <TooltipContent className=" absolute left-10 top-[15px] !border-divider bg-background">
            <p>Important</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Link href="./stickynote">
              <Icon iconName="note" initialstyle="mt-1 gap-0 iconhoverbtn" />{" "}
            </Link>{" "}
          </TooltipTrigger>{" "}
          <TooltipContent className=" absolute left-10 top-[15px] !border-divider bg-background">
            <p>Note</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Icon iconName="plus" initialstyle="mt-28  gap-0 iconhoverbtn" />{" "}
          </TooltipTrigger>{" "}
          <TooltipContent className=" absolute left-10 -bottom-[157px] !border-divider bg-background">
            <p>Add</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <NavModeToggle initialstyles="mt-[120px] " />
          </TooltipTrigger>
          <TooltipContent className="absolute left-10 top-[127px] !border-divider bg-background  ">
            <p>Mode</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger className="mb-6">
            <Icon
              iconName="arrow-right-from-bracket"
              initialstyle="mt-2 pb-4 gap-0 iconhoverbtn"
            />{" "}
          </TooltipTrigger>
          <TooltipContent className=" absolute left-10 -bottom-[53px] !border-divider bg-background w-20">
            <p>Sign out</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default Navmobile;
