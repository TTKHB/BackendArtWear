import * as React from 'react';
import { ScrollView, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { Appbar } from 'react-native-paper';
import TabbedViewPager from 'react-native-tabbed-view-pager-android';

function WaitForPayScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Chờ thanh toán!</Text>
        </View>
    );
}

function CargoHandlingScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Xử lý hàng!</Text>
        </View>
    );
}

function ShippingScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Đang chuyển hàng!</Text>
        </View>
    );
}

function RateScreen() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text>Đánh giá!</Text>
        </View>
    );
}

const Tab = createMaterialTopTabNavigator();

function MyOrderScreen() {
    return (
        <View style={{ flex: 1 }}>
            <Appbar.Header style={{ backgroundColor: 'transparent' }}>
                <Appbar.BackAction />
                <Appbar.Content screenOptions={{ backgroundColor: '#ffffff', justifyContent: 'center', alignItems: 'center' }} title="Đơn mua" />
                <Appbar.Action icon="magnify" />
                <Appbar.Action icon="shopping" />
            </Appbar.Header>



            <NavigationContainer>
                <Tab.Navigator
                    initialRouteName="WaitForPay"
                    screenOptions={{
                        tabBarActiveTintColor: '#000000',
                        tabBarLabelStyle: { fontSize: 14 },
                        tabBarStyle: { backgroundColor: '#ffffff' },
                    }}
                >
                    <Tab.Screen
                        name="WaitForPay"
                        component={WaitForPayScreen}
                        options={{ tabBarLabel: 'Chờ thanh toán' }}
                    />
                    <Tab.Screen
                        name="CargoHandling"
                        component={CargoHandlingScreen}
                        options={{ tabBarLabel: 'Xử lí hàng' }}
                    />
                    <Tab.Screen
                        name="Shipping"
                        component={ShippingScreen}
                        options={{ tabBarLabel: 'Đang vận chuyển' }}
                    />
                    <Tab.Screen
                        name="Rate"
                        component={RateScreen}
                        options={{ tabBarLabel: 'Đánh Giá' }}
                    />
                </Tab.Navigator>
            </NavigationContainer>


        </View>
    );
}
export default MyOrderScreen;
