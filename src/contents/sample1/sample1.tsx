import styles from "./style.css"

export const Sample1 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.box}>
                <h1>サンプル1</h1>
                <p className={styles.text}>
                    これはサンプル1のポップアップです。
                </p>
            </div>
        </div>
    )
}
