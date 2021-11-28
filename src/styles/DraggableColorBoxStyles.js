import sizes from "./sizes";

const styles = {
    root: {
        width: "20%",
        height: "25%",
        margin: "0",
        display: "inline-block",
        position: "relative",
        cursor: "pointer",
        marginBottom: "-6px",
        "&:hover svg": {
            color: "white",
            transform: "scale(1.5)"
        },
        [sizes.down("lg")]: {
            width: "25%",
            height: "9rem"
        },
        [sizes.down("md")]: {
            width: "50%",
            height: "6rem"
        },
        [sizes.down("sm")]: {
            width: "100%",
            height: "3rem"
        }
    },
    boxContent: {
        position: "absolute",
        width: "100%",
        left: "0px",
        bottom: " 0px",
        padding: "10px",
        color: "rgba(0,0,0,0.5)",
        letterSpacing: "1px",
        textTransform: "uppercase",
        fontSize: "12px",
        display: "flex",
        justifyContent: "space-between"
    },
    deleteIcon: {
        transition: "all 0.3s ease-in-out"
    }
};

export default styles;