// import { RootSiblingParent } from 'react-native-root-siblings';
import { View,Text, TextInput, Button } from 'react-native';
// import { Text, View } from 'react-native';
import styles from './components/Styles/GlobalStyle';
import Notes from './components/Notes';
import { useState } from 'react';



export default function App() {
  let [notes,setNotes]=useState([])
 

  return (
    <View style={styles.app}>
      <Notes notes={notes} setNotes={setNotes}  />
    </View>
  );
}

