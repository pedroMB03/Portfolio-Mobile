import React from "react";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";

export default function RootLayout() {
  return (
    <React.Fragment>
      <Tabs
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#314b6e",
          },
          headerTintColor: "#bcb3a2",
          tabBarStyle: {
            backgroundColor: "#314b6e",
          },
          tabBarActiveTintColor: "#bcb3a2",
          tabBarInactiveTintColor: "white",
        }}
      >
        <Tabs.Screen
          name="index"
          options={{
            tabBarIcon: () => <FontAwesome name="home" size={24} />,
            title: "Home",
          }}
        />
        <Tabs.Screen
          name="sobre"
          options={{
            tabBarIcon: () => <FontAwesome name="info-circle" size={24} />,
            title: "Sobre",
          }}
        />
        <Tabs.Screen
          name="projetos"
          options={{
            tabBarIcon: () => <FontAwesome name="folder" size={24} />,
            title: "Projetos",
          }}
        />
        <Tabs.Screen
          name="experiencia-acad"
          options={{
            tabBarIcon: () => <FontAwesome name="book" size={24} />,
            title: "Academicos",
          }}
        />
        <Tabs.Screen
          name="experiencia-prof"
          options={{
            tabBarIcon: () => <Ionicons name="business" size={24} />,
            title: "Profissional",
          }}
        />
      </Tabs>
    </React.Fragment>
  );
}
