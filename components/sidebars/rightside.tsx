"use client";
import { useTheme } from "@/app/provider";
import Title from "../ui-customize/title";
import { Button } from "../ui/button";
import Icon from "../ui/icon";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import MenuItem from "../ui-kits/menu-item";
import { useEffect, useState } from "react";
import Listmenubutton from "../ui-kits/list-menu-button";
import { toast, useToast } from "../ui/use-toast";

const Rightside = () => {
  const { toast } = useToast();
  const [togglesquare, settogglesquare] = useState(false);
  const { tasktodo, settasktodo } = useTheme();
  const [title, setTitle] = useState("");
  const [description, setdescription] = useState("");
  const [data, setdata] = useState("");
  const [list, setlist] = useState("");
  console.log(tasktodo);
  const { toggleright, settoggleright } = useTheme();
  console.log(toggleright);
  const { todos, setTodos } = useTheme();
  const Rightsidecloser = () => {
    settoggleright(!toggleright);
  };
  const togglesquarehandler = () => {
    settogglesquare(!togglesquare);
  };

  const clickhandler = () => {
    const taskId = tasktodo[5]?.id; // شناسه وظیفه‌ای که می‌خواهید عنوان آن را تغییر دهید
    if (!taskId) {
      // اگر شناسه‌ای موجود نباشد، عملیات را نادیده بگیرید
      return;
    }
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === taskId
          ? {
              ...todo,
              title: title,
              description: description,
              data: data,
              selectlist: list,
            }
          : todo
      )
    );
    settoggleright(false);
    console.log(todos);
    console.log(tasktodo);
    toast({
      title: "Changes made successfully!",
      description: "Friday, February 10, 2023 at 5:57 PM",
    });
  };
  const deletehandler = () => {
    const taskId = tasktodo[5]?.id;
    if (!taskId) {
      return;
    }
    const updatedTodos = todos.filter((item) => item.id !== taskId);
    setTodos(updatedTodos);
    settoggleright(false);
    toast({
      variant: "destructive",
      title: "Task Deleted successfully!",
      description: "Friday, February 10, 2023 at 5:57 PM",
    });
  };
  useEffect(() => {
    if (toggleright && tasktodo[0]?.tasktitle) {
      setTitle(tasktodo[0]?.tasktitle);
      setdescription(tasktodo[2]?.description || "");
      setdata(tasktodo[1]?.date?.toString() || "");
      setlist(tasktodo[4]?.selectlistname || "");
    }
  }, [toggleright, tasktodo]);
  console.log(todos);
  const valuehandlertitle = (e: any) => {
    setTitle(e.target.value);
  };
  const valuehandlerdescription = (e: any) => {
    setdescription(e.target.value);
  };
  const valuehandlerdata = (e: any) => {
    setdata(e.target.value);
  };
  const valuehandlerlist = (e: any) => {
    setlist(e);
    console.log(e);
  };
  const filtertodo = () => {
    let map1 = todos.map((item: any) => item.list);
    let map2 = map1.map((item) => item);
    return map2;
  };
  const filterreal = filtertodo();
  console.log(filterreal);
  return (
    <div className="pt-4 px-4 h-full">
      <div className=" flex justify-between items-center mb-2 ">
        <Title
          title="Task:"
          additionalClasses="!text-border text-[17px] !font-medium "
        />
        <Button
          onClick={Rightsidecloser}
          variant="ghost"
          className="p-0 h-auto"
        >
          <Icon iconName="xmark" />
        </Button>
      </div>
      <Input
        placeholder="Title"
        className="rightstyleinputs"
        value={title}
        onChange={valuehandlertitle}
      />
      <Textarea
        placeholder="Description"
        className="rightstyleinputs h-[200px]"
        value={description}
        onChange={valuehandlerdescription}
        spellCheck={false}
      />
      <Select>
        <SelectTrigger
          className={`rightstyleinputs ${
            !tasktodo[1]?.date?.toString() ? "text-border" : " text-foreground"
          } `}
        >
          <SelectValue className="" placeholder={data || "Date"} />
        </SelectTrigger>
        <SelectContent className=" text-background">
          <SelectItem
            value="value"
            className=" text-background"
            onChange={valuehandlerdata}
          >
            {data}
          </SelectItem>
        </SelectContent>
      </Select>
      <Select onValueChange={valuehandlerlist}>
        <SelectTrigger
          className={`rightstyleinputs   ${
            !tasktodo[4]?.selectlistname ? "!text-border" : "text-foreground"
          } !focus-visible:ring-[none] `}
        >
          <SelectValue className={``} placeholder={list || "List"} />
        </SelectTrigger>
        <SelectContent className="!hover:text-background   bg-background ">
          {filterreal[0].map((item: any, index: any) => (
            <SelectItem value={item.listname || ""} key={index}>
              <Listmenubutton
                label={item.listname}
                key={item.listcolor}
                iconName=""
                value=""
                additionalClasses={`fa-solid fa-square !text-[${item.listcolor}] `}
                additionalstyles="p-0 w-4 h-4 rounded-[1px]   ring-offset-background  focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
              />
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      <Title
        title="Subtasks:"
        additionalClasses="!text-border mt-4 mb-2 text-[17px] !font-medium "
      />
      <MenuItem
        href="./"
        label="Add New Subtask"
        iconName="plus"
        number={-1}
        additionalstyles=" text-border gap-2"
      />
      <hr />
      <div onClick={togglesquarehandler}>
        <MenuItem
          href="./"
          label="Call to batman 🦇"
          iconName=""
          additionalClasses={`${
            togglesquare ? "solid fa-square-check" : "regular fa-square"
          }`}
          number={-1}
          additionalstyles=" text-border gap-2"
        />
      </div>
      <br />
      <br /> <br />
      <br />
      <br />
      <div className="flex justify-between items-center gap-2 mt-2">
        <Button
          onClick={deletehandler}
          variant="ghost"
          className="w-full border-divider border  rounded-sm"
        >
          Delete Task
        </Button>
        <Button
          onClick={clickhandler}
          variant="ghost"
          className="w-full bg-[#0057FF] text-[white] rounded-sm"
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default Rightside;
