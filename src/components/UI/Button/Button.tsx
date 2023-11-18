import { FC } from 'react';
import styles from './Button.module.css';
import { IButton } from './Button.interface';
import { ClipLoader } from 'react-spinners';


export const Button: FC<IButton> = ({children, loading}) => {
  return (
    <button className={styles.button}>
        {loading && <div className={styles.icone}><ClipLoader size={20} color="#f1f1f1" /></div>}
        {children}
    </button>
  )
}