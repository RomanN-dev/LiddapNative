import * as React from 'react';
import {StyleSheet, Text,TouchableOpacity, Platform } from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {PERMISSIONS, RESULTS, check, request} from 'react-native-permissions';

const FONT_PER_DIVICE = Platform.OS == 'ios' ? 'Avenir': null
const options = {
  title: 'Select Avatar',
  customButtons: [{ name: 'fb', title: 'Choose Photo from Facebook' }],
  storageOptions: {
    skipBackup: true,
    path: 'images',
  },
};

export default class ImageUploader extends React.Component {
  state = {
    image: null,
  };

  render() {
    
    return (
          <TouchableOpacity onPress={this._pickImage}>
            <Text style={styles.changeProfilePictureButton}>Change profile picture</Text>
        </TouchableOpacity>
    );
  }


  getPermissionAsync = async () => {
    if (Platform.OS == 'ios') {
      const { status } = await request(PERMISSIONS.IOS.PHOTO_LIBRARY)
      if (status !== 'granted') {
        alert('Sorry, we need camera roll permissions to make this work!');
      }
    }
  }

  _pickImage = async () => {
    await this.getPermissionAsync();
    await ImagePicker.launchImageLibrary(options)

  //   let result = await ImagePicker.launchImageLibraryAsync({
  //     mediaTypes: ImagePicker.MediaTypeOptions.Images,
  //     allowsEditing: true,
  //     aspect: [4, 3],
  //     quality: 1
  //   });

  //   console.log(result);

  //   if (!result.cancelled) {
  //     this.setState({ image: result.uri });
  //   }
  };
}

const styles = StyleSheet.create({

  changeProfilePictureButton: {
    fontFamily: FONT_PER_DIVICE,
    fontSize: 19,
    color: '#F54B64',
  },
})