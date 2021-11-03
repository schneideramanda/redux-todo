import React from 'react';
import Actions from './Actions';
import Colors from './Colors';
import Remaining from './Remaining';
import Status from './Status';
import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <Actions />
      <Remaining />
      <Status />
      <Colors />
    </footer>
  );
};

export default Footer;
