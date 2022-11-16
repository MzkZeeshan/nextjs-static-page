import React, { FC, ReactNode } from "react";
import styles from './Collapsable.module.css';

type CollapsableProps = { title: ReactNode ; content: ReactNode };

const Collapsable: FC<CollapsableProps> = ({ title, content }) => {
  return (
    <details className={styles.details}>
      <summary className={styles.summary}>{title}</summary>
      <p>{content}</p>
    </details>
  );
};

export default Collapsable;
