"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import { Calendar } from "../ui/calendar";
import Icon from "../ui/icon";
import { Input } from "../ui/input";
import { useTheme } from "@/app/provider";
import Subtitle from "../ui-customize/subtitle";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  useFormField,
} from "../ui/form";
import { toast } from "../ui/use-toast";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
const InputMain = () => {
  const [date, setDate] = React.useState<Date | undefined>(new Date());
  const [value, setvalue] = useState("");
  const { closecalendar, setclosecalendar } = useTheme();
  const { todos, setTodos } = useTheme();

  // console.log(date);
  const day = date?.toLocaleString("default", { weekday: "short" });
  const month = date?.toLocaleString("default", { month: "short" });
  const dayOfMonth = date?.getDate();
  const year = date?.getFullYear();
  const hours = date?.getHours();
  const minutes = date?.getMinutes();
  const seconds = date?.getSeconds();

  // console.log(
  //   `${day} ${month} ${dayOfMonth} ${year} ${hours}:${minutes}:${seconds}`
  // ); // تاریخ و زمان به صورت جداگانه
  console.log(todos);
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
    setTodos([...todos, newTodo]);
  };
  const isDuplicate = (newValue: any) => {
    return todos.some((todo) => todo.title === newValue);
  };
  const onSubmit = () => {
    const newTodo = {
      id: todos.length + 1,
      title: value,
      date: date,
      done: false,
      deleted: false,
      important: false,
    };

    console.log(value);
    console.log(newTodo.title);
    const newValue = value.trim();
    if (!newValue || isDuplicate(newValue)) {
      return;
    }
    addTodo(newTodo);
    setvalue("");
  };
  const handleInputClick = () => {
    setclosecalendar(!closecalendar);
    // اجازه ندهید کلیک به والدین منتقل شود
  };
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 ">
        <div className="relative flex items-center ">
          <FormField
            control={form.control}
            name="valueform"
            render={({ field }) => (
              <FormItem className="w-full">
                <FormControl>
                  <Input
                    className="h-[50px] w-full pl-14 focus-visible:ring-[none] border-bgborder"
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
          <Button type="submit" className="absolute left-1" variant="ghost">
            <Icon iconName="plus" />
          </Button>
          <Button
            className="absolute right-2"
            variant="ghost"
            onClick={handleInputClick}
          >
            {" "}
            <Icon iconName="calendar" />
            &nbsp;&nbsp;
            <Subtitle subtitle="Today" />
          </Button>
          {closecalendar ? (
            <Calendar
              mode="single"
              selected={date}
              onSelect={setDate}
              className="rounded-md border-divider border-[1px] absolute bottom-14 right-0 calendarmenu bg-bgside "
            />
          ) : (
            ""
          )}
        </div>
      </form>
    </Form>
  );
};
export default InputMain;
