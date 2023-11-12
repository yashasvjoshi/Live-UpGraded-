import { StyleSheet,  } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    app:{
        flex:6,
        alignItems:'center'
    },
    headLabel:{
        fontSize:'5vh',
        fontWeight:'500'
    },
    headComp:{
        flex:3,
        justifyContent:'center',
        alignItems:'center',
        borderBottomColor:'black',
    },headTitle:{
        fontSize:'2vh',
        fontFamily:'',
    },
    notes:{
        backgroundColor:'white',
        // color:'purple',
        // height:'',
    },
    noteText:{
        color:'blue',
    },
    noteDesc:{
        color:'black',
    },
    notePan:{
        // alignSelf:'baseline'
        flex:2,
        alignItems:'center',
        justifyContent:'center',
    },
    // noteBtn:{
    //     backgroundColor:'#202242',
    //     color:'white',
    // },
    titleInp:{
        borderColor:'red',
        borderWidth:3,
        margin:2,
        padding:4,
        borderRadius:9,
        shadowColor:'black',
        shadowOpacity:20
        

    },
    descInp:{
        borderColor:'blue',
        borderWidth:3,
        margin:2,
        padding:6,
        borderRadius:8
    },
    addNote:{
        height:50,
        width:50
    },
  });
  

export default styles