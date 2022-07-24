import React from 'react';

import styles from "./Header.module.scss";
import logo from "../../img/post-baby-mates-logo.png";

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <img src = {logo} alt = "Post-baby-mates logo"/>
    </header>
  );
}
