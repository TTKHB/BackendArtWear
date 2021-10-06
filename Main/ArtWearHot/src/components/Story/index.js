import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import ProfilePicture from "../ProfilePicture";
import styles from "./styles";

const Story = ({ imageUri, name }) => (
    // const onPress = () => {
    //     console.log(`${name} User story pressed`);
    // }
    <TouchableOpacity style={styles.container} >
            <ProfilePicture uri={imageUri} />
            <Text style={styles.name}>{name}</Text>
    </TouchableOpacity>
)
export default Story;