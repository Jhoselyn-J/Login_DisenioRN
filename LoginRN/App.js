import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, Touchable, TouchableOpacity, View } from 'react-native';
import { Image } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.box1}>
        <Text style={styles.title}>Login!</Text>
        <Image source={require('./img/loginI.png')} style={styles.image} />
        <Text style={styles.subtitle}>Usuario</Text>
        <TextInput style={styles.input} placeholder="Ingrese Usuario" />
        <Text style={styles.subtitle}>Contraseña</Text>
        <TextInput style={styles.input} placeholder="Ingrese contraseña" secureTextEntry={true} />
        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Iniciar sesión</Text>
        </TouchableOpacity>
        <Text style={styles.subtitlef}>¿Olvidaste tu contraseña?</Text>
        <Text style={styles.subtitlef}>o</Text>
        <Text style={styles.subtitleC}>Crear Cuenta</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box1: {
    backgroundColor: '#9DA1D1',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 25,
    borderRadius: 10,
  },
  title: {
    color: 'white', 
    fontFamily: 'roboto',
    fontSize: 25,
    marginTop: 15,
    fontWeight: 'bold',
  },
  subtitle: {
    color: 'white',
    fontSize: 18,
    fontFamily: 'Arial',
    marginTop: 10,
  },
  input: {
    width: 200,
    
    paddingVertical: 8,
    borderColor: 'white',
    borderWidth: 1,
    borderRadius: 10,
    color: 'white',
    textAlign: 'center',
    marginTop: 10,
  },
  button: {
    backgroundColor: '#6A1793',
    borderRadius: 20,
    paddingVertical: 10,
    paddingHorizontal: 20,
    alignItems: 'center',
    marginTop: 10,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
  image: {
    width: 150,
    height: 150,
    marginTop: 20,
  },
  subtitlef:{
    fontSize: 10,
    color: 'white'
  },
  subtitleC:{
    fontSize: 10,
    color: 'white',
    textDecorationLine: 'underline'
  }
});