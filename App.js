import { useFonts } from "expo-font";
import BottomTabNavigator from "./src/navigation/BottomTabNavigator";

export default function App() {

const [fontsLoaded] = useFonts({
  Lobster: require("./src/assets/fonts/Lobster-Regular.ttf")
});

if(!fontsLoaded) {
  return null
}

  return <BottomTabNavigator />;
   
  
}
