import * as React from "react";
import { StyleSheet, Text, View, TextInput, TouchableOpacity, Platform, ImageBackground, Image, SafeAreaView, StatusBar} from 'react-native';
import { Header } from "react-native-elements";
import db from "./localdb";

export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      text: '',
      atalho: [],
    }
  }
  render() {
    return (
      <View style={styles.container}>
        <SafeAreaView style={styles.droidSafeArea} />
        <ImageBackground source={require('./assets/fundo.png')} style={styles.backgroundImage}>
        <Header
          backgroundColor={'#00FF00'}
          centerComponent={{
            text: 'Dicionario Minecraft',
            style: { color: 'black', fontSize: 40 },
          }}
        />
        <TextInput
          style={styles.inputBox}
          onChangeText={text => {
            this.setState({ text: text });
          }}
          value={this.state.text}
        />
        <TouchableOpacity
          style={styles.goButton}
          onPress={() => {
            var word = this.state.text.toUpperCase();
            db[word]
              ? (this.setState({ atalho: db[word].atalho }))
              : alert("esta palavra não existe")
          }}>
          <Text style={styles.buttonText}>Pesquisar</Text>
        </TouchableOpacity>
        <View>
          <Text style={styles.atalho}>{this.state.atalho}</Text>
        </View>
        </ImageBackground>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8B4513',
  },
  droidSafeArea: {
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
  inputBox: {
    marginTop: 200,
    width: '80%',
    alignSelf: 'center',
    height: 40,
    textAlign: 'center',
    borderWidth: 3,
  },
  goButton: {
    width: '50%',
    height: 90,
    alignSelf: 'center',
    padding: 10,
    margin: 10,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 40,
    fontWeight: 'bold',
  },
  displayText: {
    textAlign: 'center',
    fontSize: 30,
  },
  atalho: {
    textAlign: "center",
    fontSize: 30,
    color: 'white',
    fontWeight: 'bold'
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
  },
});