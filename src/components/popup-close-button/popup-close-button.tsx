"use client"

import { usePopup } from "@/hooks/popup"
import styles from "./style.css"

export const PopupCloseButton = () => {
    const { closePopup } = usePopup()

    return (
        <button onClick={closePopup} className={styles.button}>
            閉じる
        </button>
    )
}
