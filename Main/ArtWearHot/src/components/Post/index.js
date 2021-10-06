import React from "react";
import { View } from "react-native";
import Body from "./components/Body";
import Footer from "./components/Footer";
import Header from "./components/Header";

const Post = ({ post }) => (
    <View>
        <Header imageUri={post.user.imageUri} name={post.user.name} />
        <Body imageUri={post.imageUri} />
        <Footer likeCount={post.likeCount}
            caption={post.caption}
            postedAt={post.postedAt}
        />
    </View>
)
export default Post;