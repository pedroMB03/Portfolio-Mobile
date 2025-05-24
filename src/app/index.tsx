import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

export default function Index() {
  return (
    <ScrollView
      style={style.container}
      contentContainerStyle={style.scrollContent}
    >
      <View style={style.apresentacao}>
        <Text style={style.Titulo}>Bem-vindo!</Text>
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

      <View style={style.apresentacao}>
        <Text style={style.Titulo}>Bulls and Cows</Text>
        <Text style={style.Paragrafo}>
          Dentro desse aplicativo, foi criado um jogo chamado Bulls and Cows.
          Você terá que adivinhar qual o número foi selecionado com base nos
          Bulls (número certo no lugar certo) e nas Cows (numero certo no lugar
          errado). Clique em jogo na barra de navegação e divirta-se
        </Text>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#F8FAFC",
    flex: 1,
    padding: 15,
  },
  scrollContent: {
    alignItems: "center",
    paddingBottom: 30,
    paddingTop: 20,
  },
  apresentacao: {
    backgroundColor: "#FFFFFF",
    width: "100%",
    padding: 25,
    borderRadius: 15,
    marginTop: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 3,
  },
  Titulo: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: "#1E40AF",
    marginBottom: 15,
  },
  Paragrafo: {
    fontSize: 16,
    color: "#334155",
    lineHeight: 22,
    textAlign: "justify",
    flex: 1,
  },
});
