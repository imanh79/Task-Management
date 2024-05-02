import React, { useState } from "react";
import Subtitle from "../ui-customize/subtitle";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Icon from "../ui/icon";
import { useTheme } from "@/app/provider";
import { TaskTodo } from "@/types/types";

const Listmain = ({ subtitle, id, additinalstyle }: any) => {
  const { togglestar, settogglestar } = useTheme();
  const [data, setdata] = useState("");
  const { todos, setTodos } = useTheme();
  const { tasktodo, settasktodo } = useTheme();
  const handlecheckbox = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo
      )
    );
  };
  const handleToggleStar = () => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              important: !todo.important,
            }
          : todo
      )
    );
  };

  const inputhandler = (event: any) => {
    setdata(event.target.checked);
  };

  const infofunction = () => {
    const title = todos.find((item) => item.id === id)?.title || "";
    settasktodo([{ tasktitle: title }]);
  };

  console.log(tasktodo);

  return (
    <div
      className={`flex justify-between items-center hover:bg-bgside hover:text-accent-foreground rounded-[10px] mt-1 fadein ${additinalstyle} `}
      onClick={infofunction}
    >
      <div className="flex items-center gap-4">
        <div className=" relative">
          <input
            type="checkbox"
            value={data}
            onChange={inputhandler}
            className=" w-full h-full absolute opacity-0 -z-10"
          />
          <Button
            variant="ghost"
            onClick={handlecheckbox}
            className="hover:bg-[none]"
          >
            <Icon
              iconName="square-check"
              initialstyle={`fa-${
                todos.find((todo) => todo.id === id)?.done
                  ? "solid fa-square-check"
                  : "regular fa-square"
              } !text-foreground `}
            />
          </Button>
        </div>
        {todos.find((todo) => todo.id === id)?.done ? (
          <del>
            <Subtitle subtitle={subtitle} />
          </del>
        ) : (
          <Subtitle subtitle={subtitle} />
        )}
      </div>
      <Button
        variant="ghost"
        onClick={handleToggleStar}
        className="hover:bg-[none]"
      >
        <Icon
          iconName="star"
          initialstyle={`fa-${
            todos.find((todo) => todo.id === id)?.important
              ? "solid"
              : "regular"
          } fa-star !text-foreground`}
        />
      </Button>
    </div>
  );
};

export default Listmain;
