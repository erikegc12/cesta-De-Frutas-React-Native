import React from 'react';
import { StyleSheet, View, FlatList} from 'react-native';

import TopoCesta from './componentes/TopoCesta'; 
import DetalhesCesta from './componentes/DetalhesCesta';
import Botao from "../../telas/TelaCesta/componentes/botao";
import Item from './Item'
import Texto from "../../componentes/Texto"


export default function Cesta({topocesta,detalhesCesta,itens}) {
  return <>

<FlatList 
    data={itens.listas}
    renderItem={Item}
    keyExtractor={({nome}) => nome}
    ListHeaderComponent={() => {
     return  <>
          <TopoCesta {...topocesta} ></TopoCesta>
          <View style={estilos.cesta}>
          <DetalhesCesta {...detalhesCesta}></DetalhesCesta>
          <Botao></Botao>
          <Texto style={estilos.titulo}>{itens.titulo}</Texto>
          </View>
      </>
    }}
  ></FlatList>

    
   
    </>
}

const estilos = StyleSheet.create({

  titulo: {
    color:'#464646',
    fontWeight:"bold",
    marginTop:32,
    marginBottom:8,
    fontSize:20,
    lineHeight:32,
    },

  cesta: {
    paddingVertical: 8,
    paddingHorizontal: 16,
  },
 
});