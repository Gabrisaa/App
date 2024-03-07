import { View, Text, Image } from 'react-native'
import { styles } from './styles'


export function Slide1() {
  const bolinho = require("../../assets/bolo.png")
  const planilha = require("../../assets/listinha.png")
  const dinheiro = require("../../assets/dinheiro.png")
  const coracao = require("../../assets/coracao.png")
  const cinza = require("../../assets/coracaocinza.png")
  return (
    <View style={styles.container}>
      <View style={styles.bolomeio}>
        <Image source={bolinho} />
      </View>
      <View style={styles.escrita}>
        <Text>Problemas com a Organização do seu evento?Deixa que o Organize Já te ajuda!</Text>

      </View>
      <View style={styles.imagenss}>
        <View style={styles.dindin}>
            <Image  source={planilha} />
            <Image source={dinheiro} />
        </View>
        <View style={styles.zirigui}> 
          <Text> em listagens </Text>
          <Text> e questões financeiras </Text>
        </View>
      <View style={styles.baixo} >
            <Image  source={cinza} />
            <Image source={coracao} />
            <Image source={coracao} />
      </View>
    </View>
    </View>
  )
}