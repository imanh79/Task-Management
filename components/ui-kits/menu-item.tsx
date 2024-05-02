"use client";

// public
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Button } from "../ui/button";
import Icon from "../ui/icon";
import { MenuItemTypes } from "@/types/types";
import Itemcounter from "../ui-customize/itemcounter";
import { count } from "console";

//* components
const MenuItem = ({
  href,
  label,
  iconName,
  additionalClasses,
  additionalstyles,
  number,
}: MenuItemTypes) => {
  const pathname = usePathname();

  return (
    <Link href={href}>
      <div className=" flex items-center">
        <Button
          variant={number === 999 ? "foreground" : "ghost"}
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
            initialstyle={number === 0 || number === 999 ? "hidden" : ""}
          />
        </Button>
      </div>
    </Link>
  );
};

export default MenuItem;
