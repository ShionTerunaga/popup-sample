import { PopupCloseButton } from "@/components/popup-close-button"
import styles from "./style.css"

export const Sample2 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <h1>サンプル2</h1>
                <p className={styles.text}>
                    これはサンプル2のポップアップです。
                </p>
                <div>
                    <PopupCloseButton />
                </div>
            </div>
        </div>
    )
}
