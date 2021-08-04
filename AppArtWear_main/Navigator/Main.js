import React from 'react';
import {View, Text} from 'react-native';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';
import {createStackNavigator} from '@react-navigation/stack';

//screens
import ProfileScreen from '../Screens/Profile/ProfileScreen';
import EditProfileScreen from '../Screens/Profile/EditProfileScreen';

//Navigator
import HomeNavigator from './HomeNavigator';
import CartNavigator from './CartNavigator';
import ProfileNavigator from './ProfileNavigator';

//stack
const Tab = createBottomTabNavigator();
const ProfileStack = createStackNavigator();
const Main = props => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        keyboardHidesTabBar: true,
        showLabel: false,
        activeTintColor: '#e91e63',
      }}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarIcon: ({color}) => <Icon name="home" color={color} size={30} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Cart"
        component={CartNavigator}
        options={{
          tabBarIcon: ({color}) => (
            <Icon name="shopping-cart" color={color} size={30} />
          ),
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileStackScreen}
        options={{
          tabBarIcon: ({color}) => <Icon name="user" color={color} size={30} />,
          headerShown: false,
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;






//profile

const ProfileStackScreen = ({navigation}) => {
  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: '#EEEEEE',
          elevation: 0, // Android
        },
      }}>
      <ProfileStack.Screen
        name="Profile"
        component={ProfileScreen}
         options={{
          title: '',
          headerLeft: () => (
            <View style={{marginLeft:305}}>
              <MaterialCommunityIcons
                name="account-edit"
                size={40}
                onPress={() => navigation.navigate("EditProfile")}
              />
            </View>
          ),
          headerRight: (navigation) => (
            <View style={{marginRight: 20}}>
              <MaterialCommunityIcons
                name="cart-outline"
                size={25}
                color={'black'}
                onPress={() => navigation.navigate('')}
              />
            </View>
          ),
        }}
      />
      <ProfileStack.Screen
        name="EditProfile"
        options={{
          title: 'Chỉnh sửa hồ sơ',
        }}
        component={EditProfileScreen}
      />
    </ProfileStack.Navigator>
  );
};
