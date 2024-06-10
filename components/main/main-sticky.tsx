"use client";
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
  const { toggle, settoggle, togglem, settogglem } = useTheme();
  const { closecalendar, setclosecalendar } = useTheme();
  const { toggleright, settoggleright } = useTheme();
  const { tasktodo, settasktodo } = useTheme();
  const deletehandler = (id: any) => {
    const updatedTodos = todos.filter((item) => item.id !== id);
    setTodos(updatedTodos);
  };
  const handleClick = () => {
    setclosecalendar(false);
    settogglem(false);
  };
  const handleClickright = () => {
    setclosecalendar(false);
  };
  const importantfilter = todos.filter((item) => item.important === true);
  return (
    <div
      className={`grid grid-rows-[auto,auto,auto,1fr,auto] grid-cols-[1fr,auto,auto,auto] h-full relative overflow-clip pl-12 ${
        !togglem ? "sm:pl-[290px]" : "pl-12"
      }`}
    >
      <div
        className="bg-bgside fixed bottom-0 left-0 top-0 z-20"
        onClick={handleClick}
      >
        <Navmobile />
      </div>
      <div
        className="col-span-3 pb-12 px-5 w-full flex justify-start items-start"
        onClick={handleClick}
      >
        <div className="flex justify-center items-baseline gap-2 pt-3">
          <Icon iconName="note" initialstyle="" />
          <Title title="sticky" additionalClasses="mt-2" />
        </div>
      </div>

      <div
        className="col-span-3 pb-12 px-5 w-full flex justify-start items-start"
        onClick={handleClick}
      ></div>
      <div
        className={`col-span-1 row-span-4 h-full sm:h-auto transform duration-500 ease-in-out ${
          toggleright
            ? "w-full  h-full sm:w-[300px] fixed bottom-0 sm:sticky z-30 border-divider -right-[100%] duration-700 ease-in-out"
            : "w-0 overflow-hidden absolute z-30 right-0 duration-700 ease-in-out"
        } bg-bgside rounded-[10px] sm:my-4 sm:mr-4`}
        style={{ right: toggleright ? "0" : "-100%" }}
        onClick={handleClickright}
      >
        <Rightside />
      </div>
      <div
        className={`  col-span-2 px-6 h-full overflow-auto row-span-4 `}
        onClick={handleClick}
      ></div>
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
