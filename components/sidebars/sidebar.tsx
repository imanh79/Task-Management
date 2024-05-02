"use client";
import { useTheme } from "@/app/provider";
import Inputprofile from "../ui-customize/input";
import ProfileMenuSection from "../ui-kits/profile-menu-section";
import MenuToggleBtn from "../ui-customize/toggle-menu";
import MenuItem from "../ui-kits/menu-item";
import { ModeToggle } from "../ui/darktheme";
import Smtitle from "../ui-customize/smtitle";
import Itemcounter from "../ui-customize/itemcounter";

const Sidebar = () => {
  const { toggle, settoggle } = useTheme();

  const handleMenuToggle = () => {
    settoggle(!toggle);
  };
  return (
    <div
      className={` transform  duration-300 ease-in-out   ${
        toggle
          ? "w-0 overflow-hidden p-0"
          : "w-[300px] p-2 pr-2 overflow-visible "
      }`}
    >
      <div className={`flex  w-full gap-1 `}>
        <ProfileMenuSection />
        {toggle ? "" : <MenuToggleBtn handleMenuToggle={handleMenuToggle} />}
      </div>
      <br />
      <Inputprofile />
      <br />
      <Smtitle smtitle="Tasks" />
      <MenuItem href="./" label="Tasks" iconName="home" number={5} />
      <MenuItem href="./" label="Today" iconName="list" number={5} />
      <MenuItem href="./" label="Important" iconName="star" number={5} />
      <MenuItem href="./" label="Sticky Note" iconName="note" number={5} />
      <br />
      <Smtitle smtitle="Lists" />
      <MenuItem
        href="./"
        label="Sticky Note"
        iconName=""
        additionalClasses="fa-solid fa-square !text-[#DC143C]"
        number={5}
      />
      <MenuItem
        href="./"
        label="Sticky Note"
        iconName=""
        additionalClasses="fa-solid fa-square !text-[#87CEEB]"
        number={5}
      />
      <MenuItem
        href="./"
        label="Sticky Note"
        iconName=""
        additionalClasses="fa-solid fa-square !text-[#FDCA40]"
        number={5}
      />
      <MenuItem href="./" label="Add Item" iconName="plus" number={0} /> <br />{" "}
      <br /> <br /> <br /> <br />
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
        number={0}
      />{" "}
    </div>
  );
};

export default Sidebar;
