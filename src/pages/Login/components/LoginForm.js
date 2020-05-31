import React from 'react'
import { Content, Form, Item, Input, Label,Button,Text } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from '../styles'
import { useNavigation } from '@react-navigation/native';


export default function LoginForm() {
  
  const navigation = useNavigation();

    const goToRegisterPage = () =>
    {
    navigation.navigate('Register');
    }

    const submitData = () =>
    {
      navigation.navigate('Dashboard');
    }


    return (
    
        <Content style={styles.container}  >
          <Form>
           

           <Item floatingLabel>
              <Label>Email</Label>
              <Input />
            </Item>

            <Item floatingLabel last>
              <Label>Password</Label>
              <Input />
            </Item>
           
            
            <Button full iconLeft  style={styles.submitBtn} onPress={submitData}>
            <Ionicons name="ios-contact" color="#fff" size={20} />
            <Text>Login</Text>
          </Button>

          <Button full iconLeft transparent  onPress={goToRegisterPage}  >
            <Text>Click Here To Register</Text>
          </Button>

          </Form>
        </Content>   


    )  
}
