import { Dispatch, ReactNode } from "react"

type closeState = {
    isShow: false
}

type openState = {
    isShow: true
    children: ReactNode
}

export type popupState = closeState | openState

type closeAction = {
    type: "hide"
}

type openAction = {
    type: "show"
    children: ReactNode
}

export type popupAction = closeAction | openAction

export type popupContextType = {
    state: popupState
    dispatch: Dispatch<popupAction>
}
