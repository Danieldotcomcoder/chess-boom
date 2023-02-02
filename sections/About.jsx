'use client';

import { motion } from 'framer-motion';
import { TypingText } from '../components';
import styles from '../styles';
import { fadeIn, staggerContainer } from '../utils/motion';

const About = () => (
  <section className={`${styles.paddings} relative z-10`}>
    <div className="gradient-02 z-0" />
    <motion.div
      variants={staggerContainer}
      initial="hidden"
      whileInView="show"
      viewport={{ once: false, amount: 0.25 }}
      className={`${styles.innerWidth} mx-auto ${styles.flexCenter} flex-col`}
    >
      <TypingText title="| About Chess" textStyles="text-center" />
      <motion.p
        variants={fadeIn('up', 'tween', 0.2, 1)}
        className="mt-[8px] font-normal sm:text-[32px] text-center text-secondary-white"
      >
        <span className="font-extrabold text-white"> Chess</span> is a board game between two players. It is sometimes called
        <span className="font-extrabold text-white">
          {' '}
          international chess or Western chess
        </span>{' '}to distinguish it from related games,
        such as
        <span className="font-extrabold text-white"> xiangqi (Chinese chess) and shogi (Japanese chess).</span> The current form  of the game emerged in Spain and the rest of Southern Europe during the second half of the 15th century, after evolving from
        <span className="font-extrabold text-white"> chaturanga </span>   a similar but much older game of Indian origin. Today, chess is one of the world's most popular games, played by millions of people worldwide.
      </motion.p>
      <motion.img
        variants={fadeIn('up', 'tween', 0.3, 1)}
        src="/arrow-down.svg"
        alt="arrow down"
        className="w-[18px] h-[28px] object-contain mt-[28px]"
      />
    </motion.div>
  </section>
);

export default About;
