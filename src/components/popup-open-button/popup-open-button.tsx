"use client"

import { usePopup } from "@/hooks/popup"
import { ReactNode } from "react"
import styles from "./style.css"

interface props {
    hasButton?: boolean
    children: ReactNode
}

export const PopupOpenButton = (props: props) => {
    const { hasButton = false } = props
    const { openPopupClosingInButton, openPopupClosingInTime } = usePopup()

    const handleClick = () => {
        if (hasButton) {
            openPopupClosingInButton(props.children)
        } else {
            openPopupClosingInTime(props.children)
        }
    }

    return (
        <button className={styles.button} onClick={handleClick}>
            開く
        </button>
    )
}
