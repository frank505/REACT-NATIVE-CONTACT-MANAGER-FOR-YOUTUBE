import React,{useState,useEffect} from 'react'
import { Content,View,Label,Text,Icon, Item, Input,Button,ActionSheet} from 'native-base'
import { TouchableNativeFeedback,Image, Alert,SafeAreaView } from 'react-native'
import Ionicons from 'react-native-vector-icons/Ionicons';
import { styles } from '../styles'
import ImagePicker from 'react-native-image-picker';
import { useNavigation,useFocusEffect} from '@react-navigation/native';
import {Formik} from 'formik'
import { disableSubmitButton } from '../../../../helpers/hooksFormInput';
import { cleanUpData,instantiateAbort,setBottomColor,ResponseToast,LoadingToast }
 from '../../../../helpers/componentHelperFunc';
import {useDispatch,useSelector} from 'react-redux';
import IntlPhoneInput from 'react-native-intl-phone-input';
import { TouchableOpacity } from 'react-native-gesture-handler';



export default function CreateForm() {

  const BUTTONS = [
    { text: "Select From File Manager", icon: "image", iconColor: "#2c8ef4" },
    { text: "Take Picture", icon: "camera", iconColor: "#f42ced" },
    { text: "Cancel", icon: "close", iconColor: "#25de5b" }
  ];
   const CANCEL_INDEX = 3;
  
  
   const createResponse = useSelector(state=>state.contactReducer.createContactState);
  
   const ImageOptions = {
    title: 'Select Image',
    customButtons: [{ name: 'user images', title: 'Choose An Image' }],
    storageOptions: {
      skipBackup: true,
      path: 'images',
    },
  };

  const [fields, setFields] = useState({
    firstname:"",
    lastname:"",
    email:"",
    mobile_no:"",
   });
   

   const [MobileErr, setMobileErr] = useState("")

  const [ProfileImage, setProfileImage] = useState("");

  const EmailCheckRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
  
    const abortEffect = instantiateAbort();

    const [disable, setDisable] = useState(true)

 const LoadActionSheetForFile = () =>{
    ActionSheet.show(
      {
        options: BUTTONS,
        cancelButtonIndex: CANCEL_INDEX,
        title: "Choose An Image"
      },
      buttonIndex => {
        try{
          if(BUTTONS[buttonIndex].text=="Take Picture")
          {
           return openCamera();
          }else if(BUTTONS[buttonIndex].text=="Select From File Manager")
          {
            return openFIleImage(); 
          }

        }catch(ex)
        {
        console.log(ex)
        }finally{
          ActionSheet.hide();
        }
                
      }
    )
  }
  const disableButtonIfFieldsAreEmpty = (dataObject,MobileErr)=>
  {
    if(MobileErr!="")
    {
      setDisable(true);
      return;
    }else
    {
      disableSubmitButton(dataObject,setDisable);
    }
  }


   /*
   * ensure button remains disable until all form fields are filled
    */
   useEffect(() => 
   {
     
      disableButtonIfFieldsAreEmpty(fields,MobileErr)
   
     return function cleanup()
     {
       cleanUpData(abortEffect);
     }

    }, [fields,MobileErr]);

 const openFIleImage = () =>{

  try{
    const base64UriAttach = "data:image/jpeg;base64,";
  
  return ImagePicker.launchImageLibrary(ImageOptions, (response) =>
   {
   setProfileImage(base64UriAttach+response.data);
    });
  }catch(e)
  {
    Alert.alert(
      "there seems to be a problem please try again",
      "Contact Image Selection Error Please Try Again",
      [
         {
            text:"Ok",
            onPress:()=> console.log('cancel clicked'),
            style:"cancel"
         },
      
      ]
  )
  }

 }
 

 const onChangeNumber = ({dialCode, unmaskedPhoneNumber, phoneNumber, isVerified}) => 
 {
  console.log(dialCode, unmaskedPhoneNumber, phoneNumber, isVerified);

     setFields({...fields,mobile_no:phoneNumber});
    if(phoneNumber=="")
   {
    setMobileErr("Phone Number Field is Required");
    _Phone.setNativeProps({ style: { borderBottomColor: 'red' } })
    return;
   }   
   if(isVerified==false)
    {
         setMobileErr('invalid phone Number');
         _Phone.setNativeProps({ style: { borderBottomColor: 'red' } });
         return;
    }
    if(isVerified==true && phoneNumber!="")
    {
      setMobileErr("");
      _Phone.setNativeProps({ style: { borderBottomColor: 'green' } })
    }  
};


  const displayPhoneErrorOnceViewIsClicked = () =>
  {
   if(fields.mobile_no=="")
   {
    _Phone.setNativeProps({ style: { borderBottomColor: 'red' } });
   }
   
  }




 const openCamera = ()=>{
   try{
    const base64UriAttach = "data:image/jpeg;base64,";
    return ImagePicker.launchCamera(ImageOptions, (response) => {
     setProfileImage(base64UriAttach+response.data);
     });
   }catch(e)
   {
    Alert.alert(
      "there seems to be a problem please try again",
      "Contact Image Selection Error Please Try Again",
      [
         {
            text:"Ok",
            onPress:()=> console.log('cancel clicked'),
            style:"cancel"
         },
      
      ]
  )
   }
 
 }


 const validation = () =>
 {
     const errors = {};
     errors.firstname = fields.firstname==""? 'Firstname is Required':'';
     errors.lastname = fields.lastname==""? 'Lastname is Required':'';
     errors.email =  !fields.email? 'Email Field is Required': '';
     errors.email = !EmailCheckRegex.test(fields.email)?'Invalid email address':'';
 
   
     return errors;
 }


/**
 * disable button when we are submitting our form during the time interval we wait 
 * for response to come to us from our react application
 */
 useEffect(() => 
 {
   disableButtonOnSubmit();

   return function cleanup()
   {
     cleanUpData(abortEffect);
   }

 }
 , [createResponse])

    
const disableButtonOnSubmit = () =>
 {
   if(createResponse=="loading")
   {
     setDisable(true);
   }else if(createResponse!="" && createResponse!="loading")
   {
      setDisable(false);
   }
 }




    return (
       <Content style={styles.container}>
       
       <Formik  initialValues={fields}
                    validate={validation}
                    >

                   {({
                          errors,
                          touched,
                          handleBlur,
                          handleChange,
                          /* and other goodies */
                      }) => (
               <View>

       <TouchableNativeFeedback onPress={LoadActionSheetForFile}>
             <View  style={styles.imageHolder} >

            

           {
            ProfileImage==''
            ?
            <Image onPress={LoadActionSheetForFile} 
       source={require("../../../../assets/images/default-avatar.png")} 
       style={styles.defaultImgStyle}/>
            : 
            <Image onPress={LoadActionSheetForFile} source={{uri: ProfileImage}} 
            style={styles.defaultImgStyle}/>
          }

      <Label   onPress={LoadActionSheetForFile} style={styles.labelStyle}>
      <Icon name="image"  style={styles.iconRepImage}></Icon>
     <Text style={styles.textRepImage}> (Optional) Click here to add Image</Text>   
                </Label>
                
          </View>
          </TouchableNativeFeedback>


          <Item floatingLabel   
            style={styles.marginTopStyle}
            ref={component => _firstName = component}
            >
              <Label>Firstname</Label>
              <Input
              onChangeText={(firstname)=>{
                setFields({...fields,firstname:firstname}),
                setBottomColor(_firstName,firstname,null)
              }}
              onTouchStart={()=>setBottomColor(_firstName,fields.firstname,null)}
              onBlur={handleBlur("firstname")}
              onChange={handleChange("firstname")}
              value={fields.firstname}
              />
            </Item>
            <Label style={styles.labelError}>
                { errors.firstname && touched.firstname && errors.firstname}</Label>
          

            <Item floatingLabel
            style={null}
            ref={component => _lastName = component}
            >
              <Label>Lastname</Label>
              <Input 
             onChangeText={(lastname)=>{
              setFields({...fields,lastname:lastname}),
              setBottomColor(_lastName,lastname,null)
            }}
            onTouchStart={()=>setBottomColor(_lastName,fields.lastname,null)}
              onBlur={handleBlur("lastname")}
              onChange={handleChange("lastname")} 
              value={fields.lastname}/>
            </Item>
            <Label style={styles.labelError}>
                { errors.lastname && touched.lastname && errors.lastname}</Label>

            <Item floatingLabel 
            style={null}
            ref={component=>_Email = component}
            >
              <Label>Email</Label>
              <Input 
              onChangeText={(email)=>{
                setFields({...fields,email:email}),
                setBottomColor(_Email,email,"email")
              }}
              onTouchStart={()=>setBottomColor(_Email,fields.email,"email")}
              onBlur={handleBlur("email")}
              onChange={handleChange("email")}
              value={fields.email}
              />

            </Item>
            <Label style={styles.labelError}>
              {errors.email && touched.email && errors.email}
            </Label>


            <View onTouchStart={displayPhoneErrorOnceViewIsClicked}>
           <Item style={null}
          
            ref={component=>_Phone = component} >
            
        <IntlPhoneInput
        placeholder="Phone Number"
        onChangeText={onChangeNumber} 
        phoneInputStyle={{fontSize:17,color:'black'}}
        value={fields.mobile_no}
        defaultCountry="NG" 
        />
      </Item>
      </View>


      <Label style={styles.labelError}>
              {MobileErr}
            </Label> 

           



            <Button full iconLeft  style={styles.submitBtn}
            disabled={disable}
            >
            <Ionicons name="md-person-add" color="#fff" size={20} />
            <Text>Create Contact</Text>
          </Button>
          

          </View>
          )}
           </Formik>

       </Content>
    )
}
