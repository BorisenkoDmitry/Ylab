import { FC } from "react"
import styles from './ErrorText.module.css'

interface IErrorText {
    children: React.ReactNode
}

export const ErrorText: FC<IErrorText> = ({children}) => {
    return (
        <span className={styles.error}>{children}</span>
    )
}