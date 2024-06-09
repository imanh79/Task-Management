import React, { useState } from "react";
import Subtitle from "../ui-customize/subtitle";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Icon from "../ui/icon";
import { useTheme } from "@/app/provider";
import { TaskTodo } from "@/types/types";
import { useToast } from "../ui/use-toast";
import Cookie from "cookie-universal";
const Listmain = ({ subtitle, id, additinalstyle }: any) => {
  const { toast } = useToast();
  const { togglestar, settogglestar } = useTheme();
  const { toggleright, settoggleright } = useTheme();
  const [data, setdata] = useState("");
  const { todos, setTodos } = useTheme();
  const { tasktodo, settasktodo } = useTheme();
  const [hoverlist, sethoverlist] = useState(false);
  const cookies = Cookie();
  const inheverhandler = () => {
    sethoverlist(true);
  };
  const outhoverhandler = () => {
    sethoverlist(false);
  };
  const handlecheckbox = () => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              done: !todo.done,
            }
          : todo
      );
      cookies.set("todos", updatedTodos, { path: "/" });
      return updatedTodos;
    });

    const updatedTodo = todos.find((todo) => todo.id === id);
    if (updatedTodo && !updatedTodo.done) {
      toast({
        title: "Your task was successfully done!",
      });
    }
  };

  const handleToggleStar = () => {
    setTodos((prevTodos) => {
      const updatedTodos = prevTodos.map((todo) =>
        todo.id === id
          ? {
              ...todo,
              important: !todo.important,
            }
          : todo
      );
      cookies.set("todos", updatedTodos, { path: "/" });
      return updatedTodos;
    });
  };

  const inputhandler = (event: any) => {
    setdata(event.target.checked);
  };

  const infofunction = () => {
    const title = todos.find((item) => item.id === id)?.title || "";
    const date = todos.find((item) => item.id === id)?.date || "";
    const idtodo = todos.find((item) => item.id === id)?.id || "";
    settasktodo([
      { tasktitle: title },
      { date: date },
      {
        description: `The ${title} task started on ${date} The task is focused on optimizing processes and maximizing productivity."`,
      },
      { selectlistcolor: selectedListInfo?.listcolor },
      { selectlistname: selectedListInfo?.listname },
      { id: idtodo },
    ]);

    settoggleright(true);
  };

  // تابع برای یافتن رنگ متناظر با selectlist
  const filteredTodo = todos.find((todo: any) => todo.id === id);
  const filter22 = filteredTodo ? filteredTodo.selectlist : "";
  function getColorByListName(todos: any, listName: any) {
    const todo = todos.find((todo: any) => todo.selectlist === listName);
    if (todo) {
      const selectedList = todo.list.find(
        (list: any) => list.listname === listName
      );
      if (selectedList) {
        return {
          listname: selectedList.listname,
          listcolor: selectedList.listcolor,
          listid: todos.length + 1,
        };
      }
    }
    return null; // یا مقدار پیش‌فرض مورد نظرتان
  }

  // فراخوانی تابع و نمایش رنگ
  const selectedListInfo = getColorByListName(todos, filter22);

  const selectedListColor = selectedListInfo ? selectedListInfo.listcolor : "";
  return (
    <div
      className={`py-1 ${
        hoverlist ? "pb-6" : "pb-1"
      } my-0.5  duration-500 hover:transition-all hover:duration-500 ease-in-out hover:bg-bgside hover:text-accent-foreground  rounded-[6px] overflow-clip fadein  ${additinalstyle} `}
      onMouseMove={inheverhandler}
      onMouseLeave={outhoverhandler}
    >
      <div className="flex justify-between items-center">
        <div
          className={`flex  items-center justify-center gap-4 w-full relative  duration-500 ease-in-out `}
        >
          <div
            className=" "
            onClick={(event) => {
              event.stopPropagation(); // اجازه دادن به اینکه این رویداد به والد انتقال داده شود را ممانعت می‌کند
            }}
          >
            <input
              type="checkbox"
              value={data}
              onChange={inputhandler}
              className=" w-full  absolute opacity-0 -z-10 h-auto"
            />
            <Button
              variant="ghost"
              onClick={handlecheckbox}
              className="hover:bg-[none] "
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
          <div
            className="flex justify-start items-center h-[40px]  relative w-full "
            onClick={infofunction}
          >
            <div>
              {todos.find((todo) => todo.id === id)?.done ? (
                <del>
                  <Subtitle subtitle={subtitle} additionalClasses="" />
                </del>
              ) : (
                <Subtitle
                  subtitle={subtitle}
                  additionalClasses="flex-1 text-start "
                />
              )}
            </div>
          </div>

          <Button
            variant="ghost"
            onClick={handleToggleStar}
            className={`hover:bg-[none] `}
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
          <br />
        </div>
      </div>
      <div className=" relative left-16 w-auto h-auto">
        {" "}
        <div
          className={`flex h-0 w-full transform  duration-300 ease-in-out ${
            hoverlist
              ? " translate-y-[3px] "
              : " translate-y-[40px] overflow-clip "
          } pt-2 items-center`}
        >
          <div className="flex gap-2 pr-4  border-divider border-r-[1px] items-center">
            <Icon iconName="calendar-day" />
            <span className="text-border text-sm flex w-full">
              {todos
                .filter((todo: any) => todo.id === id)
                .map((filteredTodo: any) => filteredTodo.date)}
            </span>{" "}
          </div>
          <div className="flex gap-2 px-4  border-divider border-r-[1px] items-center">
            <div className="relative w-[16.5px] h-[16.5px] rounded-sm bg-border">
              <span className="absolute inset-0 flex justify-center items-center text-[12px] text-bgborder">
                2
              </span>
            </div>
            <div>
              {" "}
              <span className="text-border text-sm flex w-full">Subtask</span>
            </div>
          </div>
          <div className="flex gap-2 px-4  border-divider  items-center">
            <div
              className={`relative w-[16.5px] h-[16.5px] rounded-sm bg-[${selectedListInfo}]`}
              style={{
                backgroundColor: selectedListInfo?.listcolor || "transparent",
              }}
            ></div>

            <div>
              <span className="text-border text-sm flex w-full">
                {" "}
                {todos
                  .filter((todo: any) => todo.id === id)
                  .map((filteredTodo: any) => filteredTodo.selectlist)}
              </span>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Listmain;
