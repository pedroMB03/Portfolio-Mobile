import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Sobre() {
  return (
    <ScrollView style={style.container}>
      <View style={style.apresentacao}>
        <Text>Pagina de informações</Text>
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
});
