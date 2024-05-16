import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Title from "../ui-customize/title";
import Subtitle from "../ui-customize/subtitle";
import MenuToggleBtn from "../ui-customize/toggle-menu";
import { useTheme } from "@/app/provider";

const ProfileMenuSection = () => {
  return (
    <div className="flex items-center gap-2 sm:gap-2 w-full">
      <Avatar className="flex">
        <AvatarImage src="https://github.com/shadcn.png" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className={`flex flex-col `}>
        <Title title="John Madison" />
        <Subtitle subtitle="Mr.JohnMadison@gma..." />
      </div>
    </div>
  );
};

export default ProfileMenuSection;
