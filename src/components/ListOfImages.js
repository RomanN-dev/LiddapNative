import React, { Component } from "react";
import { FlatList } from "react-native";
import UserSquareImage from '../components/UserSquareImage'
import data from '../constants/data'

export default class ListOfImage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data
    };
  }

  render() {
    return (
      <FlatList 
        style={{paddingLeft: '5%'}}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={this.state.data}
        renderItem={({ item: rowData }) => {
          return (
            <UserSquareImage name={rowData.title} image={rowData.imageUrl}/>
          );
        }}
        keyExtractor = {(item, index) => `list-item-${index}`}
      />
    );
  }
}