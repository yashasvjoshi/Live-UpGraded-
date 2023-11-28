import React from 'react'
import { Text, View } from 'react-native'
import styles from './Styles/GlobalStyle'

const Note = ({note}) => {
  return (
    <View style={styles.noteComp}>
    <Text style={styles.noteText}>{note.title}</Text>
    <Text style={styles.noteDesc}>{note.description}</Text> 
</View>
  )
}

export default Note
