import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Linking,
} from "react-native";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Projetos() {
  return (
    <ScrollView
      style={style.container}
      contentContainerStyle={style.scrollContent}
    >
      <View style={style.ConteudoTopo}>
        <Text style={style.Titulo}>Meus Projetos</Text>
      </View>

      <View style={style.apresentacao}>
        <Text style={style.Subtitulo}>Projeto de Banco de Dados</Text>
        <Text style={style.Paragrafo}>
          Sistema de gerenciamento de dados e arquivos com login, permitindo que
          cada tipo de usuário tivesse capacidades específicas. Incluía
          operações CRUD, histórico de operações, gestão de instituições e
          associação de arquivos.
        </Text>
        <View style={style.socialContainer}>
          <TouchableOpacity
            style={[style.socialButton]}
            onPress={() =>
              Linking.openURL(
                "https://github.com/tarsilaAmado/TrabalhoDeBancoDeDados"
              )
            }
          >
            <AntDesign name="github" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={style.apresentacao}>
        <Text style={style.Subtitulo}>Projeto de Robótica</Text>
        <Text style={style.Paragrafo}>
          Teclado Bluetooth com Arduino focado em acessibilidade para PCD's.
          Utilizando sensores e atuadores, programamos um sistema que gera sons
          musicais baseados no input do usuário para facilitar o aprendizado de
          notas musicais.
        </Text>
        <View style={style.socialContainer}>
          <TouchableOpacity
            style={[style.socialButton]}
            onPress={() =>
              Linking.openURL("https://github.com/pedroMB03/Projeto_Robotica")
            }
          >
            <AntDesign name="github" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={style.apresentacao}>
        <Text style={style.Subtitulo}>Projeto de Estrutura de Dados</Text>
        <Text style={style.Paragrafo}>
          Aplicação dos conceitos de estruturas de dados lineares em um jogo da
          memória, onde o jogador deve encontrar pares de cartas com o menor
          número de tentativas possível.
        </Text>
        <View style={style.socialContainer}>
          <TouchableOpacity
            style={[style.socialButton]}
            onPress={() =>
              Linking.openURL(
                "https://github.com/c3-disciplina-ed2/projeto-jogo-tarsila-e-amigos"
              )
            }
          >
            <AntDesign name="github" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={style.apresentacao}>
        <Text style={style.Subtitulo}>Projeto de Web-Mobile</Text>
        <Text style={style.Paragrafo}>
          Projeto desenvolvido em React com o objetivo de criar um sistema de
          gerenciamento de eventos empresariais. O site permite cadastrar,
          editar, visulizar e atualizar um evento interno da empresa de uma
          maneira simples e eficiente.
        </Text>
        <View style={style.socialContainer}>
          <TouchableOpacity
            style={[style.socialButton]}
            onPress={() =>
              Linking.openURL(
                "https://github.com/Anabia-05/ProjetoWeb-pwm2025.1"
              )
            }
          >
            <AntDesign name="github" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}

const style = StyleSheet.create({
  container: {
    backgroundColor: "#F8FAFC",
    flex: 1,
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 10,
  },
  socialButton: {
    width: 50,
    height: 50,
    backgroundColor: "#E2E8F0",
    borderRadius: 25,
    justifyContent: "center",
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
  scrollContent: {
    alignItems: "center",
    paddingBottom: 30,
  },
  ConteudoTopo: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
    width: "100%",
  },
  apresentacao: {
    flexDirection: "column",
    backgroundColor: "#FFFFFF",
    padding: 25,
    borderRadius: 15,
    marginBottom: 20,
    alignItems: "center",
    gap: 20,
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
  },
  Subtitulo: {
    fontSize: 22,
    color: "black",
    lineHeight: 22,
    textAlign: "justify",
    marginBottom: 10,
  },
  Paragrafo: {
    fontSize: 15,
    color: "#334155",
    lineHeight: 22,
    textAlign: "justify",
    marginBottom: 15,
  },
});
