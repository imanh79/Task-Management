import { TitleProps } from "@/types/types";

const Title = ({ title, additionalClasses }: TitleProps) => {
  return (
    <h3 className={`title roboto-regular ${additionalClasses}`}>{title}</h3>
  );
};

export default Title;
