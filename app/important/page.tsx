import Main from "@/components/main/main";
import MainImportant from "@/components/main/main-important";
import Sidebar from "@/components/sidebars/sidebar";
import React from "react";

const Important = () => {
  return (
    <div className="grid grid-cols-[auto,1fr,1fr] h-screen overflow-clip relative ">
      <section className="col-start-1 col-end-2 bg-bgside">
        <Sidebar />
      </section>
      <section className="col-start-2 col-end-4 overflow-clip ">
        <MainImportant />
      </section>
      <section className="col-start-4 col-end-6"></section>
    </div>
  );
};

export default Important;
