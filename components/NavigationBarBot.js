import React from 'react'
import { Image, Pressable, Text, View } from 'react-native'
import styles from './Styles/GlobalStyle'

const NavigationBarBot = ({screen,setScreen}) => {
    const changeScreen =(newScreen)=>{
        setScreen(newScreen)
        setScreen(newScreen)
        console.log(newScreen, screen);
    }
  return (
   <View style={styles.navBotCont}>
    <Pressable onPress={()=>changeScreen('notes')}>
        <Image source={require('./assImgs/nI.png')}/>
    <Text>Notes</Text>
    </Pressable>
    <Pressable onPress={()=>changeScreen('reminders')}><Image/>
    <Text>Reminders</Text>
    </Pressable>
    <Pressable onPress={()=>changeScreen('todos')}><Image/>
    <Text>Todos</Text>
    </Pressable>
   </View>
  )
}

export default NavigationBarBot
