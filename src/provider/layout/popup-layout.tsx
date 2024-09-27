"use client"

import { usePopup } from "@/hooks/popup"
import styles from "./style.css"
import { AnimatePresence, motion } from "framer-motion"

const PopupLayout = () => {
    const { state } = usePopup()

    return (
        <AnimatePresence>
            {state.isShow && (
                <div className={styles.container}>
                    <motion.div
                        className={styles.box}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {state.children}
                    </motion.div>
                </div>
            )}
        </AnimatePresence>
    )
}

export default PopupLayout
