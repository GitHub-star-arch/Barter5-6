import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import db from '../config'

export default class Buy extends React.Component {

  constructor(){
    super();
    this.state={
      ItemInfo: [],
    }
  }

  componentDidMount=()=>{
    var items = []
    db.collection('Items').get().then((doc)=>{
      doc.forEach((details)=>{
        var document = details.data()
        items.push(document)
        this.setState({
          ItemInfo: items,
        })
      })
    })

  }

    render(){
      return (
        <FlatList data={this.state.ItemInfo} renderItem={({item})=>{
          return(
            <View style={{borderBottomWidth: 2,}} >
              <Text>
                Item:{item.Item}
              </Text>
              <Text>
                Amount:{item.Amount},
              </Text>
            </View>
          )
        }} >
        </FlatList>
      );
    }
  }