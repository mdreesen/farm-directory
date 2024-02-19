'use client'
import * as React from "react";
import { useEffect, useRef } from "react";
import { motion, sync, useCycle } from "framer-motion";
import { useDimensions } from "./use-dimensions";
import { MenuToggle } from "./MenuToggle";
import { Navigation } from "./Navigation";
import styles from '@/app/styles/navigation/MobileNavigation.module.css';


const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.2,
      type: "spring",
      stiffness: 500,
      damping: 40
    }
  }
};

export const MobileNavigation = (auth: any) => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  const background = <motion.div className={`${styles["background"]} ${!isOpen ? `${styles['closed-background']}` : ''}`} variants={sidebar} />;
  const navigation = <div onClick={() => toggleOpen()} className={`${!isOpen ? `${styles['closed']}` : ''}`}><Navigation auth={auth?.auth} isOpen={toggleOpen} /></div>

  return (
    <motion.nav
      className={`${styles['nav']} ${!isOpen ? `${styles['closed']}` : ''}`}
      initial={false}
      animate={isOpen ? "open" : "closed"}
      custom={height}
      ref={containerRef}
    >
      {background}
      {navigation}
      <MenuToggle toggle={() => toggleOpen()}  />
    </motion.nav>
  );
};
