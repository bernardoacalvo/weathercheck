import React from "react";
import { motion } from "framer-motion";

import "./Loader.css";

function Loader() {
  return (
    <div className="loader-container">
      <motion.span
        className="ball"
        animate={{ rotate: [0, 270, 360], scale: [0, 1.5, 3] }}
        transition={{
          rotate: {
            ease: "easeOut",
            duration: 2,
            repeat: Infinity,
          },
          scale: {
            ease: "linear",
            duration: 1,
            repeat: Infinity,
            repeatType: "reverse",
          },
        }}
      />
    </div>
  );
}

export default Loader;
