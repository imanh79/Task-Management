"use client";
import React, { useEffect } from "react";
import { useTheme } from "@/app/provider";

import InputMain from "../ui-kits/input-main";
import Icon from "../ui/icon";

import Smtitle from "../ui-customize/smtitle";
import Navmobile from "../ui-kits/Nav-mobile";
import Title from "../ui-customize/title";
import Rightside from "../sidebars/rightside";
import Listmain from "../ui-kits/list-main";

const Main = () => {
  const { toggle, settoggle } = useTheme();
  const { todos } = useTheme();
  const { closecalendar, setclosecalendar } = useTheme();
  const { toggleright, settoggleright } = useTheme();
  const Rightsidecloser = () => {
    settoggleright(!toggleright);
  };

  const handleClick = () => {
    setclosecalendar(false);
  };
  const filtertodo = () => {
    return todos.filter((item) => item.done === false);
  };
  const todoitem = filtertodo();
  return (
    <div className="grid grid-rows-[1fr,40%,40%,1fr] grid-cols-[auto,auto,1fr,auto] h-full ">
      <div className="col-span-1 row-span-4 bg-bgside" onClick={handleClick}>
        {toggle ? <Navmobile /> : ""}
      </div>
      <div
        className="col-span-2 px-5 w-full flex justify-start items-start"
        onClick={handleClick}
      >
        <div className="flex justify-center items-baseline gap-2 pt-2">
          <Icon iconName="home" />
          <Title title="Tasks" additionalClasses="mt-2" />
        </div>
      </div>

      <div
        className={`col-span-1 row-span-4 transform  duration-300 ease-in-out hidden md:block ${
          toggleright
            ? " opacity-100 w-[300px] "
            : "w-0 opacity-0 overflow-hidden "
        }   bg-bgside rounded-[10px]  my-4 mr-4`}
        onClick={handleClick}
      >
        <Rightside />
      </div>

      <div
        className={`  ${toggleright ? "col-span-2" : "col-span-2"} px-6`}
        onClick={handleClick}
      >
        <Smtitle smtitle="In Progress" additionalClasses="mb-2" />
        <hr />
        <div className="h-[85%] w-full overflow-y-auto   ">
          {todos.map(
            (item: any, id: number) =>
              item.done === false && (
                <>
                  <Listmain
                    subtitle={item.title}
                    key={id}
                    id={item.id}
                    additinalstyle="py-2"
                  />
                  <hr className=" border-divider border-[1px]" />
                </>
              )
          )}
        </div>
      </div>
      <div className=" col-span-2 px-6 " onClick={handleClick}>
        <Smtitle smtitle="Completed" additionalClasses="mb-2 " /> <hr />
        <div className="transform  duration-300 ease-in-out h-[80%] overflow-y-auto   ">
          {todos.map(
            (item: any, id: number) =>
              item.done === true && (
                <>
                  <Listmain
                    subtitle={item.title}
                    key={id}
                    id={item.id}
                    additinalstyle={`${item.done ? " block " : "hidden"} py-2`}
                  />
                  <hr className="border-divider border-[1px]" />
                </>
              )
          )}
        </div>
      </div>
      <div className="col-span-2 px-6">
        <InputMain />
      </div>
    </div>
  );
};

export default Main;
