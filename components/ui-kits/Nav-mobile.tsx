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

const Navmobile = () => {
  const { toggle, settoggle } = useTheme();
  const [value, setvalue] = useState(false);
  const onMouseMove = () => {
    setvalue(true);
  };
  const handleMenuToggle = () => {
    settoggle(!toggle);
  };

  const hovermenuhandler = (handleMenuToggle: any) => {};
  return (
    <div
      className="flex flex-col items-center w-full bg-bgside h-full  fixed inset-0 "
      style={{ maxWidth: "100%", overflow: "hidden" }}
    >
      <TooltipProvider>
        <div onMouseMove={hovermenuhandler}>
          <Tooltip>
            <TooltipTrigger>
              <Icon
                iconName="bars"
                initialstyle="mt-2 w-[50px] h-[44px] gap-0 iconhoverbtn"
                onClick={handleMenuToggle}
              />{" "}
            </TooltipTrigger>{" "}
            <TooltipContent className=" absolute left-10 -top-10 !border-divider bg-background">
              <p>Menu</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <Tooltip>
          <TooltipTrigger>
            <Icon iconName="search" initialstyle="mt-7 gap-0 iconhoverbtn" />{" "}
          </TooltipTrigger>{" "}
          <TooltipContent className=" absolute left-10 top-9 !border-divider bg-background">
            <p>Search</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Icon iconName="home" initialstyle="mt-8 gap-0 iconhoverbtn" />{" "}
          </TooltipTrigger>{" "}
          <TooltipContent className=" absolute left-10 top-10 !border-divider bg-background">
            <p>Home</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Icon iconName="list" initialstyle="mt-1 gap-0  iconhoverbtn" />
          </TooltipTrigger>{" "}
          <TooltipContent className=" absolute left-10 top-[13px] !border-divider bg-background">
            <p>List</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Icon iconName="star" initialstyle="mt-1 gap-0 iconhoverbtn" />{" "}
          </TooltipTrigger>
          <TooltipContent className=" absolute left-10 top-[13px] !border-divider bg-background">
            <p>Important</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Icon iconName="note" initialstyle="mt-1 gap-0 iconhoverbtn" />{" "}
          </TooltipTrigger>{" "}
          <TooltipContent className=" absolute left-10 top-[13px] !border-divider bg-background">
            <p>Note</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Icon iconName="plus" initialstyle="mt-16  gap-0 iconhoverbtn" />{" "}
          </TooltipTrigger>{" "}
          <TooltipContent className=" absolute left-10 -bottom-[188px] !border-divider bg-background">
            <p>Add</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <NavModeToggle initialstyles="mt-32 " />
          </TooltipTrigger>
          <TooltipContent className="absolute left-10 top-[120px] !border-divider bg-background ">
            <p>Mode</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Icon
              iconName="arrow-right-from-bracket"
              initialstyle="mt-2  gap-0 iconhoverbtn"
            />{" "}
          </TooltipTrigger>
          <TooltipContent className="absolute left-10 -bottom-[50px] !border-divider bg-background w-20">
            <p>Sign out</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default Navmobile;
