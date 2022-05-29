import React,{Component} from 'react';
//import moment from 'moment';
import { 
          View, 
          Text, 
          StyleSheet,
          TouchableOpacity, 
          Dimensions,
          ImageBackground,

        } from  'react-native';
import VLCPlayer from 'react-native-vlc-player';

const calcVLCPlayerHeight = (windowWidth,aspetRatio) => {
          return windowWidth * aspetRatio;
      };

class LiveView extends Component
{
  constructor(){
    super();
    this.state = {
        data: null,
        loaded: true,
        error: null,
        date:'',
      //  c=0
    }
  }
  
 
  render()
  {
    
   // let date = moment().utcOffset('+05:30').format(' DD-MM-YYYY hh:mm:ss a');
    return(
     
      <ImageBackground source={require('./Images/bg.jpg')} style={{height:'100%',width:'100%',alignSelf:'auto'}} >
          <View style={styles.headerView}>
              <Text style={styles.headerText}>  </Text>
              <Text style={styles.headerText}> Live Stream </Text>
          </View>
       
        <View style={styles.mainView}>
                 
            <View style={styles.button} >
              <View style={styles.innerView}> 
                <View style={{width:'95%',height:300,backgroundColor:'white', }}>
                <VLCPlayer
                  source={{
                  initType: 2,
                  hwDecoderEnabled: 1,
                  hwDecoderForced: 1,
                  //Mobile
                 // url:'rtsp://192.168.1.6:8080/h264_ulaw.sdp',
                  uri:
                     //  'rtsp://192.168.56.1:1935/live/MobileCam.stream',
                     'rtsp://admin:biit12@192.168.1.102/user=admin&password=biit12&channel=2&stream=0.sdp',
                  initOptions: [
                      '--no-audio',
                      '--rtsp-tcp',
                      '--network-caching=150',
                      '--rtsp-caching=150',
                      '--no-stats',
                      '--tcp-caching=150',
                      '--realrtsp-caching=150',
                  ],
                  }}
                  videoAspectRatio={""}
                  //videoAspectRatio="16:9"
                  //videoAspectRatio='' deviceWidth '+' ':' + 211.5
                  autoplay={true}
                  autoAspectRatio={true}

                  resizeMode="cover" 
                  isLive={true}
                  autoReloadLive={true}
                  //style={{width:"100%",height:300,marginTop:30}}
                  style={{ height: calcVLCPlayerHeight( Dimensions.get('window').width, 3/4), marginTop: 30}}
                />
                </View>
                
                        
              </View>
               
            </View>
        </View>
           
</ImageBackground>       
      
    )
  }
}
const styles=StyleSheet.create({
  
    headerView:{
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center',
        width:'100%',
        height:'15%',
        backgroundColor:'#3fe2',
    },
    headerText:{
      fontSize:30,
      fontWeight:'bold',
      color:'white',

    },
    innerView:{
      justifyContent:'center',
      alignContent:'center',
      marginTop:20,
      marginLeft:20

    },

    buttonText:{
      color:'white',

    }
    
 
  })
export default LiveView;