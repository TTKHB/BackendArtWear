import React, { useState, useEffect } from "react";
import { Text, TouchableWithoutFeedback, View } from "react-native";
import styles from "./styles";
import AntIcon from "react-native-vector-icons/AntDesign";
import FontistoIcon from "react-native-vector-icons/Fontisto";
import Ionicons from "react-native-vector-icons/Ionicons";
import FontAwesome from "react-native-vector-icons/FontAwesome";

const Footer = ({ likeCount: likeCountProp, caption, postedAt }) => {

    const [isLike, seiIsLike] = useState(false);
    const [likeCount, setLikeCount] = useState(0);

    const onLikePressed = () => {
        const amount = isLike ? -1 : 1;
        setLikeCount(likeCount + amount);
        seiIsLike(!isLike);
    }

    useEffect(() => {
        setLikeCount(likeCountProp)
    }, [])

    return (
        <View style={styles.container}>
            <View style={styles.iconContainer}>
                <View style={styles.leftIcons}>
                    <TouchableWithoutFeedback onPress={onLikePressed}>
                        {isLike ?
                            <AntIcon name="heart" size={25} color={"#c30000"} />
                            : <AntIcon name="hearto" size={25} color={"#545454"} />
                        }
                    </TouchableWithoutFeedback>
                    <FontistoIcon name="comment" size={23} color={"#545454"} />
                    <Ionicons name="paper-plane-outline" size={25} color={"#545454"} />
                </View>

                <FontAwesome name="bookmark-o" size={25} color={"#545454"} />
            </View>
            <Text style={styles.like}>{likeCount} Likes</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
                <Text style={styles.caption}>{caption}</Text>
                <Text style={styles.postedAt}>{postedAt}</Text>
            </View>

        </View>
    )
}
export default Footer;