import React from "react";

import { GitHub, Linkedin } from "react-feather";

import styles from "./IconLinks.module.css";

const IconLinks = () => {
  return (
    <div className={styles.container}>
      <a
        className={styles.icon}
        href="https://www.linkedin.com/in/bhavit-wadhwa/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Linkedin color="#faf7f6" size={28} strokeWidth="0.75px" />
      </a>

      <a
        className={styles.icon}
        href="https://github.com/wa-bha"
        target="_blank"
        rel="noopener noreferrer"
      >
        <GitHub color="#faf7f6" size={28} strokeWidth="0.75px" />
      </a>
    </div>
  );
};

export default IconLinks;
