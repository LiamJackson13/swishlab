import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, useColorScheme } from "react-native";
import UserOnly from "../../components/auth/UserOnly";
import { Colors } from "../../constants/Colors";

const TabsLayout = () => {
  const colorScheme = useColorScheme();
  const theme = Colors[colorScheme] ?? Colors.light;

  return (
    <UserOnly>
      <StatusBar style="auto" />
      <Tabs
        screenOptions={{
          headerShown: false,
          headerStyle: { backgroundColor: theme.navBackground },
          headerTintColor: theme.title,
          tabBarActiveTintColor: theme.iconColorFocused,
          tabBarInactiveTintColor: theme.iconColor,
          tabBarStyle: {
            backgroundColor: theme.navBackground,
            paddingTop: 10,
            height: 90,
          },
        }}
      >
        <Tabs.Screen
          name="home"
          options={{
            title: "Home",
            tabBarIcon: ({ focused, color }) => (
              <Ionicons
                name={focused ? "home" : "home-outline"}
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="train"
          options={{
            title: "Train",
            tabBarIcon: ({ focused, color }) => (
              <Ionicons
                name={focused ? "basketball" : "basketball-outline"}
                size={24}
                color={color}
              />
            ),
          }}
        />
        <Tabs.Screen
          name="profile"
          options={{
            title: "Profile",
            tabBarIcon: ({ focused, color }) => (
              <Ionicons
                name={focused ? "person" : "person-outline"}
                size={24}
                color={color}
              />
            ),
          }}
        />
      </Tabs>
    </UserOnly>
  );
};

export default TabsLayout;

const styles = StyleSheet.create({});
