import { Dimensions } from 'react-native';


export default shadowOpt = {
    width: Math.round(Dimensions.get('window').width) * 0.9,
    height:Math.round(Dimensions.get('window').height) * 0.17,
    color:"#000",
    border:2,
    radius:5,
    opacity:0.2,
    x:0,
    y:3,
    style:{
        height:'40%', 
        width: Math.round(Dimensions.get('window').width) * 0.9, 
        alignSelf:'center',
    }
}