import React from "react";
import { motion } from "framer-motion";

interface Props {
  children: React.ReactNode;
  cb: () => void;
}

const Button: React.FC<Props> = ({ children, cb }) => {
  return (
    <motion.button
      whileHover={{
        backgroundColor: "#efefef",
        transition: {
          duration: 0.5,
        },
      }}
      className="py-5 text-xl font-medium uppercase bg-white px-7"
      onClick={cb}
    >
      {children}
    </motion.button>
  );
};

export default Button;
