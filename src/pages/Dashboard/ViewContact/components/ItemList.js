import React,{useState,useEffect} from 'react'
import { List, 
    ListItem, Left, Body, Right, 
    Thumbnail, Text as NativeBaseText,ActionSheet,View  } from 'native-base';
import {
    FlatList,
    ActivityIndicator,
    Alert
  } from 'react-native';
 import {useNavigation} from '@react-navigation/native';
import { useSelector,useDispatch } from 'react-redux';
import ContentLoader, { Rect, Circle, BulletList,List as ListLoader } from 'react-content-loader/native'
import { GetContactActions } from '../../../../store/actions/ContactsAction';




export default function ItemList() {

  const BUTTONS = [
    { text: "Edit Contact", icon: "image", iconColor: "#2c8ef4" },
    { text: "Delete Contact", icon: "trash", iconColor: "#f42ced" },
    { text: "Contact Me", icon: "md-person", iconColor: "#f42ced" },
    { text: "Cancel", icon: "close", iconColor: "#25de5b" }
  ];
  
   const CANCEL_INDEX = 3;

    const [refreshBool, setrefreshBool] = useState(false);
   
    const getResponse = useSelector(state=>state.contactReducer.getContactState);

    const [responseData, setResponseData] = useState([]);

    const [initPager, setinitPager] = useState("1");
   
    const dispatch = useDispatch();

    const navigation = useNavigation();

    useEffect(() => {
      
      dispatch(GetContactActions(initPager));

      return () => {
      
      }
    }, []);

    useEffect(() => {
      
      if(getResponse!="" && getResponse!=="loading")
      {
        if(getResponse.hasOwnProperty('data') && getResponse.data.hasOwnProperty("data"))
        {
          let currentPage = getResponse.data.current_page;
          let nextPage = currentPage + 1;
          setinitPager(nextPage);
          setResponseData(responseData => [...responseData, ...getResponse.data.data]);
          setrefreshBool(false);
        }  
        
      }
      return () => {
        
      }
    }, [getResponse])

    const fetchMore = () =>
     {
             if(initPager==1)
             {

             } else
             {
               setrefreshBool(true);
             dispatch(GetContactActions(initPager));
             }
     }
 
   const  loadActionSheet = (contactId) =>
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

}else if(BUTTONS[buttonIndex].text=="Contact Me")
{
   navigation.navigate("ViewSingleContact",{
     contactId:contactId
   });
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
     setinitPager("1");
     setResponseData("");
       dispatch(GetContactActions("1"));
   }


   const loadAnimation = () =>
   {
     return (
      <View style={{width:'90%',marginLeft:"5%",marginRight:'5%'}}>
      <ContentLoader 
      speed={1}
      >
<Rect x="0" y=" 30"  width="100%" height="100" />
<Rect x="0" y="60"  width="100%" height="100" />
<Rect x="0" y="90"  width="100%" height="100" />
<Rect x="0" y="120"  width="100%" height="100" />
<Rect x="0" y="150"  width="100%" height="100" />
<Rect x="0" y="180"  width="100%" height="100" />
<Rect x="0" y="210"  width="100%" height="100" />
<Rect x="0" y="240"  width="100%" height="100" />
<Rect x="0" y="270"  width="100%" height="100" />
<Rect x="0" y="300"  width="100%" height="100" />
<Rect x="0" y="330"  width="100%" height="100" />
<Rect x="0" y="360"  width="100%" height="100" />
<Rect x="0" y="390"  width="100%" height="100" />
<Rect x="0" y="420"  width="100%" height="100" />
<Rect x="0" y="450"  width="100%" height="100" />
<Rect x="0" y="480"  width="100%" height="100" />
<Rect x="0" y="510"  width="100%" height="100" />
      </ContentLoader>
   </View>
     );
   }

 
   const renderItem = (item ,index) =>
   {
    
       return(
         <List >
         <ListItem avatar onPress={(e)=>loadActionSheet(item.id)}>
           <Left>
             <Thumbnail source={require( "../../../../assets/images/default-avatar.png") } />
           </Left>
           <Body>

 <NativeBaseText>{item.firstname+" "+item.lastname}</NativeBaseText>
       <NativeBaseText note>{item.email+","+item.phonenumber}</NativeBaseText>
           </Body>
           <Right>
       <NativeBaseText note>{item.created_at}</NativeBaseText>
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
      <>
      {
        ( (responseData=="" || responseData=="loading") && initPager==1)?
          loadAnimation()
        :
        responseData==null ?
        loadAnimation()
        :
        <FlatList
        data={responseData}
        renderItem={({ item, index }) => renderItem(item, index)}
        keyExtractor={(item, index) => index.toString()}
        onEndReached={fetchMore}
         onEndReachedThreshold={0.1}
        onRefresh={handleRefresh}
        ListFooterComponent={renderFooter}
         refreshing={refreshBool}
      />
      }
      
      </>
    )
}  
