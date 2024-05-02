"use client";
import React from "react";
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
  const handleMenuToggle = () => {
    settoggle(!toggle);
  };
  const hovermenuhandler = () => {};
  return (
    <div className="flex flex-col items-center w-full bg-bgside ">
      <TooltipProvider>
        <div onMouseMove={hovermenuhandler}>
          <Tooltip>
            <TooltipTrigger>
              <Navtogglemenu
                handleMenuToggle={handleMenuToggle}
                additionalstyles="mt-3  z-10  h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground"
              />{" "}
            </TooltipTrigger>{" "}
            <TooltipContent className=" absolute left-10 -top-10 !border-divider bg-background">
              <p>Menu</p>
            </TooltipContent>
          </Tooltip>
        </div>
        <Tooltip>
          <TooltipTrigger>
            <Icon
              iconName="search"
              initialstyle="mt-7 gap-0 h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            />{" "}
          </TooltipTrigger>{" "}
          <TooltipContent className=" absolute left-10 top-9 !border-divider bg-background">
            <p>Search</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Icon
              iconName="home"
              initialstyle="mt-8 gap-0 h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            />{" "}
          </TooltipTrigger>{" "}
          <TooltipContent className=" absolute left-10 top-10 !border-divider bg-background">
            <p>Home</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Icon
              iconName="list"
              initialstyle="mt-1 gap-0  h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            />
          </TooltipTrigger>{" "}
          <TooltipContent className=" absolute left-10 top-[11px] !border-divider bg-background">
            <p>List</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Icon
              iconName="star"
              initialstyle="mt-1 gap-0 h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            />{" "}
          </TooltipTrigger>
          <TooltipContent className=" absolute left-10 top-[11px] !border-divider bg-background">
            <p>Important</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Icon
              iconName="note"
              initialstyle="mt-1 gap-0 h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            />{" "}
          </TooltipTrigger>{" "}
          <TooltipContent className=" absolute left-10 top-[11px] !border-divider bg-background">
            <p>Note</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Icon
              iconName="plus"
              initialstyle="mt-40 mb-2 gap-0 h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            />{" "}
          </TooltipTrigger>{" "}
          <TooltipContent className=" absolute left-10 -bottom-[201px] !border-divider bg-background">
            <p>Add</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <NavModeToggle initialstyles="mt-28 " />
          </TooltipTrigger>
          <TooltipContent className="absolute left-10 top-[120px] !border-divider bg-background ">
            <p>Mode</p>
          </TooltipContent>
        </Tooltip>
        <Tooltip>
          <TooltipTrigger>
            <Icon
              iconName="arrow-right-from-bracket"
              initialstyle="mt-2  gap-0 h-10 px-4 py-2 inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
            />{" "}
          </TooltipTrigger>
          <TooltipContent className=" absolute left-10 -bottom-[50px] !border-divider bg-background w-20">
            <p>Sign out</p>
          </TooltipContent>
        </Tooltip>
      </TooltipProvider>
    </div>
  );
};

export default Navmobile;
