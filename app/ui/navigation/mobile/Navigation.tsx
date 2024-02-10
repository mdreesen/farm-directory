'use client'
import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import styles from '@/app/styles/navigation/MobileNavigation.module.css';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = (toggleOpen: any) => {

  const itemIds = [
    {
      linkName: "Home",
      goTo: "/"
    },
    {
      linkName: "Farm To Table",
      goTo: "/farm-to-table"
    },
    {
      linkName: "Live Animals",
      goTo: "/live-animals"
  
    },
    {
      linkName: "Feed/Bedding",
      goTo: "/feed-bedding"
    },
    {
      linkName: "Agritourism",
      goTo: "/agritourism"
    },
    {
      linkName: "Farm Services",
      goTo: "/farm-services"
    },
    {
      linkName: "Sign Up",
      goTo: "/authentication/signup"
    },
  ]

  const items = itemIds.map((data, i) => <MenuItem isOpen={toggleOpen} data={data} i={i} key={i} />)

  return (
    <motion.ul className={styles['ul']} variants={variants}>
      {items}
    </motion.ul>
  );
};
