import { PopupContext } from "@/store/popup-context"
import { ReactNode, useContext } from "react"

export const usePopup = () => {
    const { state, dispatch } = useContext(PopupContext)

    /** popupを閉じる */
    const closePopup = () => {
        dispatch({
            type: "hide"
        })
    }

    /** 時間で閉じるpopupを開く */
    const openPopupClosingInTime = (children: ReactNode, ms?: number) => {
        const timer: number = ms || 3000

        dispatch({
            type: "show",
            children: children
        })

        setTimeout(() => {
            closePopup()
        }, timer)
    }

    /** クローズボタンを押さないと閉じないpopupを開く */
    const openPopupClosingInButton = (children: ReactNode) => {
        dispatch({
            type: "show",
            children: children
        })
    }

    return {
        state,
        openPopupClosingInTime,
        openPopupClosingInButton,
        closePopup
    }
}
