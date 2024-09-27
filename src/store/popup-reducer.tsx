import { popupAction, popupState } from "./popup.types"

export const popupReducer = (
    popupState: popupState,
    popupAction: popupAction
): popupState => {
    switch (popupAction.type) {
        case "show":
            return {
                isShow: true,
                children: popupAction.children
            }
        case "hide":
            return {
                isShow: false
            }
        default:
            return {
                ...popupState
            }
    }
}
