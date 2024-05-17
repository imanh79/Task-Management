import Main from "@/components/main/main";
import Sidebar from "@/components/sidebars/sidebar";

export default function Home() {
  return (
    <div className="grid grid-cols-[auto,1fr,1fr] overflow-hidden relative h-screen">
      <section className="col-start-1 col-end-2 bg-bgside h-full relative z-30">
        <Sidebar />
      </section>
      <section className="col-start-2 col-end-4 h-screen overflow-hidden">
        <Main />
      </section>
      <section className="col-start-4 col-end-6 overflow-hidden"></section>
    </div>
  );
}
