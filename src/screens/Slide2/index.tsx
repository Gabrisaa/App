import { ImageBackground } from "react-native"
import { styles } from './styles'
import { IPage } from "../../../App"

export function Slide2({Ipage, IsetPage} : IPage){
    const slide = require('../../assets/fundo2.png')
    return (
        <ImageBackground style={styles.container} source={slide}>
         </ImageBackground>
       )
}