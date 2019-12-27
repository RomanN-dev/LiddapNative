import React, { Component } from "react";
import { FlatList } from "react-native";
import UserCircularImageButton from '../components/UserCircularButton'
import data from '../constants/data'


export default class ListImageButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: data,
      press: this.props.press
    };
  }

  render() {
    return (
      <FlatList 
        style={{flex:1}}
        horizontal
        showsHorizontalScrollIndicator={false}
        data={this.state.data}
        renderItem={({ item: rowData }) => {
          return (
            <UserCircularImageButton press={this.state.press} name={rowData.title} image={rowData.imageUrl} rubric={rowData.rubric}/>
          );
        }}
        keyExtractor = {(item, index) => `list-item-${index}`}
      />
    );
  }
}