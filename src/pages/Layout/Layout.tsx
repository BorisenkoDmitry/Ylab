import { FC } from "react";

interface ILayout {
    children: React.ReactNode
}

export const Layout: FC<ILayout> = ({children}) => {
    return (
        <div>
            {children}
        </div>
    )
}