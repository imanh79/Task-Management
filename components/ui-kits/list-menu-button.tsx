"use client";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Icon from "../ui/icon";
import { usePathname } from "next/navigation";
import { MenuItemTypes } from "@/types/types";

const Listmenubutton = ({
  href,
  label,
  iconName,
  additionalClasses,
  additionalstyles,
  number,
  value,
  onclick,
  variant,
}: MenuItemTypes) => {
  const pathname = usePathname();
  const [valuecolor, setvaluecolor] = useState("");
  const valuehandler = (e: any) => {
    setvaluecolor(e.target.value);
  };
  return (
    <div className=" flex items-center  relative  gap-2 ">
      <Button
        variant={null}
        value={value}
        type="button"
        onClick={onclick}
        className={` flex gap-2 fw-btn w-full relative z-30 ${additionalstyles} ${
          pathname === href ? "bg-background" : ""
        }`}
      ></Button>
      <Icon
        iconName={iconName}
        style="far"
        initialstyle={`${additionalClasses} absolute z-10`}
      />{label}
    </div>
  );
};

export default Listmenubutton;
