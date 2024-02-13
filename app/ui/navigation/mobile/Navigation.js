// 'use client'
import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import styles from '@/app/styles/navigation/MobileNavigation.module.css';
import { useSession } from "next-auth/react";

import loggedOutLinks from '../loggedOutLinks.json';
import loggedInLinks from '../loggedInLinks.json';
import adminLinks from '../adminLinks.json';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = (toggleOpen) => {
  const { data: session, status } = useSession();

  // const itemIds = session ? loggedInLinks : loggedOutLinks;
  const navItems = () => {
    switch(true) {
      case session?.user?.id:
        return loggedInLinks;
        break

      case session?.user?.isAdmin:
        return adminLinks
        break;

      default:
        return loggedOutLinks
    }
  }

  const items = navItems().map((data, i) => <MenuItem isOpen={toggleOpen} data={data} i={i} key={i} />);

  return (
    <motion.ul className={styles['ul']} variants={variants}>
      {items}
    </motion.ul>
  );
};
