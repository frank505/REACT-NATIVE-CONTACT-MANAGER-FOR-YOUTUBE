import React from 'react'
import { Content, Form, Item, Input, Label,Button,Text } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from '../styles'
import { useNavigation } from '@react-navigation/native';


export default function RegisterForm() {
  
    const navigation = useNavigation();

    const goToLoginPage = () =>
    {
    navigation.navigate('Login');
    }


    return (
    
        <Content style={styles.container}  >
          <Form>
            <Item floatingLabel>
              <Label>Firstname</Label>
              <Input />
            </Item>

            <Item floatingLabel>
              <Label>Lastname</Label>
              <Input />
            </Item>


            <Item floatingLabel>
              <Label>Email</Label>
              <Input />
            </Item>

            <Item floatingLabel>
              <Label>Mobile Number</Label>
              <Input />
            </Item>


            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
           
            
            <Button full iconLeft  style={styles.submitBtn}>
            <Ionicons name="ios-contact" color="#fff" size={20} />
            <Text>Register</Text>
          </Button>

          <Button full iconLeft transparent  onPress={goToLoginPage}  >
            <Text>Click Here To Login</Text>
          </Button>

          </Form>
        </Content>   


    )  
}
