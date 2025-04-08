import { Stack } from 'expo-router';
import 'react-native-reanimated';

export function MainLayout(){
return(
  <Stack>
    <Stack.Screen
    name="index"
    options={{headerShown: false}}
    />
    <Stack.Screen
    name="(auth)/signup/page"
    options={{headerShown: false}}
    />
    <Stack.Screen
    name="(panel)/profile/page"
    options={{headerShown: false}}
    />
  
  </Stack>
)
}