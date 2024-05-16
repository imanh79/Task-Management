"use client";

// public
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import Icon from "../ui/icon";
import { MenuItemTypes } from "@/types/types";
import Itemcounter from "../ui-customize/itemcounter";
import { useState } from "react";

//* components
const MenuItem = ({
  href,
  label,
  iconName,
  additionalClasses,
  additionalstyles,
  number,
  value,
}: MenuItemTypes) => {
  const pathname = usePathname();
  const [valuecolor, setvaluecolor] = useState("");
  const valuehandler = (e: any) => {
    setvaluecolor(e.target.value);
  };
  return (
    <Link href={href || ""}>
      <div className=" flex items-center">
        <Button
          variant={number === 999 ? "foreground" : "ghost"}
          value={valuecolor}
          onClick={valuehandler}
          className={`w-full flex gap-2 fw-btn ${additionalstyles} ${
            pathname === href ? "bg-background" : ""
          }`}
        >
          <Icon
            iconName={iconName}
            style="far"
            initialstyle={`${additionalClasses}`}
          />
          <span className="flex-1 text-start ">{label}</span>
          <Itemcounter
            count={number}
            initialstyle={number === -1 || number === 999 ? "hidden" : ""}
          />
        </Button>
      </div>
    </Link>
  );
};

export default MenuItem;
