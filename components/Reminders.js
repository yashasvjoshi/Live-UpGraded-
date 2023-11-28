import React,{useEffect, useState} from 'react'

import { View,Text, TextInput, Button, Modal, Pressable, Image, Alert, StatusBar } from 'react-native';
// import { Modal, Pressable, View, TextInput, Button } from 'react-native'

import styles from './Styles/GlobalStyle'
import Reminder from './Reminder';
import AsyncStorage from '@react-native-async-storage/async-storage';
import DatePicker from 'react-native-datepicker';

const Reminders = ({reminders,setReminders}) => {
  let [remModalVisible,setRemModalVisible] = useState(false)
  let [date, setDate]=useState('')
  let [desc, setDesc]=useState('')
  let [time, setTime]=useState('')
  useEffect(()=>{
    let todaysDate = new Date()
    setDate(`${todaysDate.getMonth()+1}-${todaysDate.getDate()}-${todaysDate.getFullYear()}`)
  },[])
  
  const changeDate = (date)=>{
    setDate(date)
  }
  const changeDesc = (desc)=>{
    setDesc(desc)
  }
  const changeTime = (time)=>{
    setTime(time)
  }


  

  const saveRem=async()=>{
    if (date != "")
    {
    if (time!="") {
      
      
      await setReminders([...reminders,{date:date,time:time,description:desc}])
      console.log(reminders);
      await AsyncStorage.setItem('reminders', reminders,()=>{console.log("all set", reminders)})
      
      console.log((await AsyncStorage.getItem('reminders'))[0].date);
      // setRemModalVisible(false)
    } 
    }
    else{
      Alert.alert('Date must have a date as an input.')
    }
  }
  return (
    <View style={styles.rems}>
    <View style={styles.remContainer}>
      {
        reminders.map((rem,remKey)=>{
          return(
            remKey>=1 &&<Reminder rem={rem} key={remKey}/>
          )
        })
      }
      </View>
      <Modal
            style={styles.remModal}
             animationType="none"
             transparent={false}
             visible={remModalVisible}>
                <View style={styles.remPan}>
                <DatePicker
                onDateChange={changeDate}
                      style={{ width: 200 }}
                      date={date}
                      mode="date"
                      placeholder="Select date"
                      format="MM-DD-YYYY"
                      minDate="01-01-2023"
                      maxDate="2023-12-31"
                      confirmBtnText="Confirm"
                      cancelBtnText="Cancel"
                      customStyles={
                        {
                    //     dateIcon: {
                    //       position: 'absolute',
                    //       left: 0,
                    //       top: 4,
                    //       marginLeft: 0,
                    //     },
                        dateInput: {
                          marginLeft: 36,
                        },
                        // ...other custom styles
                      }
                    }
/>
                    {/* <TextInput id='titleInp' className={'inps'} style={styles.remDateInp} placeholder="Date" onChangeText={changeDate}/> */}
                    <TextInput id='titleInp' className={'inps'} style={styles.remTimeInp} placeholder="Time" onChangeText={changeTime}/>
                    <TextInput multiline={true} id='descInp' className={'inps'} style={styles.remDescInp} placeholder="Description" onChangeText={changeDesc}/>
                    <View style={styles.SaveRemBtnNCancelContainer}>
                        <Button title='Save this Rem' style={{margin:5,}} color={'#202242'} onPress={saveRem} />
                        <Button title='Cancel' color={'#202242'} style={{margin:5,}} onPress={()=>setRemModalVisible(false)} />
                    </View>
                </View>
                <StatusBar style="dark" />
            </Modal>
     <Pressable style={styles.imgPressable} onPress={()=>setRemModalVisible(true)}>
                <Image source={{uri:'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg=='}} style={styles.addNote} />
            </Pressable>
    </View>
    // </View>
  )
}

export default Reminders
