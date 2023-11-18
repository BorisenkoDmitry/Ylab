import { FC } from "react";
import styles from './Header.module.css';

interface IHeader {
    children?: React.ReactNode
}

export const Header: FC<IHeader> = () => {
    return (
        <header className={styles.header}>   
            ^-_-^
        </header>
    )
}