import { createContext } from "react"
import { popupContextType } from "./popup.types"
import { popupInitialState } from "./popup-initial-state"

export const PopupContext = createContext<popupContextType>({
    state: popupInitialState,
    dispatch: () => {}
})
