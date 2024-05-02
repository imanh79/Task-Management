import { Smtitleprops } from "@/types/types";

const Smtitle = ({ smtitle, additionalClasses }: Smtitleprops) => {
  return <h6 className={`smtitle ${additionalClasses}`}>{smtitle}</h6>;
};

export default Smtitle;
