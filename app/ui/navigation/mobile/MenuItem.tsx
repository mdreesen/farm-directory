'use client'
import styles from '@/app/styles/navigation/MobileNavigation.module.css';
import Link from "next/link";
import { motion, useCycle } from "framer-motion";
import LogoutButtonUser from '../../buttons/logoutButtonUser';

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#000000", "#BF5D30", "#61603C", "#7A402E", "#2F4D49", "#C2803A", "#D1CDC4", "#D1CDC4"];



export const MenuItem = ({ data, i }: any) => {


  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      className={styles['li']}
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div className={styles["icon-placeholder"]} style={style} />
      {data?.linkName === "Sign Out" ? <LogoutButtonUser/> : <Link className={styles["text-placeholder"]} href={data?.goTo}>{data?.linkName}</Link>}
    </motion.li>
  );
};
