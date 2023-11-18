import styles from "./ButtonEye.module.css";
import { IButtonEye } from "./ButtonEye.interface";
import { FC } from "react";
import { IoIosEye, IoIosEyeOff } from "react-icons/io";

export const ButtonEye: FC<IButtonEye> = ({ onClick, turnOff }) => {
  return (
    <button type="button" onClick={onClick} className={styles.ButtonEye}>
      {turnOff ? <IoIosEyeOff /> : <IoIosEye />}
    </button>
  );
};
