import { StyleSheet, Dimensions } from "react-native";

const styles = StyleSheet.create({
    image: {
        width: Dimensions.get('window').width/1.1,
        height: Dimensions.get('window').height,
        // marginHorizontal: 50,
        borderRadius: 10,
    },
    
});
export default styles;