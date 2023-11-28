import React, { useState } from 'react'
import styles from './Styles/GlobalStyle';
import { StatusBar } from 'expo-status-bar';
import { View,Text, TextInput, Button, Modal, Pressable, Image, Alert } from 'react-native';
import Head from './Head';
import Note from './Note';
import AsyncStorage from '@react-native-async-storage/async-storage';

// import Toast from 'react-native-root-toast';
// import Plus from '../assets/plus1.png'





const Notes = ({notes,setNotes}) => {

    



    let [noteModalVisible,setNoteModalVisible] = useState(false)
    
    let [title,setTitle]=useState('')
    let [desc,setDesc]=useState('')
    const changeTitle=(title)=>{
        setTitle(title)
    }
    const changeDesc=(desc)=>{
        setDesc(desc)
    }
    const saveNote=async()=>{
      if (title != ""){

          await setNotes([...notes,{title:title,description:desc}])
        console.log(notes);
        await AsyncStorage.setItem('notes', notes,()=>{console.log("all set", notes)})

        console.log((await AsyncStorage.getItem('notes'))[0].title);
        // setNoteModalVisible(false)
      }
      else{
        Alert.alert('Title must have a string as an input.')
      }
    }


    return (
        <View style={styles.mastView}>
        <View style={styles.notes}>
        {/* <View> */}
       <View style={styles.noteContainer}>

            { notes.map((note,noteKey)=>{
                return(
                    noteKey>=1 && <Note key={noteKey} note={note}/>
                    )
                })
            }
            </View>
            <Modal
            style={styles.noteModal}
             animationType="none"
             transparent={false}
             visible={noteModalVisible}>
                <View style={styles.notePan}>
                    <TextInput id='titleInp' className={'inps'} style={styles.titleInp} placeholder="Title" onChangeText={changeTitle}/>
                    <TextInput multiline={true} id='descInp' className={'inps'} style={styles.descInp} placeholder="Description" onChangeText={changeDesc}/>
                    <View style={styles.SaveNoteBtnNCancelContainer}>
                        <Button title='Save this Note' style={{margin:5,}} color={'#202242'} onPress={saveNote} />
                        <Button title='Cancel' color={'#202242'} style={{margin:5,}} onPress={()=>setNoteModalVisible(false)} />
                    </View>
                </View>
                <StatusBar style="dark" />
            </Modal>
            </View>
            <Pressable style={styles.imgPressable} onPress={()=>setNoteModalVisible(true)}>
                <Image height={'1px'} width={'1px'} source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}} style={styles.addNote} />
                {/* <Image source={{uri:'../assets/plus1.png'}} style={styles.addNote} /> */}
            </Pressable>
        </View>

      );
}

export default Notes