import React from 'react'; 
import {StyleSheet, Pressable, Alert, Text, View} from 'react-native'; 
import Texto from "../../../componentes/Texto";


const App = () => { 
  return ( 
    <View style={styles.container}> 
      <Pressable 
        style={({pressed}) => [ 
          { 
            backgroundColor: pressed ? '#1EEB79' : '#2A9f85', 
          }, 
          styles.button, 
        ]} 
        onPress={() => Alert.alert('Button Pressionado!')}> 
        <Texto style={styles.buttonText}>Comprar</Texto> 
      </Pressable> 
    </View> 
  ); 
}; 

const styles = StyleSheet.create({ 
  container: {  
    backgroundColor: 'white', 
    justifyContent: 'center', 
    alignItems: 'center', 
    marginTop: 20,
  }, 
  button: { 
    borderRadius: 8, 
    padding: 6, 
    height: 50, 
    width: '95%', 
    justifyContent: 'center', 
    alignItems: 'center', 
    elevation: 5, 
  }, 
  buttonText: { 
    fontSize: 16, 
    color: 'white', 

  }, 
}); 

export default App;