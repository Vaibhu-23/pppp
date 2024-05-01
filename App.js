// import React from 'react';
// import { NavigationContainer } from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import CreateUser from './src/screens/CreateUser';
// import Home from './src/screens/Home';

// import { Amplify, Auth } from 'aws-amplify';
// import amplifyconfig from './src/amplifyconfiguration.json';
// Amplify.configure(amplifyconfig);
// const Stack = createStackNavigator();

// const App = () => {
//   return (
   
    
//      <CreateUser></CreateUser>,
//     <Home/>
//     );
// };

// export default App;


// import React from 'react';
// import { NavigationContainer} from '@react-navigation/native';
// import { createStackNavigator } from '@react-navigation/stack';
// import { createNativeStackNavigator } from '@react-navigation/native-stack';
// import SignInScr from './src/screens/SignInScr';
// import SignUpScr from './src/screens/SignUpScr'
// import { Amplify, Auth } from 'aws-amplify';
// import amplifyconfig from './src/amplifyconfiguration.json';
// import ConfirmEmail from './src/screens/confirmEmail';
// import Home from './src/screens/Home';
// import ForgotPass from './src/screens/ForgotPass';
// import NewPass from './src/screens/NewPass';
// import { SafeAreaView, View } from 'react-native';
// import Nav from './src/Nav';
// import config from './src/aws-exports';
// Amplify.configure(config);
// const App = () => {
//   const RootStack = createNativeStackNavigator();
//   return (
//    <Nav/>
//     );
// };
// export default App;


import React from 'react';
import { Button } from 'react-native';

import { Amplify } from 'aws-amplify';
import { Authenticator, useAuthenticator } from '@aws-amplify/ui-react-native';

import awsExports from './src/aws-exports';
Amplify.configure(awsExports);

function SignOutButton() {
  const { signOut } = useAuthenticator();
  return <Button title="Sign Out" onPress={signOut} />;
}

function App() {
  return (
    <Authenticator.Provider>
      <Authenticator>
        <SignOutButton />
      </Authenticator>
    </Authenticator.Provider>
  );
}

export default App;