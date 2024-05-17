import Main from "@/components/main/main";
import Sidebar from "@/components/sidebars/sidebar";

export default function Home() {
  return (
    <div
      className={`grid grid-cols-[auto,1fr,1fr] min-h-[100vh] overflow-clip relative`}
    >
      <section className="col-start-1 col-end-2 bg-bgside h-full min-h-[100vh]">
        <Sidebar />
      </section>
      <section className="col-start-2 col-end-4 overflow-clip h-full min-h-[100vh]">
        <Main />
      </section>
      <section className="col-start-4 col-end-6 "></section>
    </div>
  );
}
