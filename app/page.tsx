import Main from "@/components/main/main";
import Sidebar from "@/components/sidebars/sidebar";

export default function Home() {
  return (
    <div className={`grid grid-cols-[auto,1fr,1fr]  relative   overflow-clip`}>
      <section className="col-start-1 col-end-2 bg-bgside  h-[760px] relative ">
        <Sidebar />
      </section>
      <section className="col-start-2 col-end-4    overflow-clip">
        <Main />
      </section>
      <section className="col-start-4 col-end-6 "></section>
    </div>
  );
}
