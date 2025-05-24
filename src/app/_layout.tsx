import React from "react";
import { Tabs } from "expo-router";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import Ionicons from "@expo/vector-icons/Ionicons";
import Entypo from "@expo/vector-icons/Entypo";

export default function RootLayout() {
  return (
    <React.Fragment>
      <Tabs
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#314b6e",
          },
          headerTintColor: "white",
          headerTitleStyle: {
            fontWeight: "600",
            fontSize: 18,
          },
          tabBarStyle: {
            backgroundColor: "#FFFFFF",
            borderTopWidth: 0,
            height: 60,
            paddingBottom: 5,
            elevation: 10,
          },
          tabBarActiveTintColor: "#1E40AF",
          tabBarInactiveTintColor: "#64748B",
          tabBarLabelStyle: {
            fontSize: 12,
            fontWeight: "600",
            marginTop: -3,
          },
          tabBarIconStyle: {
            marginTop: 5,
          },
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
            title: "Exp. Academica",
          }}
        />
        <Tabs.Screen
          name="jogo"
          options={{
            tabBarIcon: () => <Entypo name="game-controller" size={24} />,
            title: "Jogo",
          }}
        />
      </Tabs>
    </React.Fragment>
  );
}
