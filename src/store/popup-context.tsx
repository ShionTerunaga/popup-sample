"use client"

import { createContext, ReactNode, useContext, useReducer } from "react"
import { popupContextType } from "./popup.types"
import { popupInitialState } from "./popup-initial-state"
import { popupReducer } from "./popup-reducer"
import PopupLayout from "@/layout/popup-layout"
import { createResult, Result, RESULT_ERROR } from "@/utils/global.typs"

export const PopupContext = createContext<Result<popupContextType>>(
    createResult.err("Providerを下で定義してください")
)

interface Props {
    children: ReactNode
}

export function PopupProvider({ children }: Props) {
    const [state, dispatch] = useReducer(popupReducer, popupInitialState)

    const result = createResult.ok({ state, dispatch })

    return (
        <PopupContext value={result}>
            <PopupLayout />
            {children}
        </PopupContext>
    )
}

export function usePopupContext() {
    const context = useContext(PopupContext)

    if (context.kind === RESULT_ERROR) {
        throw context.kind
    }

    const state = context.value.state
    const dispatch = context.value.dispatch

    return { state, dispatch }
}
