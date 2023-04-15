import React, { useState } from 'react';
import { View, Text, TextInput, Button, Image} from 'react-native';
import { styles } from './styles';


export default function App(){
  const [precoAlcool, setPrecoAlcool] = useState(0)
  const [precoGasolina, setPrecoGasolina] = useState(0)
  const [resultado, setResultado] = useState()

  function calcular() {
    res = precoAlcool / precoGasolina
    if (res > 0.7)
      setResultado('Melhor Gasolina')
    else
      setResultado('Melhor Alcool')
  }

  return(
    <View style={styles.container}>

      <Text style={styles.titulo}>Álcool ou Gasolina</Text>
 
      <Image
        source={{uri: 'https://complemento.veja.abril.com.br/economia/calculadora-combustivel/img/abre.jpg'}}
        style={{width: 200, height: 100, alignSelf: 'center', marginTop: 5}}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o preço do alcool..."
        onChangeText={(valor) => setPrecoAlcool(valor)}
      />

      <TextInput
        style={styles.input}
        placeholder="Digite o preço da gasolina..."
        onChangeText={(valor) => setPrecoGasolina(valor)}
      />

      <Button title="Calcular" onPress={calcular} />
 
      <Text style={styles.texto}> {resultado} </Text>
    </View>
  )
}