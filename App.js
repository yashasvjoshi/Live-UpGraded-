// import { RootSiblingParent } from 'react-native-root-siblings';
import { View,Text, TextInput, Button } from 'react-native';
// import { Text, View } from 'react-native';
import styles from './components/Styles/GlobalStyle';
import Notes from './components/Notes';
import { useEffect, useState } from 'react';
import NavigationBarBot from './components/NavigationBarBot';
import Head from './components/Head';
import Reminders from './components/Reminders';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Todos from './components/Todos';



export default  function App() {
  useEffect(()=>{
    const fetchNotes= async()=>{
      try {
        let preNotes = await AsyncStorage.getItem('notes',(notes)=>console.log("all get",notes))
        if (preNotes !== null) {
          // Key exists, do something with the data
          console.log(`Data for key notes: ${preNotes}`);
        } else {
          // Key doesn't exist, create it or handle it as needed
          console.log(`Key notes doesn't exist. Creating it now...`);

          
        }
      } catch (error) {
        // Handle AsyncStorage errors
        console.error('Error retrieving data:', error.message);
      }

    }
    fetchNotes
  },['notes'])
  let [notes,setNotes]=useState([{
    title:'forced',
    description:'forced'
  }])
  let [reminders,setReminders] = useState([{
    date:'1 jan 1970',
    time:'19:30',
    description:'Sample',
  }])
  let [todos,setTodos] = useState([{
    description:'anewforced'
  }])
  let [screen, setScreen] = useState('notes')

  return (
    <View style={styles.app}>

        <Head Title={screen}/>

      {screen == 'notes'&&<Notes notes={notes} setNotes={setNotes}  />}
      {screen == 'reminders'&&<Reminders reminders={reminders} setReminders={setReminders}  />}
      {screen == 'todos'&&<Todos todos={todos} setTodos={setTodos}  />}
      
      <NavigationBarBot screen={screen} setScreen={setScreen} />
    </View>
  );
}

