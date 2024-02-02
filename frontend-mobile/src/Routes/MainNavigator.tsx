import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Register from '../pages/Register';
import ForgotPassword from '../pages/ForgotPassword';
import Courses from '../pages/Courses';
import Lessons from '../pages/Lessons';
import Perfil from '../pages/Perfil';
import CreateCourse from '../pages/Criação/CreateCourse';
import CreateLesson from '../pages/Criação/CreateLesson';
import WatchLesson from '../pages/Watch';
import EditPerfil from '../pages/EditPerfil';

const Stack = createStackNavigator();

const Navigation = () => {
  
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName='Home' screenOptions={{ headerShown: false,}}>
      <Stack.Screen name='Login' component={Login} />
      <Stack.Screen name='Register' component={Register} />
      <Stack.Screen name='ForgotPassword' component={ForgotPassword} />
      <Stack.Screen name='Home' component={Home} />
      <Stack.Screen name='Courses' component={Courses} />
        <Stack.Screen name='CreateCourse' component={CreateCourse} />
      <Stack.Screen name='Perfil' component={Perfil} />
      <Stack.Screen name='EditPerfil' component={EditPerfil} />
      <Stack.Screen name='Lessons' component={Lessons} />
        <Stack.Screen name='CreateLesson' component={CreateLesson} />
        <Stack.Screen name='Watch' component={WatchLesson} />
       
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default Navigation;