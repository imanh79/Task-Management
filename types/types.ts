export type IconProps = {
  style?: "fas" | "far" | "opacity-0" | "opacity-100";
  iconName: string;
  color?: string;
  initialstyle?: string;
  onClick?:any;
};

export type TitleProps = {
  title: string;
  additionalClasses?: string;
};
export type SquareProps = {
  color?: string;
};

export type SubtitleProps = {
  subtitle: string;
  additionalClasses?: string;
};
export type Smtitleprops = {
  smtitle: string;
  additionalClasses?: string;
};

export type HeadingProps = {
  heading: string;
  additionalClasses?: string;
};
export type defaultlists = {
  listname?: string;
  listcolor?: string;
};
// ui kits components
export type MenuItemTypes = {
  href?: any;
  label: string;
  iconName: any;
  additionalClasses?: string;
  number?: Number;
  additionalstyles?: string;
  value?: any;
  onclick?: any;
  variant?: any;
};
export type Todo = {
  id?: number;
  title?: string;
  done?: boolean;
  deleted?: boolean;
  date?: Date | string;
  important?: boolean;
  list?: any;
  newtodo?: any;
  listname?: string;
  listcolor?: string;
  selectlist?: any;
};
export type TodoWithDefaults = {
  list: {
    listname: string;
    listcolor: string;
  }[];
};
export type TaskTodo = {
  tasktitle?: any;
  description?: string;
  date?: Date | string |undefined;
  status?: string;
  prevTaskTodos?: any;
  selectlistcolor?: any;
  selectlistname?: any;
  id?: any;
};
export type ThemeContextType = {
  toggle: boolean;
  toggleright: boolean;
  closecalendar: boolean;
  todos: Todo[];
  tasktodo: TaskTodo[];
  togglestar: boolean;
  settasktodo: React.Dispatch<React.SetStateAction<TaskTodo[]>>;
  settogglestar: React.Dispatch<React.SetStateAction<boolean>>;
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>;
  setclosecalendar: React.Dispatch<React.SetStateAction<boolean>>;
  settoggle: React.Dispatch<React.SetStateAction<boolean>>;
  settoggleright: React.Dispatch<React.SetStateAction<boolean>>;
};
