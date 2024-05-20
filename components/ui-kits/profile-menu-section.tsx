import React, { useState } from "react";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";
import Title from "../ui-customize/title";
import Subtitle from "../ui-customize/subtitle";
import MenuToggleBtn from "../ui-customize/toggle-menu";
import { useTheme } from "@/app/provider";
import Link from "next/link";

const ProfileMenuSection = () => {
  return (
    <div className="flex items-center gap-2 sm:gap-2 w-full">
      <Avatar className="flex">
        <AvatarImage src="https://avatars.githubusercontent.com/u/93634742?s=400&u=26246a7ad5ccd139ffe5b336ad252d7f045988fe&v=4" />
        <AvatarFallback>CN</AvatarFallback>
      </Avatar>
      <div className={`flex flex-col `}>
        <Title title="Iman haghi" additionalClasses="roboto-medium" />
        <Link href="mailto:iman.h0089@gmail.com">
          <Subtitle subtitle="iman.h0089@gmail.com" />
        </Link>
      </div>
    </div>
  );
};

export default ProfileMenuSection;
