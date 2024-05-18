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
import { useToast } from "../ui/use-toast";

const Main = () => {
  const { toast } = useToast();
  const { todos, setTodos } = useTheme();
  const [openContextMenuId, setOpenContextMenuId] = useState<number | null>(
    null
  );
  const { toggle, settoggle } = useTheme();
  const { closecalendar, setclosecalendar } = useTheme();
  const { toggleright, settoggleright } = useTheme();

  const deletehandler = (id: any) => {
    const updatedTodos = todos.filter((item) => item.id !== id);
    setTodos(updatedTodos);
    toast({
      variant: "destructive",
      title: "Task Deleted successfully!",
      description: "Friday, February 10, 2023 at 5:57 PM",
    });
  };
  const handleClick = () => {
    setclosecalendar(false);
  };

  return (
    <div
      className={`grid grid-rows-[auto,auto,auto,1fr,auto] grid-cols-[1fr,auto,auto,auto] h-full relative overflow-clip ${
        toggle ? "pl-12" : ""
      }`}
    >
      <div
        className="bg-bgside fixed bottom-0 left-0 top-0"
        onClick={handleClick}
      >
        {toggle ? <Navmobile /> : ""}
      </div>

      <div
        className="col-span-3 pb-12 px-5 w-full flex justify-start items-start"
        onClick={handleClick}
      >
        <div className="flex justify-center items-baseline gap-2 pt-2">
          <Icon iconName="home" />
          <Title title="Tasks" additionalClasses="mt-2" />
        </div>
      </div>

      <div
        className={`col-span-1 row-span-4 h-full sm:h-auto transform duration-500 ease-in-out ${
          toggleright
            ? "w-full  h-full sm:w-[300px] fixed bottom-0 sm:sticky z-30 border-divider -right-[100%] duration-700 ease-in-out"
            : "w-0 overflow-hidden absolute z-30 right-0 duration-700 ease-in-out"
        } bg-bgside rounded-[10px] sm:my-4 sm:mr-4`}
        style={{ right: toggleright ? "0" : "-100%" }}
        onClick={handleClick}
      >
        <Rightside />
      </div>
      <div className="col-span-3 px-6 h-full" onClick={handleClick}>
        <div className="h-[280px]">
          <Smtitle smtitle="In Progress" additionalClasses="mb-2" />
          <hr />
          <div className="h-[85%] w-full overflow-y-auto mt-2">
            {todos.map(
              (item, id) =>
                !item.done &&
                item.title !== "" && (
                  <ContextMenu key={id}>
                    <ContextMenuTrigger
                      key={item.id}
                      onContextMenu={() => {
                        if (item.id !== undefined) {
                          setOpenContextMenuId(item.id);
                        }
                      }}
                    >
                      <Listmain
                        subtitle={item.title}
                        id={item.id}
                        additinalstyle="py-2 fadeIn"
                      />
                    </ContextMenuTrigger>
                    <hr className="border-divider border-[1px]" />
                    {openContextMenuId === item.id && (
                      <ContextMenuContent className="bg-background border-divider overflow-clip">
                        <ContextMenuItem
                          className="focus:bg-bgborder"
                          onClick={() => settoggleright(true)}
                        >
                          Edit
                        </ContextMenuItem>
                        <ContextMenuItem className="focus:bg-bgborder">
                          Billing
                        </ContextMenuItem>
                        <ContextMenuItem className="focus:bg-bgborder">
                          Team
                        </ContextMenuItem>
                        <ContextMenuItem
                          className="text-[#DC143C] focus:text-[#DC143C] text-opacity-100 focus:bg-bgborder"
                          onClick={() => {
                            deletehandler(item.id);
                            setOpenContextMenuId(null);
                          }}
                        >
                          Delete
                        </ContextMenuItem>
                      </ContextMenuContent>
                    )}
                  </ContextMenu>
                )
            )}
          </div>
        </div>
        <div className="h-[295px]">
          <Smtitle smtitle="Completed" additionalClasses="mb-2 " />
          <hr />
          <div className="transform duration-300 ease-in-out h-[80%] overflow-y-auto mt-2">
            {todos.map(
              (item, id) =>
                item.done && (
                  <ContextMenu key={id}>
                    <ContextMenuTrigger
                      key={item.id}
                      onContextMenu={() => {
                        if (item.id !== undefined) {
                          setOpenContextMenuId(item.id);
                        }
                      }}
                    >
                      <Listmain
                        subtitle={item.title}
                        key={id}
                        id={item.id}
                        additinalstyle={`${
                          item.done ? "block" : "hidden"
                        } fadeIn py-2`}
                      />
                    </ContextMenuTrigger>
                    <hr className="border-divider border-[1px]" />
                    {openContextMenuId === item.id && (
                      <ContextMenuContent className="bg-background border-divider overflow-clip">
                        <ContextMenuItem className="focus:bg-bgborder">
                          Profile
                        </ContextMenuItem>
                        <ContextMenuItem className="focus:bg-bgborder">
                          Billing
                        </ContextMenuItem>
                        <ContextMenuItem className="focus:bg-bgborder">
                          Team
                        </ContextMenuItem>
                        <ContextMenuItem
                          className="text-[#DC143C] focus:text-[#DC143C] text-opacity-100 focus:bg-bgborder"
                          onClick={() => {
                            deletehandler(item.id);
                            setOpenContextMenuId(null);
                          }}
                        >
                          Delete
                        </ContextMenuItem>
                      </ContextMenuContent>
                    )}
                  </ContextMenu>
                )
            )}
          </div>
        </div>
      </div>

      <div className=" h-[auto] w-full col-span-3 px-6 ">
        <InputMain />
      </div>
    </div>
  );
};

export default Main;
