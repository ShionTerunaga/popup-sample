"use client"

import { PopupContext } from "@/store/popup-context"
import { popupInitialState } from "@/store/popup-initial-state"
import { popupReducer } from "@/store/popup-reducer"
import { ReactNode, useReducer } from "react"
import PopupLayout from "./layout/popup-layout"

interface props {
    children: ReactNode
}

export const PopupProvider = (props: props) => {
    const [state, dispatch] = useReducer(popupReducer, popupInitialState)

    return (
        <PopupContext.Provider value={{ state, dispatch }}>
            <PopupLayout />
            {props.children}
        </PopupContext.Provider>
    )
}
