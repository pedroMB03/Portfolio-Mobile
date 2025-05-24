import React from "react";
import { View, Text, Image, StyleSheet, ScrollView } from "react-native";

export default function Experiencias() {
  const cadeiras = ["Inteligência Aritificial", "Redes de computadores"];

  return (
    <ScrollView
      style={styles.container}
      contentContainerStyle={styles.ScrollContent}
    >
      <View style={styles.conteudoTopo}>
        <Text style={styles.Titulo}>Experiências</Text>
      </View>

      <View style={styles.Apresentacao}>
        <Text style={styles.subtitulo}>Experiencias Acadêmica</Text>
        <Text style={styles.Paragrafo}>
          Dentro da Universidade pude obter diversas experiências e
          conhecimentos, tanto em cadeiras passadas como nas atuais! Atualmente,
          no 5° periodo estou cursando cadeiras de grande relevância no mundo da
          computação:
        </Text>

        <View style={styles.listaContainer}>
          {cadeiras.map((cadeira, index) => (
            <View key={index} style={styles.itemLista}>
              <Text style={styles.textoLista}>• {cadeira}</Text>
            </View>
          ))}
        </View>

        <View style={styles.imagemRow}>
          <View style={styles.imagemItem}>
            <Image
              source={require("../../assets/images/ApresentacaoIA.jpg")}
              style={styles.imagem}
            />
            <Text style={styles.legendaImagem}>Seminário de IA</Text>
          </View>

          <View style={styles.imagemItem}>
            <Image
              source={require("../../assets/images/MiniProjetoIA.jpg")}
              style={styles.imagem}
            />
            <Text style={styles.legendaImagem}>Mini Projeto IA</Text>
          </View>
        </View>
      </View>

      <View style={styles.Apresentacao}>
        <Text style={styles.subtitulo}>Experiências Profissionais</Text>
        <Text style={styles.Paragrafo}>
          Atualmente não possuo experiência profissional formal na área de
          tecnologia, mas estou em busca de oportunidades para aplicar os
          conhecimentos adquiridos durante minha formação acadêmica.
        </Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#F8FAFC",
    flex: 1,
  },
  conteudoTopo: {
    alignItems: "center",
    marginTop: 40,
    marginBottom: 10,
  },
  ScrollContent: {
    alignItems: "center",
    paddingBottom: 30,
  },
  Apresentacao: {
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
  sombraImagem: {
    shadowColor: "#1E40AF",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.2,
    shadowRadius: 8,
    elevation: 10,
  },
  imagem: {
    width: 120,
    height: 120,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#1E40AF",
    marginBottom: 8,
  },
  imagensContainer: {
    width: "48%",
    alignItems: "center",
  },
  imagemRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginTop: 15,
  },
  imagemItem: {
    alignItems: "center",
    width: "48%",
  },
  legendaImagem: {
    fontSize: 14,
    color: "#64748b",
    textAlign: "center",
  },
  Titulo: {
    fontSize: 22,
    fontWeight: "600",
    color: "#1E40AF",
    marginBottom: 15,
    textAlign: "center",
  },
  subtitulo: {
    fontSize: 16,
    color: "#64748B",
    marginTop: 5,
    fontStyle: "italic",
    marginBottom: 10,
    textAlign: "center",
  },
  Paragrafo: {
    fontSize: 15,
    color: "#334155",
    lineHeight: 22,
    textAlign: "justify",
  },
  listaContainer: {
    marginVertical: 15,
  },
  itemLista: {
    marginBottom: 8,
  },
  textoLista: {
    fontSize: 15,
    color: "#334155",
    lineHeight: 22,
  },
});
