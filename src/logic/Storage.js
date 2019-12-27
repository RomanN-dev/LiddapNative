import {AsyncStorage} from 'react-native'
import {Alert} from 'react-native'


export class Storage {

    async _storeData (Key ,Item) {
        try {
          await AsyncStorage.setItem(Key, Item);
        } catch (error) {
          // Error saving data
        }
      };
    
     async _retrieveData (Item) {
        try {
          const value = await AsyncStorage.getItem(Item);
          if (value !== null) {
            // We have data!!
            console.log(value);
          } else {
            console.log('data empty')
          }
        } catch (error) {
            Alert.alert(`Somthing where wrong please try again`);
        }
      };

      async _removeData (Item) {
          try {
            const value = await AsyncStorage.removeItem(Item)
            if (value !== null) {
                // We have data!!
                console.log(value);
            }
          } catch(error) {
            console.log(error)
          }
      }
}

