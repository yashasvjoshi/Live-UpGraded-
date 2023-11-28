import React from 'react'
import { Text, View } from 'react-native'
import styles from './Styles/GlobalStyle'

const Reminder = ({rem}) => {
  return (
    <View style={styles.remElement}>
        <Text style={styles.remDate}>{rem.date}</Text>
        <Text style={styles.remTime}>{Number.parseInt((rem.time).split(':')[0])>12?`${Number.parseInt((rem.time).split(':')[0])-12}:${Number.parseInt((rem.time).split(':')[1])} p.m`:`${rem.time} a.m`}</Text>
        <Text style={styles.remDesc}>{rem.description}</Text>
    </View>
  )
}

export default Reminder
