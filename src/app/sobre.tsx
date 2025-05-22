import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

export default function Sobre() {
  return (
    <ScrollView style={style.container}>
      <View style={style.apresentacao}>
        <Text style={style.Titulo}>Sobre mim</Text>

        <View style={style.conteudo}>
          <Image
            source={require("../../assets/images/fotoMinha.jpg")}
            style={style.imagem}
          />
          <Text style={style.Paragrafo}>
            Me chamo Pedro Marques Bezerra dos Santos, tenho 19 anos e sou um
            estudante de Ciência da computação na Universidade Católicade
            Pernambuco (UNICAP). Atualmente estou no 5° período do curso e estou
            me desenvolvendo minhas habilidades e capacidades para me tornar um
            ótimo cientista da computação.
          </Text>
        </View>
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
  imagem: {
    width: 110,
    height: 150,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#bcb3a2",
  },
  Titulo: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: "#bcb3a2",
  },
  Paragrafo: {
    fontSize: 16,
    color: "#bcb3a2",
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
