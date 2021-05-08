import React from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import { TextInput } from 'react-native-gesture-handler';
import db from '../config'

export default class Sell extends React.Component {

  addItem = () => {
    db.collection('Items').add({
      Item: this.state.Item,
      Amount: this.state.Amount,
    })
  }

  constructor() {
    super();
    this.state = {
      Item: '',
      Amount: '',
    }
  }

  render() {
    return (
      <View>
        <Text>Sell</Text>
          <TextInput placeholder="Enter Item Name" onChangeText={(text) => { this.setState({ Item: text }) }} style={styles.input} />
          <TextInput placeholder="Enter Item Value" onChangeText={(text) => { this.setState({ Amount: text }) }} style={styles.input} />
          <TouchableOpacity onPress={()=>{this.addItem()}} style={{width:100,height:50,borderWidth:5}} >
          <Text>
            Add Item To Shop
          </Text>
        </TouchableOpacity>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  input: {
      backgroundColor: "coral",
      borderWidth: 5,
      width: 100,
      height: 40,
      marginTop: 10,
      borderColor: "blue",
  },
})