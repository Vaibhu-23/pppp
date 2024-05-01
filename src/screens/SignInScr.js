import {StyleSheet,View,Text, TouchableOpacity, TextInput, Alert} from 'react-native';

import { useState ,useForm} from 'react';
import CustomButton from '../Components/customButton'
import { Auth } from 'aws-amplify';

// import useForm from 'react-hook-form';
//import TextInput from '../Components/TextInput';
  import { useNavigation } from '@react-navigation/native';
const SignInScr=()=>{
    const [loading, setLoading] = useState(false);
    const navigation = useNavigation();

    const [userName,setUserName]=useState("");
    // const {
    //     control,
    //     handleSubmit,
    //     formState: {errors},
    //   } = useForm();
    
    const [pass,setPass]=useState("");
   
    console.log(userName,pass);

    const onSignInPressed = async data => {
        if (loading) {
            return;
          }
      
          setLoading(true);
     try{
      const res = await Auth.signIn(data.userName,data.pass);
      console.log(res);
     // navigation.navigate('Home');
     }catch(e){
      Alert.alert('Oops',e.message);
     }
     setLoading(false);

      };


     const onForgotPawsswordPressed=async()=>{
      navigation.navigate('ForgotPassword');
     }

     const onSignInGoogle=async()=>{
      console.log('forget pass');
     }

     const onSignUpPressed=async()=>{
      navigation.navigate('SignUp');
    }

    return(
        <View tyle={styles.container}>
            
        <Text style={styles.login}>Login</Text>
        <View style={styles.inputContainer}>
     <TextInput
     style={styles.e} 
     placeholder='Enter Your Email' 
     autoCapitalize='none'
      autoCorrect={false}
      value={userName}
      onChangeText={(actualData)=>setUserName(actualData)}
     
     ></TextInput>
     <TextInput style={styles.p} placeholder='Enter Your Password' autoCapitalize='none' autoCorrect={false} secureTextEntry={true}
        value={pass}
        onChangeText={(actualPass)=>setPass(actualPass)}></TextInput>
     
     </View>
     <View style={styles.buttonStyle}>

</View>

<CustomButton style={styles.c}
          text={loading ? 'Loading...' : 'Sign In'}
        onPress={(onSignInPressed)}
        />

<CustomButton text="Forget Pawssword" onPress={onForgotPawsswordPressed}
type="TERTIARY"
/>
<CustomButton style={styles.c} text="sign In with Google" onPress={onSignInGoogle} 
backgroundColor=''
/>
<CustomButton text="Don't have account Create One" onPress={onSignUpPressed}
type="TERTIARY"
/>

     </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,
        alignItems: 'center',
        justifyContent: 'center',
     
    },
    inputContainer:{
       paddingHorizontal:40,
       paddingVertical:30,
    
    },
    login:{
       
       fontSize:20,
       paddingHorizontal:40,
       marginTop:60,
    },
    e:{
        
        paddingHorizontal:5,
        marginBottom:20,
        borderWidth:1,
  
    },
    p:{
       
        paddingHorizontal:5,
        borderWidth:1,
      },
    button:{
        alignItems: 'center',
    backgroundColor: 'orange',
    padding: 10,
    },
    buttonStyle:{
      paddingHorizontal:40,

    }
   
    


})
export default SignInScr;



// import React, {useState} from 'react';
// import {
//   View,
//   Text,
//   Image,
//   StyleSheet,
//   useWindowDimensions,
//   ScrollView,
//   TextInput,
//   Alert,
// } from 'react-native';

// import CustomInput from '../Components/customInput';
// import CustomButton from '../components/CustomButton';
// import SocialSignInButtons from '../components/SocialSignInButtons';
// import {useNavigation} from '@react-navigation/native';
// import {useForm, Controller} from 'react-hook-form';
// import {Auth} from 'aws-amplify';

// const SignInScr = () => {
//   const {height} = useWindowDimensions();
//   const navigation = useNavigation();
//   const [loading, setLoading] = useState(false);

//   const {
//     control,
//     handleSubmit,
//     formState: {errors},
//   } = useForm();

//   const onSignInPressed = async data => {
//     if (loading) {
//       return;
//     }

//     setLoading(true);
//     try {
//       const response = await Auth.signIn(data.username, data.password);
//       console.log(response);
//     } catch (e) {
//       Alert.alert('Oops', e.message);
//     }
//     setLoading(false);
//   };

//   const onForgotPasswordPressed = () => {
//     navigation.navigate('ForgotPassword');
//   };

//   const onSignUpPress = () => {
//     navigation.navigate('SignUp');
//   };

//   return (
//     <ScrollView showsVerticalScrollIndicator={false}>
//       <View style={styles.root}>
//         <Image
//           source={Logo}
//           style={[styles.logo, {height: height * 0.3}]}
//           resizeMode="contain"
//         />

//         <CustomInput
//           name="username"
//           placeholder="Username"
//           control={control}
//           rules={{required: 'Username is required'}}
//         />

//         <CustomInput
//           name="password"
//           placeholder="Password"
//           secureTextEntry
//           control={control}
//           rules={{
//             required: 'Password is required',
//             minLength: {
//               value: 3,
//               message: 'Password should be minimum 3 characters long',
//             },
//           }}
//         />

//         <CustomButton
//           text={loading ? 'Loading...' : 'Sign In'}
//           onPress={handleSubmit(onSignInPressed)}
//         />

//         <CustomButton
//           text="Forgot password?"
//           onPress={onForgotPasswordPressed}
//           type="TERTIARY"
//         />

//         <SocialSignInButtons />

//         <CustomButton
//           text="Don't have an account? Create one"
//           onPress={onSignUpPress}
//           type="TERTIARY"
//         />
//       </View>
//     </ScrollView>
//   );
// };

// const styles = StyleSheet.create({
//   root: {
//     alignItems: 'center',
//     padding: 20,
//   },
//   logo: {
//     width: '70%',
//     maxWidth: 300,
//     maxHeight: 200,
//   },
// });

// export default SignInScr;
