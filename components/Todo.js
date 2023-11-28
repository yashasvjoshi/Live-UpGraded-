import React from 'react'
import { Text, View } from 'react-native'
import styles from './Styles/GlobalStyle'
import { CheckBox } from 'react-native-elements'
const Todo = ({todo, isChecked, setIsChecked, todos,setTodos}) => {
  const todoChecked = ()=>{
    setIsChecked(false)
    setTodos(todos.filter((x)=> x.description!=todo.description))
  }
  return (
    <View style={styles.todoComp}>
    <Text style={styles.todoDesc}>{todo.description}</Text> 
    <CheckBox
    title={''}
        checked={isChecked}
        onPress={todoChecked}
        
      />
</View>
  )
}

export default Todo
