
"use client"
import React, { useEffect, useState } from "react";
import { useTheme } from "@/app/provider";

import InputMain from "../ui-kits/input-main";
import Icon from "../ui/icon";

import Smtitle from "../ui-customize/smtitle";
import Navmobile from "../ui-kits/Nav-mobile";
import Title from "../ui-customize/title";
import Rightside from "../sidebars/rightside";
import Listmain from "../ui-kits/list-main";
import { ScrollArea } from "../ui/scroll-area";
import {
  ContextMenu,
  ContextMenuContent,
  ContextMenuItem,
  ContextMenuTrigger,
} from "@/components/ui/context-menu";

const Mainsticky = () => {
  const { todos, setTodos } = useTheme();
  const [openContextMenuId, setOpenContextMenuId] = useState(null);
  const { toggle, settoggle } = useTheme();
  const { closecalendar, setclosecalendar } = useTheme();
  const { toggleright, settoggleright } = useTheme();
  const { tasktodo, settasktodo } = useTheme();
  const deletehandler = (id: any) => {
    const updatedTodos = todos.filter((item) => item.id !== id);
    setTodos(updatedTodos);

    console.log(tasktodo);
  };
  const handleClick = () => {
    setclosecalendar(false);
  };
  const importantfilter = todos.filter((item) => item.important === true);
  return (
    <div className="grid grid-rows-[1fr,40%,40%,1fr] grid-cols-[auto,auto,1fr,auto] h-full  ">
      <div className="col-span-1 row-span-4 bg-bgside" onClick={handleClick}>
        {toggle ? <Navmobile /> : ""}
      </div>
      <div
        className="col-span-2 px-5 w-full flex justify-start items-start flex-col"
        onClick={handleClick}
      >
        <div className="flex justify-center items-baseline gap-2 pt-2">
          <Icon iconName="note" initialstyle="" />
          <Title title="Sticky Note" additionalClasses="mt-2" />
        </div>
      </div>
      <div
        className={`col-span-1 row-span-4 transform  duration-300 ease-in-out hidden md:block ${
          toggleright
            ? " opacity-100 w-[300px] overflow-clip"
            : "w-0 opacity-0 overflow-hidden "
        } bg-bgside rounded-[10px]  my-4 mr-4`}
        onClick={handleClick}
      >
        <Rightside />
      </div>
   
      <div
        className={`  ${
          toggleright ? "col-span-2" : "col-span-2"
        } px-6 h-full `}
        onClick={handleClick}
      ></div>
    </div>
  );
};

export default Mainsticky;
