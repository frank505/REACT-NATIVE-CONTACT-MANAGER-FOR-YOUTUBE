import React from 'react'
import { Text,Button,View } from 'native-base'
import {useNavigation} from '@react-navigation/native';

export default function ContactSearch() {

    const navigation = useNavigation();

   const goBack = () =>
   {
       navigation.goBack();
   }

    return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 30 }}>This is a modal!</Text>
        <Button onPress={goBack}>
        <Text>go Back</Text>
            </Button>
      </View>
     
    )
}
