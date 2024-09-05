import { Alert } from "react-native";

export const DeleteAlert = ({handleIconPress}:{handleIconPress: any}) =>
    Alert.alert('Delete File', 'Do you Want To Delete This File', [
      {
        text: 'Cancel',
        onPress: () => console.log('Cancel Pressed'),
        style: 'cancel',
      },
      {text: 'Delete', onPress:(handleIconPress)},
    ]);