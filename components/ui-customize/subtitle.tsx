import { SubtitleProps } from "@/types/types";

const Subtitle = ({ subtitle, additionalClasses }: SubtitleProps) => {
  return <h3 className={`subtitle ${additionalClasses}`}>{subtitle}</h3>;
};

export default Subtitle;
