import React from "react";
import { motion } from "framer-motion";

const variants = {
  default: { width: 0 },
  active: { width: "calc(100% - 0.75rem)" },
};

const TabButton = ({ active, selectTab, children }) => {
  const buttonClasses = active ? "text-white" : "text-[#ADB7BE]";

  return (
    <button className="no-pointer-cursor" onClick={selectTab}>
      <p className={`no-pointer-cursor mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
      <motion.div
        animate={active ? "active" : "default"}
        variants={variants}
        className="no-pointer-cursor h-1 bg-yellow-400 rounded-full mt-2 mr-3"
      ></motion.div>
    </button>
  );
};

export default TabButton;
