'use client'
import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import styles from '@/app/styles/navigation/MobileNavigation.module.css';
import { getSession, useSession } from "next-auth/react";

import loggedOutLinks from '../loggedOutLinks.json';
import loggedInLinks from '../loggedInLinks.json';

const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = (toggleOpen: any) => {
  // const isSession = await getSession()
  // console.log(isSession)

  const { data: session, status } = useSession();
  console.log('session user', session, status)

  const itemIds = session ? loggedInLinks : loggedOutLinks;

  const items = itemIds.map((data, i) => <MenuItem isOpen={toggleOpen} data={data} i={i} key={i} />);

  return (
    <motion.ul className={styles['ul']} variants={variants}>
      {items}
    </motion.ul>
  );
};
