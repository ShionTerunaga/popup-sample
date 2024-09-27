import { PopupOpenButton } from "@/components/popup-open-button"
import styles from "./styles.css"
import { Sample1 } from "@/contents/sample1"
import Link from "next/link"

export default function Home() {
    return (
        <div className={styles.container}>
            <h1 className={styles.heading}>ページ1</h1>
            <PopupOpenButton>
                <Sample1 />
            </PopupOpenButton>
            <br />
            <Link href="/page2">ページ2へ</Link>
        </div>
    )
}
