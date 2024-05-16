"use client";
import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

import { createContext, useContext, useState } from "react";
import { TaskTodo, ThemeContextType, Todo } from "@/types/types";

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error("useTheme must be used within a ThemeProvider");
  }
  return context;
};
interface List {
  listname: string;
  listcolor: string;
  listid: number;
}
const list: List[] = [
  { listname: "Personal", listcolor: "#DC143C", listid: 1 },
  { listname: "Work", listcolor: "#87CEEB", listid: 2 },
  { listname: "Untitled List", listcolor: "#FDCA40", listid: 3 },
];
export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  // toggle menu
  const [toggle, settoggle] = useState(true);
  // toggle star
  const [togglestar, settogglestar] = useState(true);
  // toggle right side menu
  const [toggleright, settoggleright] = useState(false);
  // for open/close clendar
  const [closecalendar, setclosecalendar] = useState(false);
  // data todos
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: 0,
      title: "",
      date: "",
      list: list,
      done: false,
      deleted: false,
      important: false,
    },
  ]);
  // Task todos
  const [tasktodo, settasktodo] = useState<TaskTodo[]>([]);
  return (
    <ThemeContext.Provider
      value={{
        tasktodo,
        settasktodo,
        toggle,
        togglestar,
        settogglestar,
        settoggle,
        closecalendar,
        setclosecalendar,
        todos,
        setTodos,
        toggleright,
        settoggleright,
      }}
    >
      <NextThemesProvider {...props}>{children}</NextThemesProvider>
    </ThemeContext.Provider>
  );
};
