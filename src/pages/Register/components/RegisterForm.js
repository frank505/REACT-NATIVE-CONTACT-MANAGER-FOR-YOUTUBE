import React,{useState,useEffect} from 'react'
import { Content, Form, Item, Input, Label,Button,Text, View } from 'native-base';
import Ionicons from 'react-native-vector-icons/Ionicons';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {styles} from '../styles'
import { useNavigation } from '@react-navigation/native';
import {Formik} from 'formik'
import { disableSubmitButton } from '../../../helpers/hooksFormInput';
import { cleanUpData,instantiateAbort } from '../../../helpers/componentHelperFunc';



export default function RegisterForm() {
  
    const navigation = useNavigation();
  
    const [fields, setFields] = useState({
     firstname:"",
     lastname:"",
     email:"",
     password:""
    });

    const abortEffect = instantiateAbort();

    const [disable, setDisable] = useState(true)

    const goToLoginPage = () =>
    {
    navigation.navigate('Login');
    }

    const disableButtonIfFieldsAreEmpty = (dataObject)=>
    {
      disableSubmitButton(dataObject,setDisable);
    }
   
   /*
   * ensure button remains disable until all form fields are filled
    */
    useEffect(() => 
     {
       
       disableButtonIfFieldsAreEmpty(fields)
     
       return function cleanup()
       {
         cleanUpData(abortEffect);
       }
 
      }, [fields]);

   
    const validation = () =>
    {
        const errors = {};
        errors.firstname = fields.firstname==""? 'Firstname is Required':'';
        errors.lastname = fields.lastname==""? 'Lastname is Required':'';
        errors.email =  !fields.email? 'Email Field is Required': '';
        errors.email = !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(fields.email)?'Invalid email address':'';
        errors.password = fields.password==""? 'Password Field is Required': '';
    
       
 
        return errors;
    }

  

    const handleSubmitAfterFormikValidation = () =>
    {
        console.log(fields);
    }

    return (
    
        <Content style={styles.container}  >

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

            <Item floatingLabel   
            style={styles.changeTextFieldColor}
            >
              <Label>Firstname</Label>
              <Input
              onChangeText={(firstname)=>setFields({...fields,firstname:firstname})}
              onBlur={handleBlur("firstname")}
              onChange={handleChange("firstname")}
              value={fields.firstname}
              />
            </Item>
            <Label style={styles.labelError}>
                { errors.firstname && touched.firstname && errors.firstname}</Label>
          

            <Item floatingLabel
            >
              <Label>Lastname</Label>
              <Input 
              onChangeText={(lastname)=>setFields({...fields,lastname:lastname})}
              onBlur={handleBlur("lastname")}
              onChange={handleChange("lastname")} 
              value={fields.lastname}/>
            </Item>
            <Label style={styles.labelError}>
                { errors.lastname && touched.lastname && errors.lastname}</Label>

            <Item floatingLabel >
              <Label>Email</Label>
              <Input 
              onChangeText={(email)=>setFields({...fields,email:email})}
              onBlur={handleBlur("email")}
              onChange={handleChange("email")}
              value={fields.email}
              />
            </Item>
            <Label style={styles.labelError}>
              {errors.email && touched.email && errors.email}
            </Label>

            <Item floatingLabel
            >
            <Label>Password</Label>
              <Input
              onChangeText={(password)=>setFields({...fields,password:password})}
              onBlur={handleBlur("password")}
              onChange={handleChange("password")}
              value={fields.password} 
              secureTextEntry={true}
              />
            </Item>
            <Label style={styles.labelError}>
              {errors.password && touched.password && errors.password}
            </Label>
            
            <Button full iconLeft 
            style={styles.submitBtn} 
            onPress={handleSubmitAfterFormikValidation}
            disabled={disable}
            >
            <Ionicons name="ios-contact" color="#fff" size={20} />
            <Text>Register</Text>
          </Button>

          <Button full iconLeft transparent 
          onPress={goToLoginPage}  >
            <Text>Click Here To Login</Text>
          </Button>
          </View>
         )}
          </Formik>
        </Content>   


    )  
}
