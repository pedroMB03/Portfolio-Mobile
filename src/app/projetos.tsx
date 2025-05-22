import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Projetos() {
  return (
    <ScrollView style={style.container}>
      <View style={style.apresentacao}>
        <Text style={style.Titulo}>Meus projetos</Text>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#8197ac",
    flex: 1,
    padding: 15,
  },
  apresentacao: {
    flexDirection: "column",
    backgroundColor: "#314b6e",
    padding: 20,
    borderRadius: 20,
    marginVertical: 10,
    alignItems: "center",
    gap: 20,
  },
  Titulo: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: "white",
  },
});
