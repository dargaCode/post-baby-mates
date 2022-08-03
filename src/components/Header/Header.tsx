import React from "react";

import styles from "./Header.module.scss";
import logo from "../../img/post-baby-mates-logo.png";

export default function Header(): JSX.Element {
  return (
    <header className={styles.header}>
      <h1 className="invisible-but-outline-readable">Post-Baby-Mates</h1>
      <img src={logo} className={styles.logo} alt="Post-baby-mates logo" />
    </header>
  );
}
