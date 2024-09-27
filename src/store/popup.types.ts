import { Dispatch, ReactNode } from "react"

export type popupState = {
    isShow: boolean
    children?: ReactNode
}

export type popupAction = {
    type: "show" | "hide"
    children?: ReactNode
}

export type popupContextType = {
    state: popupState
    dispatch: Dispatch<popupAction>
}
