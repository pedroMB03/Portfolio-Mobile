import React from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  TouchableOpacity,
  Linking,
} from "react-native";
import { FontAwesome } from "@expo/vector-icons";
import AntDesign from "@expo/vector-icons/AntDesign";

export default function Sobre() {
  return (
    <ScrollView
      style={style.container}
      contentContainerStyle={style.scrollContent}
    >
      <View style={style.ConteudoTopo}>
        <View style={style.sombraImagem}>
          <Image
            source={require("../../assets/images/minha ft.jpg")}
            style={style.imagem}
          />
        </View>
        <Text style={style.nome}>Pedro Marques</Text>
        <Text style={style.subtitulo}>Estudante de Ciência da Computação</Text>
      </View>

      <View style={style.apresentacao}>
        <Text style={style.Titulo}>Sobre Mim</Text>
        <Text style={style.Paragrafo}>
          Tenho 19 anos e atualmente estou no 5° período na Universidade
          Católica de Pernambuco (UNICAP). Estou desenvolvendo minhas
          habilidades para me tornar um excelente profissional na área de
          tecnologia, com foco em soluções inovadoras e eficientes.
        </Text>
      </View>

      <View style={style.apresentacao}>
        <Text style={style.Titulo}>Fale Comigo</Text>
        <View style={style.socialContainer}>
          <TouchableOpacity
            style={style.socialButton}
            activeOpacity={0.7}
            onPress={() => Linking.openURL("https://github.com/pedroMB03")}
          >
            <AntDesign name="github" size={24} color="black" />
          </TouchableOpacity>

          <TouchableOpacity
            style={style.socialButton}
            activeOpacity={0.7}
            onPress={() =>
              Linking.openURL(
                "https://www.linkedin.com/in/pedro-marques-821829270/o"
              )
            }
          >
            <FontAwesome name="linkedin" size={24} color="#1E40AF" />
          </TouchableOpacity>

          <TouchableOpacity
            style={style.socialButton}
            activeOpacity={0.7}
            onPress={() => Linking.openURL("mailto:pedroo.mbs@gmail.com")}
          >
            <FontAwesome name="envelope" size={24} color="red" />
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
  scrollContent: {
    alignItems: "center",
    paddingBottom: 30,
  },
  ConteudoTopo: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 20,
  },
  sombraImagem: {
    shadowColor: "#1E40AF",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },
  imagem: {
    width: 150,
    height: 150,
    borderRadius: 90,
    borderWidth: 2,
    borderColor: "#1E40AF",
  },
  nome: {
    fontSize: 28,
    fontWeight: "700",
    color: "#1E293B",
    marginTop: 20,
    letterSpacing: 0.5,
    textAlign: "center",
  },
  subtitulo: {
    fontSize: 16,
    color: "#64748B",
    marginTop: 5,
    fontStyle: "italic",
  },
  apresentacao: {
    backgroundColor: "#FFFFFF",
    width: "90%",
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
    fontSize: 22,
    fontWeight: "600",
    color: "#1E40AF",
    marginBottom: 15,
    textAlign: "center",
  },
  Paragrafo: {
    fontSize: 15,
    color: "#334155",
    lineHeight: 22,
    textAlign: "justify",
  },
  socialContainer: {
    flexDirection: "row",
    justifyContent: "center",
    gap: 20,
    marginTop: 15,
  },
  socialButton: {
    width: 50,
    height: 50,
    backgroundColor: "#E2E8F0",
    borderRadius: 25,
    alignItems: "center",
    justifyContent: "center",
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 5,
  },
});
