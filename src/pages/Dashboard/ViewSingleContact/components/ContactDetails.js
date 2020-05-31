import React from 'react'
import {Image,View} from 'react-native';
import { Content,
    Button,Icon, Left, Right, Body, Text, ListItem,List} from "native-base";
  import { styles } from '../styles'

export default function ContactDetails() {
    return (
        <Content>
         
        <View style={{marginTop:20}}>
        <Image source={require('../../../../assets/images/default-avatar.png')} 
        style={styles.imgStyle}/>
        <Text  style={styles.name} >ifeanyi Ubah Chimaobi</Text>
        </View> 
              <List  >
              <ListItem style={styles.listCustomStyles} >
              <View style={styles.setViewWidth}  >
                      <Button transparent style={styles.flexDirectionForBtn} 
                    //   onPress={()=>{callContact(phonenumber)}}
                      > 
              <Icon style={styles.iconColor} name='md-phone-portrait' />
                    <Text>Phone</Text>
                    </Button>
                       </View>
    
    
            <View style={styles.setViewWidth} >
            <Button transparent  style={styles.flexDirectionForBtn} 
            // onPress={()=>{this.textContact(phonenumber)}}
            > 
              <Icon style={styles.iconColor} name='md-text' />
                    <Text>Text</Text>
                    </Button>
            </View>
    
            <View style={styles.setViewWidth} >
            <Button transparent style={styles.flexDirectionForBtn} 
            // onPress={()=>{this.emailContact(email)}}
            > 
              <Icon style={styles.iconColor} name='mail' />
                    <Text>Mail</Text>
                    </Button>
            </View>    
           
              </ListItem>
             
              <ListItem icon>
                <Left>
                  <Button style={styles.buttonStyle}  
                //   onPress={()=>{this.callContact(phonenumber)}} 
                  >
                    <Icon active name="md-phone-portrait" />
                  </Button>
                </Left>
                <Body>
                  <Text>767890433455444333</Text>
                </Body>
                <Right>
               
                    <Icon active name="md-text"
                    //  onPress={()=>{this.textContact(phonenumber)}} 
                     />
                  
    
                </Right>
              </ListItem>
    
    
              <ListItem icon>
                <Left>
                  <Button style={styles.buttonStyle}  
                //   onPress={()=>{this.emailContact(email)}} 
                  >
                    <Icon active name="mail" />
                  </Button>
                </Left>
                <Body>
                  <Text>Desmond@gmail.com</Text>
                </Body>
                <Right>
                 
    
                </Right>
              </ListItem>
              </List>
    
            </Content>
    )
}
