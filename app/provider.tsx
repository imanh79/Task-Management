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

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  // toggle menu
  const [toggle, settoggle] = useState(true);
  // toggle star
  const [togglestar, settogglestar] = useState(true);
  // toggle  right side menu
  const [toggleright, settoggleright] = useState(true);
  // for open/close clendar
  const [closecalendar, setclosecalendar] = useState(false);
  // data todos
  const [todos, setTodos] = useState<Todo[]>([]);
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
