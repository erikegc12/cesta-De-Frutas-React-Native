import React from 'react';
import { StyleSheet, View ,Image,  } from 'react-native';
import Texto from '../../componentes/Texto'



export default function Item({ item: {nome, imagem}}) {
  return <View  style={estilos.item} >
    <Image style={estilos.imagem} source={imagem}></Image>
    <Texto style={estilos.nome} > {nome} </Texto>
    </View>


}

const estilos = StyleSheet.create({


  item: {
    flexDirection: 'row',
    borderBottomWidth:1,
    borderBottomColor: "#ECECEC",
    paddingVertical: 16,
    alignItems: "center" ,
    paddingHorizontal:16,
    marginHorizontal:16,
    
  },

  imagem: {
    width:46,
    height:46,

  },

  nome:{
    fontSize:16,
    lineHeight:26,
    marginLeft:11,
    color:"#464646",

  },

})

// {listas.map (({nome, imagem}) => {
 // return <View key={nome} style={estilos.item} >
 // <Image style={estilos.imagem} source={imagem}></Image>
 // <Texto style={estilos.nome} > {nome} </Texto>
//  </View>
//}) } 