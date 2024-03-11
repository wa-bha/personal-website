import React from "react";

import GraphemeSplitter from "grapheme-splitter";
import { TypeAnimation } from "react-type-animation";

import IconLinks from "./components/IconLinks";
import styles from "./HomePage.module.css";

const HomePage = () => {
  const splitter = new GraphemeSplitter();

  return (
    <div className={styles.homePage}>
      <a
        className={styles.homePageNameHeading}
        href="https://en.wikipedia.org/wiki/Flat_white"
        target="_blank"
        rel="noopener noreferrer"
      >
        Bhavit Wadhwa
      </a>

      <div className={styles.typeContainer}>
        <TypeAnimation
          className={styles.type}
          splitter={(str) => splitter.splitGraphemes(str)}
          sequence={[
            "I can turn caffeine ☕ into code.",
            5000,
            "I'm learning how to 🏂 snowboard",
            2000,
            "and I find joy in being out 🥾 hiking.",
            5000,
          ]}
          wrapper="span"
          speed={40}
          deletionSpeed={30}
          style={{
            fontSize: "1.5rem",
            display: "inline-block",
            lineHeight: "2rem",
          }}
          repeat={Infinity}
        />
      </div>

      <IconLinks />
    </div>
  );
};

export default HomePage;
