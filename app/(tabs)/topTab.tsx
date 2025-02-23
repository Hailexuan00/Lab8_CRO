import React from 'react';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import { View, Text } from 'react-native';

const Tab = createMaterialTopTabNavigator();

function Screen1() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Tab 1 Content</Text>
        </View>
    );
}

function Screen2() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Tab 2 Content</Text>
        </View>
    );
}
function Screen3() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontSize: 18, fontWeight: 'bold' }}>Tab 3 Content</Text>
        </View>
    );
}

export default function TopTabs() {
    return (
        <Tab.Navigator
            screenOptions={{
                tabBarActiveTintColor: '#FF6C22', // Màu chữ tab khi được chọn
                tabBarInactiveTintColor: '#888', // Màu chữ tab khi chưa chọn
                tabBarIndicatorStyle: { 
                    backgroundColor: '#FF6C22', // Màu đường kẻ cam dưới tab
                    height: 4, // Độ dày đường kẻ
                },
                tabBarLabelStyle: { 
                    fontSize: 16, 
                    fontWeight: 'bold', 
                    textTransform: 'none' // Giữ nguyên chữ, không viết hoa
                },
                tabBarStyle: { 
                    backgroundColor: 'white', 
                    elevation: 4, // Bóng đổ trên Android
                    shadowOpacity: 0.2, // Bóng trên iOS
                    height: 60, // Độ cao thanh tab
                    paddingTop: 20,
                },
            }}
        >
            <Tab.Screen name="Tab 1" component={Screen1} />
            <Tab.Screen name="Tab 2" component={Screen2} />
            <Tab.Screen name="Tab 3" component={Screen3} />
        </Tab.Navigator>
    );
}
