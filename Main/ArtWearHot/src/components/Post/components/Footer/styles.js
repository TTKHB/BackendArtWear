import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    container: {
        margin: 5,
    },
    iconContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 5,
    },

    leftIcons: {
        flexDirection: 'row',
        width: 120,
        justifyContent: 'space-between'
    },

    like: {
        fontWeight: 'bold',
        margin: 3
    },
    caption: {
        margin: 3,
    },
    postedAt: {
        color: '#8c8c8c',
        margin: 3,
        marginBottom: 15
    }
});
export default styles;