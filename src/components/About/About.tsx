import React from "react";

import styles from "./About.module.scss";

export default function About(): JSX.Element {
  return (
    <div className={styles.about}>
      <h2 className="invisible-but-outline-readable">About</h2>
      <p>Hello Friends!</p>
      <p>
        We’d love to offer you our meal prep services to help take a bit of
        stress off your shoulders. These recipes are all staples in our home,
        are generally healthy and packed with veggies, and most importantly,
        they arrive frozen and reheat well.
      </p>

      <p>
        Please feel free to request ingredient substitutions or removals or any
        other customizations! All grains and grain-containing products will be
        carefully scrutinized for folic acid.
      </p>
    </div>
  );
}
