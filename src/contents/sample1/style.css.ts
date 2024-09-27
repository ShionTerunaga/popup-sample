import { style } from "@vanilla-extract/css"

const styles = {
    container: style({
        width: "100%",
        height: "100%"
    }),
    box: style({
        width: "80%",
        margin: "50px auto",
        textAlign: "center"
    }),
    text: style({
        marginTop: 10
    })
}

export default styles
