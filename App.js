/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';

import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
  Image
} from 'react-native';




const App =()=> {




  return (

    <>
    <View style={styles.container}>
     
     <View style={styles.box1}>
     <Image
     style={styles.tinyLogo}
     source={{
       uri:'https://images.unsplash.com/photo-1641305286305-9f267722fd0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
     }}
     />
     </View>


     <View style={styles.box2}>
     {/* <Image
     style={styles.tinyLogo}
     source={{
       uri:'https://images.unsplash.com/photo-1641305286305-9f267722fd0b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw1fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60'
     }}
     /> */}
<Image
     style={styles.tinyLogo}
     source={ require('./images/p1.jpg')
     }
     />

     </View>



     <View style={styles.box3}>
     <Image
        style={styles.tinyLogo}
        source={{
          uri: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADMAAAAzCAYAAAA6oTAqAAAAEXRFWHRTb2Z0d2FyZQBwbmdjcnVzaEB1SfMAAABQSURBVGje7dSxCQBACARB+2/ab8BEeQNhFi6WSYzYLYudDQYGBgYGBgYGBgYGBgYGBgZmcvDqYGBgmhivGQYGBgYGBgYGBgYGBgYGBgbmQw+P/eMrC5UTVAAAAABJRU5ErkJggg==',
        }}
      />
     
     </View>
      
    </View>
    </>
    
  );
};

const styles = StyleSheet.create({
container:{
  flex:1,
  backgroundColor:'grey',
 
  
},

box1:{
  flex:2,
  backgroundColor:'red'
  
},

box3:{
  flex:1,
  backgroundColor:'white'
  
},
box2:{
  flex:3,
  backgroundColor:'green'

},
tinyLogo:{
  width:'100%' ,
  height:'100%'

}

});

export default App;
