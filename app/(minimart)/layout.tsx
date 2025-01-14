import Navbar from "@/components/global/navbar";
import React from "react";

const Mainlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <Navbar />
      <div className="max-w-7xl min-h-full mx-auto">{children}</div>
    </div>
  );
};

export default Mainlayout;
