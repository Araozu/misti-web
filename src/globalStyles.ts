import { StyleSheet } from "aphrodite/no-important";

export const globalStyles = StyleSheet.create({
    padded: {
        paddingLeft: "4rem",
        paddingRight: "4rem",
        "@media (max-width: 800px)": {
            paddingLeft: "1rem",
            paddingRight: "1rem",
        },
    },
});

