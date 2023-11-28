import { StyleSheet,  } from 'react-native';


const styles = StyleSheet.create({
    container: {
      flex: 1,
      display:'grid',
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    app:{
        flex:1,
        // alignItems:'',
        width:'100%'
    },
    headLabel:{
        fontSize:'45px',
        fontWeight:'300',
        // alignSelf:'flex-start'
    },
    headTitle:{
        fontSize:'20px',
        fontWeight:'300'
    },
    headComp:{
        // flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        padding:15,
        // width:'100%',
        // borderBottomColor:'black'
    },
    notes:{
        backgroundColor:'white',
        flex:1,
        // color:'purple',
        // height:'',
    },
    noteText:{
        color:'blue',
        textAlign:'center',
    },
    noteDesc:{
        color:'black',
    },
    notePan:{
        // alignSelf:'baseline'
        alignItems:'center',
        justifyContent:'center',
        marginTop:'40%'
    },
    noteComp:{
        backgroundColor:'aqua',
        padding:5,
        justifyContent:'center',
        borderRadius:11,
        
        margin:8,
    },
    // noteBtn:{
    //     backgroundColor:'#202242',
    //     color:'white',
    // },
    titleInp:{
        borderColor:'black',
        borderWidth:3,
        margin:2,
        padding:4,
        borderRadius:9,
        // shadowColor:'black',
        // shadowOpacity:20
        

    },
    descInp:{
        borderColor:'red',
        borderWidth:3,
        margin:2,
        padding:6,
        borderRadius:8
    },
    addNote:{
        height:25,
        width:25
    },
    imgPressable:{
        // width:'15px',
        // height:'15px',
        display:'flex',
        margin:10,
        alignSelf: 'flex-end',
        justifyContent:'flex-end',
        backgroundColor:'#86B404',
        padding:5,
        borderRadius:10
    },
    noteContainer:{
        display:'flex',
        flex:1,
    },
    navBotCont:{
        width:'100%',
        flexDirection:'row',
        gap:'30px',
        justifyContent:'center',
        height:'20px',
    },
    SaveNoteBtnNCancelContainer:{
        display:'flex',
        gap:5,
        margin:4
    },
    noteModal:{
        flex:1,
        margin:10,
        // display:'flex',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center'
    },
    mastView:{
        flex:1
    },
    remContainer:{
        flex:1
    },
    rems:{
        flex:1
    },
    remElement:{
        backgroundColor:'cyan',
        margin:6,
        margin:6,
        borderRadius:11,
        padding:10,
    },
    remDateInp:{
        borderColor:'black',
        borderWidth:3,
        margin:2,
        padding:4,
        borderRadius:9,
        // shadowColor:'black',
        // shadowOpacity:20
        

    },
    remTimeInp:{
        borderColor:'black',
        borderWidth:3,
        margin:2,
        padding:4,
        borderRadius:9,
        // shadowColor:'black',
        // shadowOpacity:20
        

    },
    remDescInp:{
        borderColor:'red',
        borderWidth:3,
        margin:2,
        padding:6,
        borderRadius:8
    },remPan:{
        // width:"75%",z
        alignItems:'center',
        alignSelf:'center',
        marginTop:'40%'

    },
    SaveRemBtnNCancelContainer:{
        // flexDirection:'row',
        justifyContent:'center',
        gap:5
    },
    remModal:{
        flex:1,
    },
    remDate:{
        textAlign:'center',
        color:'black'
    },
    remTime:{
    textAlign:'center',
    color:'red'
    },
    remDesc:{},
    todoContainer:{
        display:'flex',
        flex:1,
    },
    todoPan:{
        alignItems:'center',
        alignSelf:'center',
        marginTop:'40%'
    },
    todoModal:{
        flex:1
    },
    todoContainer:{
        flex:1
    },
    todos:{
        flex:1
    },
    todoComp:{
            flexDirection:'row',
            backgroundColor:'aqua',
            padding:5,
            justifyContent:'center',
            borderRadius:4,
            margin:8,
            alignItems:'center',
    },
  });
  

export default styles