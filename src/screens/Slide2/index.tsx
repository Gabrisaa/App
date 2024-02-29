import { ImageBackground } from "react-native"
import { styles } from './styles'

export function Slide2(){
    const slide = require('../../assets/fundo2.png')
    return (
        <ImageBackground style={styles.container} source={slide}>
         </ImageBackground>
       )
}