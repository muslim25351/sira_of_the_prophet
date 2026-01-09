import { Tabs } from "expo-router";
import { Platform } from "react-native";

import { IconSymbol } from "@/components/ui/icon-symbol";

export default function TabsLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,

        tabBarActiveTintColor: "#22c55e", // appGreen
        tabBarInactiveTintColor: "#9ca3af", // appMuted

        tabBarStyle: {
          backgroundColor: "#132b1e", // appCard
          borderTopWidth: 0,
          height: 70,
          position: "absolute",
          bottom: 16,
          left: 16,
          right: 16,
          borderRadius: 20,
          paddingTop: 8,
          paddingBottom: Platform.OS === "ios" ? 14 : 10,
          elevation: 0,
        },

        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: "500",
        },
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          tabBarIcon: ({ color }) => (
            <IconSymbol name="house.fill" color={color} size={22} />
          ),
        }}
      />

      <Tabs.Screen
        name="player"
        options={{
          title: "Player",
          tabBarIcon: ({ color }) => (
            <IconSymbol name="play.circle.fill" color={color} size={26} />
          ),
        }}
      />

      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ color }) => (
            <IconSymbol name="gearshape.fill" color={color} size={22} />
          ),
        }}
      />
    </Tabs>
  );
}
