"use client";
import { useTheme } from "@/app/provider";
import Inputprofile from "../ui-customize/input";
import ProfileMenuSection from "../ui-kits/profile-menu-section";
import MenuToggleBtn from "../ui-customize/toggle-menu";
import MenuItem from "../ui-kits/menu-item";
import { ModeToggle } from "../ui/darktheme";
import Smtitle from "../ui-customize/smtitle";
import Itemcounter from "../ui-customize/itemcounter";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import Icon from "../ui/icon";
import Subtitle from "../ui-customize/subtitle";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Button } from "../ui/button";
import Listmenubutton from "../ui-kits/list-menu-button";
import { useEffect, useState } from "react";
import { useToast } from "../ui/use-toast";
import { useLocation } from "react-router-dom";
import { usePathname, useRouter } from "next/navigation";
const Sidebar = () => {
  const pathname = usePathname();
  const { toast } = useToast();
  const { toggle, settoggle } = useTheme();
  const { todos, setTodos } = useTheme();
  const [value, setvalue] = useState("");
  const [closedialog, setclosedialog] = useState(false);
  const [valuecolor, setvaluecolor] = useState("");
  const importantfilter = todos.filter((item) => item.important === true);


  useEffect(() => {
    if (pathname) {
      // settoggle(true);
    }
  }, [pathname]);


  const handleMenuToggle = () => {
    settoggle(!toggle);
  };

  const onSubmit = (event: React.ChangeEvent<HTMLInputElement>) => {
    setvalue(event.target.value);
  };

  const valuehandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    setvaluecolor(e.target.value);
  };
  const filtertodo = () => {
    let map1 = todos.map((item: any) => item.list);
    let map2 = map1.map((item) => item);
    return map2;
  };
  const filterreal = filtertodo();
  const handleSubmit = (event: any) => {
    event.preventDefault();
    const newtodo: any = {
      list: [
        { listname: "Personal", listcolor: "#DC143C" },
        { listname: "Work", listcolor: "#87CEEB" },
        { listname: "Untitled List", listcolor: "#FDCA40" },
      ],
    };
    if (!valuecolor || !value) {
      return;
    } else {
      const newItem = {
        listname: value,
        listcolor: valuecolor,
        listid: filterreal[0].length + 1,
      };

      // اضافه کردن مورد جدید به هر یک از list های todos
      const updatedTodos = todos.map((todo) => ({
        ...todo,
        list: [...todo.list, newItem],
      }));

      // بروزرسانی todos با لیست های جدید
      setTodos(updatedTodos);
      setclosedialog(false);
      setvalue("");
      setvaluecolor("");
      toast({
        title: "List Added successfully!",
      });
    }
  };

  const closehandler = () => {
    setclosedialog(true);
  };

  const filterrepeat = filterreal[0].map((item: any) => item.listname);
  const filteroption1 = todos.map((item) => item.selectlist);
  const filterrepeat2 = filterreal.filter((item) => item);

  const filtercheck = filterrepeat.some((item: any) => item === value);

  const filteroption2 = todos.find((item) => filteroption1 === filterrepeat);
  const fillterslice = filteroption1.slice(1);
  const forfilter = fillterslice.map((item) => {
    return item; // اضافه کردن مقدار به آرایه جدید
  });

  return (
    <div
      className={`transform bg-bgside w-screen duration-500 ease-in-out overflow-clip z-30 fixed top-0 bottom-0 ${
        toggle ? "-translate-x-full" : "translate-x-0"
      }  sm:w-[300px] p-2 pr-2 pl-4`}
    >
      <div className={`flex  w-full gap-4 items-center justify-between mr-2 `}>
        <ProfileMenuSection />
        {toggle ? (
          ""
        ) : (
          <Icon
            iconName="bars"
            initialstyle="  iconhoverbtn"
            onClick={handleMenuToggle}
          />
        )}
      </div>
      <br />
      <Inputprofile />
      <br />
      <Smtitle smtitle="Tasks" />
      <MenuItem
        href="./"
        label="Tasks"
        iconName="home"
        number={todos.length - 1}
      />
      <MenuItem href="./" label="Today" iconName="list" number={5} />
      <MenuItem
        href="./important"
        label="Important"
        iconName="star"
        number={importantfilter.length}
      />
      <MenuItem
        href="./stickynote"
        label="Sticky Note"
        iconName="note"
        number={5}
      />
      <br />
      <Smtitle smtitle="Lists" />
      <div className="h-[285px] overflow-y-auto">
        <div className="  ">
          {filterreal[0].map((item: any, index: any) => (
            <MenuItem
              href="./"
              key={index}
              label={item.listname}
              iconName=""
              additionalClasses={`fa-solid fa-square !text-[${item.listcolor}]`}
              number={-1}
            />
          ))}
        </div>

        <Dialog>
          <DialogTrigger asChild>
            <div
              className=" mb-4 flex items-center  rounded-md  hover:bg-accent hover:text-accent-foreground cursor-pointer"
              onClick={closehandler}
            >
              <Icon
                iconName="plus"
                initialstyle="h-auto px-4 pr-3.5 py-2  whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50"
              />
              <Subtitle subtitle="Add Item" />
            </div>
          </DialogTrigger>

          <DialogContent className={`sm:max-w-[425px] !bg-background `}>
            <DialogHeader>
              <DialogTitle>Edit profile</DialogTitle>
              <DialogDescription>
                Make changes to your profile here. Click save when you&apos;re
                done
              </DialogDescription>
            </DialogHeader>
            <form onSubmit={handleSubmit}>
              <div className="grid gap-6 py-4">
                <div className="grid grid-cols-4 items-center gap-4">
                  <Label htmlFor="name" className="text-right">
                    Name
                  </Label>
                  <Input
                    id="name"
                    className="col-span-3 "
                    value={value}
                    type="text"
                    onChange={onSubmit}
                  />
                </div>
                <div className="pl-[20px] flex items-center gap-4 mb-2">
                  <Label htmlFor="username" className="text-right w-max">
                    Pick Color
                  </Label>
                  <div className="flex items-center gap-6">
                    <Listmenubutton
                      label=""
                      iconName=""
                      value="#DC143C"
                      onclick={valuehandler}
                      additionalClasses="fa-solid fa-square !text-[#DC143C] "
                      additionalstyles="p-0 w-4 h-4 rounded-[1px]  ring-offset-background  focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                    />
                    <Listmenubutton
                      label=""
                      iconName=""
                      value="#87CEEB"
                      onclick={valuehandler}
                      additionalClasses="fa-solid fa-square !text-[#87CEEB] "
                      additionalstyles="p-0 w-4 h-4 rounded-[1px]  ring-offset-background  focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                      variant="unset"
                    />
                    <Listmenubutton
                      label=""
                      iconName=""
                      value="#FDCA40"
                      onclick={valuehandler}
                      additionalClasses="fa-solid fa-square !text-[#FDCA40] "
                      additionalstyles="p-0 w-4 h-4 rounded-[1px]  ring-offset-background  focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                      variant="unset"
                    />
                    <Listmenubutton
                      label=""
                      iconName=""
                      value="#7B61FF"
                      onclick={valuehandler}
                      additionalClasses="fa-solid fa-square !text-[#7B61FF] "
                      additionalstyles="p-0 w-4 h-4 rounded-[1px]  ring-offset-background  focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                      variant="unset"
                    />
                    <Listmenubutton
                      label=""
                      iconName=""
                      value="#FF6433"
                      onclick={valuehandler}
                      additionalClasses="fa-solid fa-square !text-[#FF6433] outline-background "
                      additionalstyles="p-0 w-4 h-4 rounded-[1px]  ring-offset-background  focus:outline-none focus:ring-2 focus:ring-foreground focus:ring-offset-2 disabled:pointer-events-none data-[state=open]:bg-accent data-[state=open]:text-muted-foreground"
                      variant="unset"
                    />
                  </div>
                </div>
              </div>
              <DialogFooter>
                <DialogClose
                  asChild
                  disabled={!valuecolor || !value || filtercheck ? true : false}
                >
                  <Button type="submit">Save changes</Button>
                </DialogClose>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
      {/* <Smtitle smtitle="Setting" /> */}
      <div className="flex w-full justify-between items-center pr-4">
        <MenuItem
          href="./"
          label="Theme"
          iconName="circle-half-stroke"
          additionalClasses=""
          number={999}
        />{" "}
        <br /> <ModeToggle />
      </div>
      <MenuItem
        href="./"
        label="Sign out"
        iconName="arrow-right-from-bracket"
        additionalClasses=""
        number={-1}
      />{" "}
    </div>
  );
};

export default Sidebar;
