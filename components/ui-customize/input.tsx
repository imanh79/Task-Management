"use client";
import Icon from "../ui/icon";
import { Input } from "../ui/input";

const Inputprofile = () => {
  return (
    <div className="flex relative w-full pr-4 ">
      <Input
        className="w-full pl-10 bg-transparent focus-visible:ring-[none] border-bgborder "
        placeholder="Search"
        type="text"
      />
      <Icon
        iconName=""
        initialstyle="inputsearch fa-light fa-magnifying-glass"
      />
    </div>
  );
};

export default Inputprofile;
