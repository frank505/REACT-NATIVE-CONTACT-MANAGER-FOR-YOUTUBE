import React from 'react'
import { Header, Item, Input, Icon } from 'native-base';
import {useNavigation} from '@react-navigation/native';

export default function SearchBar() {

    const navigation = useNavigation();
   

    const goBack = () =>
    {
        navigation.goBack();
    }

    return (
        <Header searchBar rounded>
          <Item>
            <Icon name="ios-arrow-back" onPress={goBack} />
            <Input placeholder="Search"  />
            <Icon name="ios-search" />
          </Item>
        
        </Header>
    )
}
