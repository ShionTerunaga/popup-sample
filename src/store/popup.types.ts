import { Dispatch, ReactNode } from "react"

type noneChildren = {
    isShow: boolean
}

type hasChildren = {
    isShow: boolean
    children: ReactNode
}

export type popupState = noneChildren | hasChildren

export type popupAction = {
    type: "show" | "hide"
    children?: ReactNode
}

export type popupContextType = {
    state: popupState
    dispatch: Dispatch<popupAction>
}
