import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Title from "../ui-customize/title";
import Subtitle from "../ui-customize/subtitle";
import MenuToggleBtn from "../ui-customize/toggle-menu";
import { useTheme } from "@/app/provider";

const ProfileMenuSection = () => {
  return (
    <div className="flex items-center gap-2 ">
      <Avatar className="flex">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className={`flex flex-col `}>
        <Title title="John Madison" />
        <Subtitle subtitle="Mr.JohnMadison@gmail.com" />
      </div>
    </div>
  );
};

export default ProfileMenuSection;
