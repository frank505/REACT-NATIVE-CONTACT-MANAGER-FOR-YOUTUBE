import React,{useState} from 'react'
import { List, 
    ListItem, Left, Body, Right, 
    Thumbnail, Text as NativeBaseText,ActionSheet  } from 'native-base';
import {
    FlatList,
    ActivityIndicator,
    Alert
  } from 'react-native';
 import {useNavigation} from '@react-navigation/native';
  

  const BUTTONS = [
    { text: "Edit Contact", icon: "image", iconColor: "#2c8ef4" },
    { text: "Delete Contact", icon: "trash", iconColor: "#f42ced" },
    { text: "View Contact", icon: "md-person", iconColor: "#f42ced" },
    { text: "Cancel", icon: "close", iconColor: "#25de5b" }
  ];
  
   const CANCEL_INDEX = 3;

  const item = [
    {
      id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
      title: 'First Item',
    },
    {
      id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
      title: 'Second Item',
    },
    {
      id: '58694a0f-3da1-471f-bd96-145571e29d7d2',
      title: 'Fourth Item',
    },
    {
        id: 'bd7acbea-sc1b1-46c2-aed5-3ad53abb28ba',
        title: 'Fifth Item',
      },
      {
        id: '3ac68afc3-c605-48d3-a4f8-fbd91aa97f63',
        title: 'Sixth Item',
      },
      {
        id: '58694a0sf-3da1-471f-bd96-145571e29d72',
        title: 'Seventh Item',
      },
      {
        id: '58694a0fs-3da1-471f-bd96-145571e29d7d2',
        title: 'Eight Item',
      },
      {
          id: 'bd7acbeas-dsc1b1-46c2-aed5-3ad53abb28ba',
          title: 'Ninth Item',
        },
        {
          id: '3ac68afc3-sdc605s-48d3-a4f8-fbd91aa97f63',
          title: 'Tenth Item',
        },
        {
          id: '58694a0sf-a3da1-471f-bd96-145571e29d72',
          title: 'Eleventh Item',
        },
        {
            id: '58694a0sfss-x3da1-471f-bd96-145571e29d72',
            title: 'Twelfth Item',
          },
          {
            id: '58694a0sfd-a3da1-471f-bd96-145571e29d72',
            title: 'Eleventh Item',
          },
          {
              id: '58694a0sfs-x3da1-471f-bd96-145571e29d72',
              title: 'Twelfth Item',
            },
            {
                id: '58694a0sfs-a3da1-471f-bd96-145571e29d72',
                title: 'Eleventh Item',
              },
              {
                  id: '58694a0sfws-x3da1-471f-bd96-145571e29d72',
                  title: 'Twelfth Item',
                },
  {
            id: '58694a0sfds-a3da1-471f-bd96-145571e29d72',
            title: 'Eleventh Item',
          },
          {
              id: '58694a0sfss-x3da1-471f-bd96-145571e29d72',
              title: 'Twelfth Item',
            },
            {
                id: '58694a0sdfs-a3da1-471f-bd96-145571e29d72',
                title: 'Eleventh Item',
              },
              {
                  id: '58694aw0sfws-x3da1-471f-bd96-145571e29d72',
                  title: 'Twelfth Item',
                },
  ];



export default function ItemList() {

    const [refreshBool, setrefreshBool] = useState(false);
   
    const navigation = useNavigation();

    const fetchMore = () =>
     {
             console.log('fetching more'); 
     }
 
   const  loadActionSheet = () =>
{
return ActionSheet.show(
{
options: BUTTONS,
cancelButtonIndex: CANCEL_INDEX,
title: "Perform An Action"
},
buttonIndex => {
try{
if(BUTTONS[buttonIndex].text=="Edit Contact")
{
  navigation.navigate("EditContact");
  
}else if(BUTTONS[buttonIndex].text=="Delete Contact")
{
 
    Alert.alert(
        "Are You Sure You Want to delete Contact?",
        "Item Delete Action",
        [
           {
              text:"Cancel",
              onPress:()=> console.log('cancel clicked'),
              style:"cancel"
           },
           {
               text:"OK",onPress:()=>deleteItem()
           },
    
        ]
    )

}else if(BUTTONS[buttonIndex].text=="View Contact")
{
   navigation.navigate("ViewSingleContact");
}

}catch(ex)
{
console.log(ex)
}finally{
ActionSheet.hide();
} 
}
);
}


  const deleteItem = () =>
  {
    Alert.alert(
        "Item Deleted Successfully",
        "item delete action was successfull",
        [
           {
               text:"OK",onPress:()=>console.log('deleted')
           },
    
        ]
    )
  }
   
   const handleRefresh = () =>
   {
       console.log('refreshing content');
   }
 
   const renderItem = (item ,index) =>
   {
       return(
         <List >
         <ListItem avatar onPress={loadActionSheet}>
           <Left>
             <Thumbnail source={require( "../../../../assets/images/default-avatar.png") } />
           </Left>
           <Body>
 <NativeBaseText>{item.title}</NativeBaseText>
             <NativeBaseText note>Doing what you like will always keep you happy . .</NativeBaseText>
           </Body>
           <Right>
             <NativeBaseText note>3:43 pm</NativeBaseText>
           </Right>
         </ListItem>
       </List>
       );
      
   }
 
   const renderFooter = () =>
   {
        if(refreshBool==false){
            return null;
        }
         return <ActivityIndicator size="large" />;
       
   }
 

    return (
        <FlatList
        data={item}
        renderItem={({ item, index }) => renderItem(item, index)}
        keyExtractor={(item, index) => item.id.toString()}
        onEndReached={fetchMore}
        onEndReachedThreshold={0.1}
        onRefresh={handleRefresh}
        ListFooterComponent={renderFooter}
        refreshing={refreshBool}
        initialNumToRender={10}
      />
    )
}
