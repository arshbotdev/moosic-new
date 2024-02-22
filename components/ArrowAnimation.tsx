"use client";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ArrowAnimation: React.FC = () => {
  const [isStickVisible, setIsStickVisible] = useState(false);

  const handleAnimationStart = () => {
    setIsStickVisible(true);
  };

  const handleAnimationComplete = () => {
    setTimeout(() => {
      setIsStickVisible(false);
    }, 1000); // Adjust the time based on the duration of your animation
  };

  return (
    <div className="arrow-container">
      <div className="arrow-wrapper">
        <div className="arrow-chevron">
          <motion.div
            className="chevron"
            initial={{ rotate: 0 }}
            animate={{ rotate: 90 }}
            transition={{ duration: 0.5 }}
            onAnimationComplete={handleAnimationComplete}
          >
            <AnimatePresence>
              {isStickVisible && (
                <motion.div
                  className="stick"
                  initial={{ width: 0 }}
                  animate={{ width: 20 }}
                  transition={{ duration: 0.5 }}
                />
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ArrowAnimation;
