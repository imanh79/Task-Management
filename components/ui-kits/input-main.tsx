"use client";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import Icon from "../ui/icon";
import { Input } from "../ui/input";
import { useTheme } from "@/app/provider";
import Subtitle from "../ui-customize/subtitle";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  useFormField,
} from "../ui/form";
import { toast, useToast } from "../ui/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Todo } from "@/types/types";
import Listmenubutton from "./list-menu-button";
import { Toast, ToastAction } from "../ui/toast";
import Cookie from "cookie-universal";
const InputMain = () => {
  const { toast } = useToast();
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [value, setvalue] = useState("");
  const [valuetime, setvaluetime] = useState<string | undefined>("");
  const [valueselect, setvalueselect] = useState("");
  const { closecalendar, setclosecalendar } = useTheme();
  const { todos, setTodos } = useTheme();
  const [borderselect, setborderselect] = useState(false);
  const [bordervalue, setbordervalue] = useState(false);
  const dayOfMonth = date?.getDate();

  // بارگذاری todos از Local Storage

  const formSchema = z.object({
    valueform: z.string({
      message: "valueform must be at least 2 characters.",
    }),
  });
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      valueform: "",
    },
  });
  const addTodo = (newTodo: any) => {
    const updatedTodos = [...todos, { ...newTodo }];
    setTodos(updatedTodos);
    // ذخیره todos در کوکی
    const cookies = Cookie();
    cookies.set("todos", updatedTodos, { path: "/" });
  };
  useEffect(() => {
    const cookies = Cookie();
    const storedTodos = cookies.get("todos");
    if (storedTodos) {
      setTodos(storedTodos);
    }
  }, []);
  const isDuplicate = (newValue: any) => {
    return todos.some((todo) => todo.title === newValue);
  };
  const day = date?.getDate();
  const month = date?.getMonth();
  const year = date?.getFullYear();
  const hours = date?.getHours(); // its ready to use
  const minutes = date?.getMinutes(); // its ready to use
  const seconds = date?.getSeconds(); // its ready to use
  const timedate = `${day}/${month}/${year}`;

  // const list: List[] = [
  //   { listname: "Personal", listcolor: "#DC143C" },
  //   { listname: "Work", listcolor: "#87CEEB" },
  //   { listname: "Untitled List", listcolor: "#FDCA40" },
  // ];

  const onSubmit = () => {
    const newTodo = {
      id: todos.length,
      title: value,
      date: valuetime,
      list: [...todos[0].list],
      done: false,
      deleted: false,
      important: false,
      selectlist: valueselect,
    };

    const newValue = value.trim();
    if (!newValue) {
      toast({
        title: "Please enter a value!",
      });
      setbordervalue(true);
      return;
    } else {
      setbordervalue(false);
    }

    if (isDuplicate(newValue)) {
      toast({
        title: "This value is duplicate!",
      });
      return;
    }

    if (!valueselect) {
      toast({
        title: "Please select a list!",
      });
      setborderselect(true);
      return;
    } else {
      setborderselect(false);
    }

    toast({
      title: "Task Added successfully!",
    });

    addTodo(newTodo);
    setvalue("");
  };
  const handleInputClick = () => {
    setclosecalendar(!closecalendar);
    // اجازه ندهید کلیک به والدین منتقل شود
  };
  const selecthandler = (e: any) => {
    setvalueselect(e);
  };
  const filtertodo = () => {
    let map1 = todos.map((item: any) => item.list);
    let map2 = map1.map((item) => item);
    return map2;
  };
  const filterreal = filtertodo();
  const filterrepeat = filterreal[0].map((item: any) => item.listname);
  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="space-y-8 w-full "
      >
        <div className="relative flex items-center  ">
          <FormField
            control={form.control}
            name="valueform"
            render={({ field }) => (
              <FormItem className="w-full ">
                <FormControl>
                  <Input
                    className={`h-[50px] w-full pl-14 focus-visible:ring-[none] border-bgborder ${
                      bordervalue
                        ? "border-[2px] border-[#DC143C]"
                        : "border-bgborder"
                    } `}
                    spellCheck={false}
                    {...field}
                    type="text"
                    value={value}
                    onChange={(event) => setvalue(event.target.value)}
                  />
                </FormControl>{" "}
              </FormItem>
            )}
          />
          <Button
            type="submit"
            className="absolute left-1  !hover:bg-[none]  !hover:text-[none]  "
            variant="ghost"
          >
            <Icon iconName="plus" />
          </Button>
          <Button
            className="absolute right-0 sm:right-2   hover:bg-bgborder hover:text-accent-foreground"
            variant="ghost"
            type="button"
            onClick={handleInputClick}
          >
            {" "}
            <Icon iconName="calendar" />
            {/* <Subtitle subtitle="Today" additionalClasses="hidden sm:block" /> */}
          </Button>
          {closecalendar ? (
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border-divider !overflow-visible  border-[1px] border-solid absolute bottom-14 right-0 calendarmenu bg-background
              focus:bg-bgborder "
            />
          ) : (
            ""
          )}
          <Select onValueChange={selecthandler}>
            <SelectTrigger
              className={`w-[46px] px-6 absolute right-[50px] sm:right-16 ${
                borderselect ? "border-[2px] border-[#DC143C]" : "border-[0px]"
              } gap-2 bg-[tranparent]   hover:bg-bgborder hover:text-accent-foreground`}
            >
              <SelectValue />
              <div className="relative flex justify-center items-center ring-[none]">
                <Icon iconName="list" initialstyle=" absolute -left-[18px]" />
              </div>
              &nbsp;
            </SelectTrigger>
            <SelectContent className="border-divider bg-background relative right-[70px]  ">
              <SelectGroup>
                <SelectLabel>Lists </SelectLabel>
                {filterreal[0].map((item: any, index: any) => (
                  <SelectItem
                    className="flex focus:bg-bgborder "
                    value={item.listname || ""}
                    key={index}
                  >
                    <Listmenubutton
                      label={item.listname}
                      iconName=""
                      value=""
                      additionalClasses={`fa-solid fa-square !text-[${item.listcolor}]  focus:bg-bgborder `}
                      additionalstyles="p-0 w-4 h-4 rounded-[1px]   ring-offset-background   focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                    />
                  </SelectItem>
                ))}
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </form>
    </Form>
  );
};
export default InputMain;
