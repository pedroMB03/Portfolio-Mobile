import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView style={style.container}>
      <View style={style.apresentacao}>
        <Text style={style.Titulo}>Bem vindo!</Text>
        <Text style={style.Paragrafo}>
          Aqui você encontrará informações sobre minha experiência acadêmica,
          profissional, projetos desenvolvidos e um pequeno jogo interativo.
        </Text>
      </View>
      <View style={style.apresentacao}>
        <Text style={style.Titulo}>Sobre o app</Text>
        <Text style={style.Paragrafo}>
          Esse aplicativo foi desenvolvido por mim e como um projeto para a
          cadeira de Programção Web-Mobile, lecionada pelo Professor Márcio
          Bueno!
        </Text>
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
  Paragrafo: {
    fontSize: 16,
    color: "white",
    textAlign: "justify",
    flex: 1,
  },
  conteudo: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: 10,
  },
});
