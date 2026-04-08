import { useState } from "react";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";
import { StyleSheet, Text, View, ImageBackground, Switch } from "react-native";
import Slider from "@react-native-community/slider";

export default function App() {
  const [disjuntor, setDisjuntor] = useState(false);
  const [intensidade, setIntensidade] = useState(0);
  const slider = (
    <Slider
      style={{ width: 225, height: 20 }}
      minimumValue={0}
      maximumValue={100}
      step={1}
      value={intensidade}
      onValueChange={(v) => setIntensidade(v)}
      minimumTrackTintColor="#e30613"
      maximumTrackTintColor="#000000"
      thumbSize={32}
      disabled={disjuntor ? false : true}
    />
  );
  return (
    <SafeAreaProvider>
      <SafeAreaView>
        <ImageBackground
          source={{
            uri: "https://img.freepik.com/fotos-premium/o-telhado-da-estrutura-metalica-da-fabrica-abriga-a-carga-em-um-armazem-bem-organizado-papel-de-parede-movel-vertical_896558-11575.jpg?semt=ais_hybrid&w=740&q=80",
          }}
          style={styles.backgroundImage}
          resizeMode="cover"
        >
          <View style={styles.overlay}>
            <Text style={styles.titulo}> Controle de iluminação</Text>
            <View style={styles.disjuntor}>
              <Text>Disjuntor de Iluminação: </Text>
              <Switch
                value={disjuntor}
                onChange={() => setDisjuntor((val) => !val)}
                trackColor={{ false: "#767577", true: "#01a10f" }}
              />
            </View>
            <View style={styles.controlador}>
              <Text>Intensidade atual: {disjuntor ? intensidade : "0"}%</Text>
              {slider}
            </View>
          </View>
        </ImageBackground>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "#5f5f5f5e",
    width: "100%",
    height: "100%",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    paddingBottom: 90,
  },
  disjuntor: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-around",
    width: 370,
    height: 100,
    backgroundColor: "#ffff",
    borderRadius: 10
  },

  controlador: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
    width: 370,
    height: 100,
    backgroundColor: "#ffff",
    borderRadius: 10,
    padding: 10
  },
  backgroundImage: {
    height: "100%",
  },
  titulo: {
    fontWeight: "bold",
    color: "black",
    fontSize: 30,
    backgroundColor: "white",
    width: 370,
    height: 50,
    borderRadius: 10
  },
});
