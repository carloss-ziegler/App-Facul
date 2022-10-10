import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Tela02 from "./screens/Tela02";
import Tela1 from "./screens/Tela1";
import Tela3 from "./screens/Tela3";

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="tela1">
          <Stack.Screen
            options={{ headerShown: false }}
            name="tela1"
            component={Tela1}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="tela2"
            component={Tela02}
          />
          <Stack.Screen
            options={{ headerShown: false }}
            name="tela3"
            component={Tela3}
          />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
