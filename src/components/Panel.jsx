import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Projects from "./Projects";

const Panel = () => {
  return (
    <div className="h-[600px] w-[800px] bg-[#36454F] rounded-2xl text-white">
      <header className="h-[20%] bg-[#2d3941] rounded-t-2xl border-b border-[#5d6a73] flex items-center pl-[50px] font-semibold">
        header
      </header>
      <Projects />
    </div>
  );
};

export default Panel;
