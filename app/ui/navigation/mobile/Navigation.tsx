'use client'
import * as React from "react";
import { motion } from "framer-motion";
import { MenuItem } from "./MenuItem";
import styles from '@/app/styles/navigation/MobileNavigation.module.css';
import LogoutButtonUser from '../../buttons/logoutButtonUser';

import loggedOutLinks from '../loggedOutLinks.json';
import loggedInLinks from '../loggedInLinks.json';
import farmerLinks from '../farmerLinks.json';


const variants = {
  open: {
    transition: { staggerChildren: 0.07, delayChildren: 0.2 }
  },
  closed: {
    transition: { staggerChildren: 0.05, staggerDirection: -1 }
  }
};

export const Navigation = (auth: any, toggleOpen: any) => {
  const loggedIn = auth?.auth;

  const navItems = () => {
    switch(true) {
      case loggedIn?.isAdmin:
        return loggedInLinks
        break;

    case loggedIn?.isFarmer:
      return farmerLinks
      break;
  
      case loggedIn?.id:
        return loggedInLinks;
        break

      default:
        return loggedOutLinks
    }
  }

  const items = navItems().map((data, i) => <MenuItem isOpen={toggleOpen} data={data} i={i} key={i} />)

  return (
    <motion.ul className={styles['ul']} variants={variants}>
      {items}
    </motion.ul>
  );
};
