import { CheckBox } from 'react-native-elements'
import Todo from './Todo'
import React, { useState } from 'react'
import styles from './Styles/GlobalStyle';
import { StatusBar } from 'expo-status-bar';
import { View, Text, TextInput, Button, Modal, Pressable, Image, Alert } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';


const Todos = ({todos,setTodos}) => {
    let [todoModalVisible,setTodoModalVisible] = useState(false)
    let [isChecked, setIsChecked] = useState(false)
    let [desc,setDesc]=useState('')
    
    const changeDesc=(desc)=>{
        setDesc(desc)
    }

    const saveTodo=async()=>{
      if (desc != ""){

          await setTodos([...todos,{description:desc}])
        console.log(todos);
        await AsyncStorage.setItem('todos', todos,()=>{console.log("all set", todos)})

        console.log((await AsyncStorage.getItem('todos')).length);
        // setNoteModalVisible(false)
      }
      else{
        Alert.alert('Title must have a string as an input.')
      }
    }

  return (
    <View style={styles.mastView}>
    <View style={styles.todos}>
    {/* <View> */}
   <View style={styles.todoContainer}>

        {todos.map((todo,todoKey)=>{
            return(
                todoKey>=1 && <Todo key={todoKey} setIsChecked={setIsChecked} todos={todos} setTodos={setTodos} isChecked={isChecked} todo={todo}/>
                )
            })
        }
        </View>
        <Modal
        style={styles.todoModal}
         animationType="none"
         transparent={false}
         visible={todoModalVisible}>
            <View style={styles.todoPan}>
                <TextInput multiline={true} id='descInp' className={'inps'} style={styles.descInp} placeholder="Description" onChangeText={changeDesc}/>
                <View style={styles.SaveNoteBtnNCancelContainer}>
                    <Button title='Save this Todo' style={{margin:5,}} color={'#202242'} onPress={saveTodo} />
                    <Button title='Cancel' color={'#202242'} style={{margin:5,}} onPress={()=>setTodoModalVisible(false)} />
                </View>
            </View>
            <StatusBar style="dark" />
        </Modal>
        </View>
        <Pressable style={styles.imgPressable} onPress={()=>setTodoModalVisible(true)}>
            <Image height={'1px'} width={'1px'} source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}} style={styles.addNote} />
            {/* <Image source={{uri:'../assets/plus1.png'}} style={styles.addTodo} /> */}
        </Pressable>
    </View>
  )
}

export default Todos
