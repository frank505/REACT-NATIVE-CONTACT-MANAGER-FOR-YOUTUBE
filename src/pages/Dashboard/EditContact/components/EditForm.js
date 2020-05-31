import React from 'react'
import { Content,View,Label,Text,Icon, Item, Input,Button} from 'native-base'
import { TouchableNativeFeedback,Image } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from '../styles'


export default function  EditForm() {
    return (
       <Content style={styles.container}>
       

       <TouchableNativeFeedback>
             <View  style={styles.imageHolder} >

                
       <Image  source={require("../../../../assets/images/default-avatar.png")} 
       style={styles.defaultImgStyle}/>
           
      <Label    style={styles.labelStyle}>
      <Icon name="image"  style={styles.iconRepImage}></Icon>
     <Text style={styles.textRepImage}> (Optional) Click here to add Image</Text>   
                </Label>
                
          </View>
          </TouchableNativeFeedback>


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



            <Button full iconLeft  style={styles.submitBtn}>
            <Ionicons name="md-person-add" color="#fff" size={20} />
            <Text>Create Contact</Text>
          </Button>
         

       </Content>
    )
}
