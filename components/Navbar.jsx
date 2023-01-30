'use client';

import { motion } from 'framer-motion';
import styles from '../styles';
import { navVariants } from '../utils/motion';

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="initial"
    whileInview="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
    navbar
  </motion.nav>
);

export default Navbar;
