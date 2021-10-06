import React from "react";
import { FlatList } from "react-native";
import Stories from "../Stories";
import Post from "../Post";


const data = [
    {
        id: '1',
        user: {
            imageUri: 'https://mfiles.alphacoders.com/640/640435.jpg',
            name: 'ArtWaer'
        },
        imageUri: 'https://mfiles.alphacoders.com/640/640435.jpg',
        caption: 'Welcome to City #ArtWaer',
        likeCount: 10,
        postedAt: '6 min ago'
    }, {
        id: '2',
        user: {
            imageUri: 'https://afamilycdn.com/150157425591193600/2021/9/28/2391844204307082782389062332922196710878383n-1632802457549309170777.jpg',
            name: 'ArtWaer'
        },
        imageUri: 'https://afamilycdn.com/150157425591193600/2021/9/28/2391844204307082782389062332922196710878383n-1632802457549309170777.jpg',
        caption: 'Fashion in the summer #ArtWaer',
        likeCount: 100,
        postedAt: '6 min ago'
    }, {
        id: '3',
        user: {
            imageUri: 'https://assets.vogue.com/photos/61461ca0a0a3f0de76c0ad29/master/w_1280%2Cc_limit/00001-KNWLS-Spring-22-RTW-London-credit-gorunway.jpg',
            name: 'ArtWaer'
        },
        imageUri: 'https://assets.vogue.com/photos/61461ca0a0a3f0de76c0ad29/master/w_1280%2Cc_limit/00001-KNWLS-Spring-22-RTW-London-credit-gorunway.jpg',
        caption: 'Fashion in the summer #ArtWaer',
        likeCount: 13,
        postedAt: '6 min ago'
    }, {
        id: '4',
        user: {
            imageUri: 'https://kenh14cdn.com/2019/10/1/b7-1569942053146857120959.jpg',
            name: 'ArtWaer'
        },
        imageUri: 'https://kenh14cdn.com/2019/10/1/b7-1569942053146857120959.jpg',
        caption: "Idol's fashion #ArtWaer",
        likeCount: 23,
        postedAt: '6 min ago'
    },

]

const Feed = () => (
    <FlatList
        data={data}
        keyExtractor={({ id }) => id}
        ListHeaderComponent={Stories}
        renderItem={({ item }) => <Post post={item} />}
    />
)

export default Feed;