"use client";
import { useTheme } from "@/app/provider";
import Title from "../ui-customize/title";
import { Button } from "../ui/button";
import Icon from "../ui/icon";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../ui/select";
import MenuItem from "../ui-kits/menu-item";
import { useState } from "react";

const Rightside = () => {
  const [togglesquare, settogglesquare] = useState(false);
  const { toggleright, settoggleright } = useTheme();
  const { tasktodo, settasktodo } = useTheme();
  const Rightsidecloser = () => {
    settoggleright(!toggleright);
  };
  const togglesquarehandler = () => {
    settogglesquare(!togglesquare);
  };
  return (
    <div className="pt-4 px-4">
      <div className=" flex justify-between items-center mb-2 ">
        <Title
          title="Task:"
          additionalClasses="!text-border text-[17px] !font-medium "
        />
        <Button
          onClick={Rightsidecloser}
          variant="ghost"
          className="p-0 h-auto"
        >
          <Icon iconName="xmark" />
        </Button>
      </div>
      <Input
        placeholder="Title"
        className="rightstyleinputs"
        value={tasktodo[0]?.tasktitle}
      />
      <Textarea
        placeholder="Description"
        className="rightstyleinputs h-[200px]"
      />
      <Select>
        <SelectTrigger className="rightstyleinputs  !text-border">
          <SelectValue className="" placeholder="Theme" />
        </SelectTrigger>
        <SelectContent className="">
          <SelectItem value="date">date</SelectItem>
        </SelectContent>
      </Select>
      <Select>
        <SelectTrigger className="rightstyleinputs  !text-border !focus-visible:ring-[none] ">
          <SelectValue
            className="placeholder:text-border "
            placeholder="Theme"
          />
        </SelectTrigger>
        <SelectContent className=" ">
          <SelectItem value="date">date</SelectItem>
        </SelectContent>
      </Select>
      <Title
        title="Subtasks:"
        additionalClasses="!text-border mt-4 mb-2 text-[17px] !font-medium "
      />
      <MenuItem
        href="./"
        label="Add New Subtask"
        iconName="plus"
        number={0}
        additionalstyles=" text-border gap-2"
      />
      <hr />
      <div onClick={togglesquarehandler}>
        <MenuItem
          href="./"
          label="Call to batman 🦇"
          iconName=""
          additionalClasses={`${
            togglesquare ? "solid fa-square-check" : "regular fa-square"
          }`}
          number={0}
          additionalstyles=" text-border gap-2"
        />
      </div>
      <br />
      <br /> <br />
      <br />
      <br />
      <div className="flex justify-between items-center gap-2 mt-2">
        <Button
          variant="ghost"
          className="w-full border-divider border  rounded-sm"
        >
          Delete Task
        </Button>
        <Button
          variant="ghost"
          className="w-full bg-[#0057FF] text-[white] rounded-sm"
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
};

export default Rightside;
