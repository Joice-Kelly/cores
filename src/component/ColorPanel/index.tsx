import React from "react";
import styles from "./styles.module.css";

type Props = {
  red: number;
  green: number;
  blue: number;
  alpha: number;
};

const ColorPanel: React.FC<Props> = ({ red, green, blue, alpha }) => {
  const color = `rgba(${red}, ${green}, ${blue}, ${alpha})`;

  return (
    <div
      data-cy="panel"
      className={styles.colorPanel}
      style={{ backgroundColor: color }}
    />
  );
};

export default ColorPanel;
