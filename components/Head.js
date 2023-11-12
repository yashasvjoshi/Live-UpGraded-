import React from 'react'
import { Text, View } from 'react-native'
import styles from './Styles/GlobalStyle'


const Head = ({Title}) => {
  return (
    <View style={styles.headComp}>
        <Text style={styles.headLabel}>Live</Text>
        <Text style={styles.headTitle}>{Title}</Text>
    </View>
  )
}

export default Head