import React from 'react';
import Actions from './Actions';
import Colors from './Colors';
import styles from './Footer.module.css';
import Remaining from './Remaining';
import Status from './Status';

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
