import React from "react";
import { FlatList, View } from "react-native";
import styles from "./styles";
import Story from "../Story";

const data = [
    {
        imageUri: 'https://mfiles.alphacoders.com/640/640435.jpg',
        name: 'Danies1',
    }, {
        imageUri: 'https://afamilycdn.com/150157425591193600/2021/9/28/2391844204307082782389062332922196710878383n-1632802457549309170777.jpg',
        name: 'Danies2',
    }, {
        imageUri: 'https://assets.vogue.com/photos/61461ca0a0a3f0de76c0ad29/master/w_1280%2Cc_limit/00001-KNWLS-Spring-22-RTW-London-credit-gorunway.jpg',
        name: 'Danies3',
    }, {
        imageUri: 'https://kenh14cdn.com/2019/10/1/b7-1569942053146857120959.jpg',
        name: 'Danies4',
    }, {
        imageUri: 'https://mfiles.alphacoders.com/640/640435.jpg',
        name: 'Danies5',
    }, {
        imageUri: 'https://afamilycdn.com/150157425591193600/2021/9/28/2391844204307082782389062332922196710878383n-1632802457549309170777.jpg',
        name: 'Danies6',
    }, {
        imageUri: 'https://assets.vogue.com/photos/61461ca0a0a3f0de76c0ad29/master/w_1280%2Cc_limit/00001-KNWLS-Spring-22-RTW-London-credit-gorunway.jpg',
        name: 'Danies7',
    }, {
        imageUri: 'https://kenh14cdn.com/2019/10/1/b7-1569942053146857120959.jpg',
        name: 'Danies8',
    }, 
]

const Stories = () => {


    return(
        <FlatList
        data={data}
        keyExtractor={({ name }) => name}
        horizontal
        style={styles.container}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }) => <Story imageUri={item.imageUri} name={item.name} />}
    />
    )
}
export default Stories;