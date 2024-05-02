import { Button } from "../ui/button";

const Itemcounter = ({ count, initialstyle }: any) => {
  return (
    <span
      className={` flex justify-center items-center text-[12px] border-solid w-[33px] h-[23px] bg-bgborder  rounded-[5px] px-3 ${initialstyle}`}
    >
      {count}
    </span>
  );
};

export default Itemcounter;
