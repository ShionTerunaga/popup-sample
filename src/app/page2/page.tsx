import { PopupOpenButton } from "@/components/popup-open-button"
import { Sample2 } from "@/contents/sample2"
import styles from "../styles.css"
import Link from "next/link"

const Page2 = () => {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>ページ2</h1>
            <PopupOpenButton hasButton>
                <Sample2 />
            </PopupOpenButton>
            <br />
            <Link href="/">ページ1へ</Link>
        </div>
    )
}

export default Page2
