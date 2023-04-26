import React from 'react'
import { ImageBackground, SafeAreaView, Text } from 'react-native'
import { styles } from './HomeScreen.styles'

export const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ImageBackground style={styles.bgImage} source={require('../../../assets/inicio.webp')}>
        <Text style={styles.title}>
          Eventos en la Provincia de Jujuy!
        </Text>
      </ImageBackground>
    </SafeAreaView>
  )
}
