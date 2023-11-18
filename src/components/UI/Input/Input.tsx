import { FC, useState } from "react";
import styles from "./Input.module.css";
import { IInput } from "./Input.interface";
import { ButtonEye } from "./ButtonEye/ButtonEye";

export const Input: FC<IInput> = ({ register, label, type, placeholder, error }) => {
  const [turnOff, setTurnOff] = useState(false);

  if (label) {
    return (
      <label className={styles.label}>
        <span className={styles.labelText}>{label}</span>
        <div className={styles.inputWrapper}>
          <input
            {...register}
            className={error ? styles.input + ` ${styles.inputActive}` : styles.input}
            type={!turnOff ? type : "text"}
            placeholder={placeholder}
          />
          {type === "password" && (
            <ButtonEye onClick={() => setTurnOff(!turnOff)} turnOff={turnOff} />
          )}
        </div>
      </label>
    );
  } else {
    return (
      <div className={styles.inputWrapper}>
        <input
          {...register}
          className={error ? styles.input + ` ${styles.inputActive}` : styles.input}
          type={!turnOff ? type : "text"}
          placeholder={placeholder}
        />
        {type === "password" && <ButtonEye turnOff={true} />}
      </div>
    );
  }
};
