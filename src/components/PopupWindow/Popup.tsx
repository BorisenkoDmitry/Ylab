import styles from "./Popup.module.css";
import { IPopup } from "./Popup.interface";
import { FC } from "react";

export const Popup: FC<IPopup> = ({ children }) => {
  return (
    <div className={styles.popupWrapper}>
      <div className={styles.popup}>{children}</div>
    </div>
  );
};
