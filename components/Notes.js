import React, { useState } from 'react'
import styles from './Styles/GlobalStyle';
import { StatusBar } from 'expo-status-bar';
import { View,Text, TextInput, Button, Modal, Pressable, Image, Alert } from 'react-native';
import Head from './Head';
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
    const saveNote=()=>{
      if (title != ""){

        setNotes([...notes,{title:title,description:desc}])
        console.log(notes);
        setNoteModalVisible(false)
      }
      else{
        Alert.alert('Title must have a string as an input.')
      }
    }


    return (
        <View style={styles.notes}>
        {/* <View> */}
        <Head Title={'Notes'}/>
       
            { notes.map((note,noteKey)=>{
            return(
                <View  key={noteKey}>
                    <Text style={styles.noteText}>{note.title}</Text>
                    <Text style={styles.noteDesc}>{note.description}</Text> 
                </View>
                )
            })
            }
            <Modal
             animationType="slide"
             transparent={true}
             visible={noteModalVisible}>
             <View style={styles.notePan}>
                    <TextInput id='titleInp' className={'inps'} style={styles.titleInp} placeholder="Title" onChangeText={changeTitle}/>
                    <TextInput id='descInp' className={'inps'} style={styles.descInp} placeholder="Description" onChangeText={changeDesc}/>
                    <Button title='Save this Note' color={'#202242'} onPress={saveNote} />
                </View>
                <StatusBar style="auto" />
            </Modal>
            <Pressable onPress={()=>setNoteModalVisible(true)}>
                <Image source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}} style={styles.addNote} />
            </Pressable>
            </View>
      );
}

export default Notes