import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ScrollView,
  Alert,
  StyleSheet,
} from "react-native";

export default function JogoBullsCows() {
  interface Tentativa {
    palpite: string;
    bulls: number;
    cows: number;
    tentativaNum: number;
  }
  const [numeroSecreto, setNumeroSecreto] = useState("");
  const [palpite, setPalpite] = useState("");
  const [tentativas, setTentativas] = useState<Tentativa[]>([]);
  const [tentativasRestantes, setTentativasRestantes] = useState(10);

  useEffect(() => {
    reiniciarJogo();
  }, []);

  const gerarNumeroSecreto = () => {
    const digitos: string[] = [];
    while (digitos.length < 4) {
      const numero = Math.floor(Math.random() * 10).toString();
      if (!digitos.includes(numero)) {
        digitos.push(numero);
      }
    }
    return digitos.join("");
  };

  const verificarTentativa = () => {
    if (!/^\d{4}$/.test(palpite)) {
      Alert.alert("Erro", "Digite exatamente 4 números!");
      return;
    }

    if (tentativas.length >= 10) {
      Alert.alert(
        "Fim!",
        "Você atingiu o limite de tentativas! tente novamente!"
      );
      return;
    }

    if (new Set(palpite).size !== 4) {
      Alert.alert("Erro", "A tentativa não pode ter numéros repetidos!");
      return;
    }

    let bulls = 0;
    let cows = 0;

    for (let i = 0; i < 4; i++) {
      if (palpite[i] === numeroSecreto[i]) {
        bulls++;
      } else if (numeroSecreto.includes(palpite[i])) {
        cows++;
      }
    }

    const resultado = {
      palpite,
      bulls,
      cows,
      tentativaNum: tentativas.length + 1,
    };

    setTentativas([resultado, ...tentativas]);
    setTentativasRestantes(10 - (tentativas.length + 1));
    setPalpite("");

    if (bulls === 4) {
      Alert.alert(
        "Parabéns",
        `Você acertou o número secreto: ${numeroSecreto}`
      );
    } else if (tentativas.length + 1 === 10) {
      Alert.alert(
        "Fim de jogo",
        `Você não acertou! O número era: ${numeroSecreto}`
      );
    }
  };

  const reiniciarJogo = () => {
    const novoNumero = gerarNumeroSecreto();
    setNumeroSecreto(novoNumero);
    setTentativas([]);
    setTentativasRestantes(10);
    setPalpite("");
    Alert.alert("Vamos Jogar!", "Jogo iniciado");
  };

  return (
    <ScrollView style={styles.container}>
      <View>
        <Text style={styles.Titulo}>Jogo da Senha | Bulls and Cows</Text>
      </View>

      <View style={styles.jogoContainer}>
        <Text style={styles.texto}>
          Tentativas restantes:{" "}
          <Text style={styles.bold}>{tentativasRestantes}</Text>
        </Text>
        <Text style={styles.texto}>Digite um número de 4 dígitos!</Text>
        <TextInput
          style={styles.input}
          value={palpite}
          onChangeText={setPalpite}
          placeholder="Ex: 1234"
          keyboardType="numeric"
          maxLength={4}
          placeholderTextColor="#64748b"
        />

        <View style={styles.botoesContainer}>
          <TouchableOpacity
            style={styles.botaoEnvio}
            onPress={verificarTentativa}
          >
            <Text style={styles.botaoTexto}>Enviar</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.botaoRecomecar}
            onPress={reiniciarJogo}
          >
            <Text style={styles.botaoTexto}>Recomeçar</Text>
          </TouchableOpacity>
        </View>

        <Text></Text>

        <View style={styles.tentativasContainer}>
          {tentativas.map((item, index) => (
            <View key={index} style={styles.tentativasItem}>
              <Text style={styles.tentativasTexto}>
                Tentativa {tentativas.length - index}: {item.palpite}
              </Text>
              <Text style={styles.bulls}>Bulls: {item.bulls}</Text>
              <Text style={styles.cows}>Cows: {item.cows}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F8FAFC",
  },
  Titulo: {
    textAlign: "center",
    fontSize: 22,
    fontWeight: "bold",
    color: "#1E40AF",
  },
  jogoContainer: {
    padding: 20,
  },
  texto: {
    fontSize: 16,
    marginBottom: 10,
    color: "#334155",
    textAlign: "center",
  },
  bold: {
    fontWeight: "bold",
    color: "#1E293B",
  },
  input: {
    height: 50,
    borderColor: "#E2E8F0",
    borderWidth: 1,
    borderRadius: 8,
    padding: 10,
    fontSize: 18,
    marginBottom: 20,
    backgroundColor: "white",
    color: "#1E293B",
  },
  botoesContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 20,
    gap: 10,
  },
  botaoEnvio: {
    backgroundColor: "#1e40af",
    padding: 15,
    borderRadius: 8,
    flex: 1,
    alignItems: "center",
  },
  botaoRecomecar: {
    backgroundColor: "#64748b",
    padding: 15,
    borderRadius: 8,
    flex: 1,
    alignItems: "center",
  },
  botaoTexto: {
    color: "white",
    fontWeight: "bold",
  },
  subtitulo: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
    color: "#1e40af",
  },
  tentativasContainer: {
    gap: 8,
  },
  tentativasItem: {
    backgroundColor: "#FFFFF",
    padding: 12,
    borderRadius: 6,
    borderWidth: 1,
    borderColor: "#e2e8f0",
  },
  tentativasTexto: {
    color: "#334155",
    fontSize: 18,
  },
  bulls: {
    color: "#10B981",
    fontWeight: "600",
    fontSize: 18,
  },
  cows: {
    color: "#f59e0b",
    fontWeight: "600",
    fontSize: 18,
  },
});
