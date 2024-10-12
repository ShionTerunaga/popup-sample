import { popupAction, popupState } from "./popup.types"

export const popupReducer = (
    popupState: popupState,
    popupAction: popupAction
): popupState => {
    switch (popupAction.type) {
        case "hide":
            return {
                isShow: false
            }
        case "show":
            return {
                isShow: true,
                children: popupAction.children
            }
        default:
            return {
                ...popupState
            }
    }
}
