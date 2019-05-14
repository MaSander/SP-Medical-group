import React, {Component} from 'react';
import {
    StyleSheet,
    View,
    Text,
    Image,
    ImageBackground,
    Alert,
    TextInput,
    TouchableOpacity,
    AsyncStorage
} from 'react-native'

import api from '../services/api';

class Login extends Component {
    constructor(props){
        super(props)

        this.state = {
            email: ''
            ,senha: ''
        }
    }

    realizarLogin = async () =>{
        const resposta = await api.post('/login', {
            email: this.state.email
            ,senha: this.state.senha
        });

        const token = resposta.data.token;
        await AsyncStorage.setItem('usertoken', token);
        // Alert.alert(token);
        this.props.navigation.navigate("MainNavigator");
        Alert.alert("aqui ainda ta indo");
    }

    render(){
        return(
            <View style={styles.main}>
            <View style={styles.overlay} />
          <TextInput
            style={styles.inputLogin}
            placeholder="email"
            placeholderTextColor="#FFFFFF"
            underlineColorAndroid="#FFFFFF"
            onChangeText={email => this.setState({ email })}
          />

          <TextInput
            style={styles.inputLogin}
            placeholder="senha"
            placeholderTextColor="#FFFFFF"
            password="true"
            underlineColorAndroid="#FFFFFF"
            onChangeText={senha => this.setState({ senha })}
          />
          <TouchableOpacity
            style={styles.btnLogin}
            onPress={this.realizarLogin}
          >
            <Text style={styles.btnLoginText}>LOGIN</Text>
          </TouchableOpacity>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: "#81DF99"
  },
  main: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center"
  },
  mainImgLogin: {
    tintColor: "#FFFFFF",
    height: 100,
    width: 90,
    margin: 10
  },
  btnLogin: {
    height: 38,
    shadowColor: "rgba(0,0,0, 0.4)", // IOS
    shadowOffset: { height: 1, width: 1 }, // IOS
    shadowOpacity: 1, // IOS
    shadowRadius: 1, //IOS
    elevation: 3, // Android
    width: 240,
    borderRadius: 4,
    borderWidth: 1,
    borderColor: "#FFFFFF",
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 10
  },
  btnLoginText: {
    fontSize: 10,
    fontFamily: "OpenSans-Light",
    color: "#B727FF",
    letterSpacing: 4
  },
  inputLogin: {
    width: 240,
    marginBottom: 10,
    fontSize: 10
  }
});

export default Login

// Adm@email.com
// adimin123