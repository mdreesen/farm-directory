import { Footer } from 'components/Footer';
import { Navigation } from 'components/Navigation';
import { ReactNode } from 'react';

import styles from '../styles/ScrollProgress.module.css';

import { motion, useScroll } from "framer-motion";


export function Layout({ children }: { children: ReactNode }) {
  const { scrollYProgress } = useScroll();

  return (
    <>
      <Navigation />
      <motion.div className={styles['scrollProgress']} style={{ scaleY: scrollYProgress }} />

      <main>{children}</main>
      <Footer />
    </>
  );
}
