import { useFonts } from "expo-font";
import ShopNavigator from './src/navigation/ShopNavigator';

export default function App() {

const [fontsLoaded] = useFonts({
  Lobster: require("./src/assets/fonts/Lobster-Regular.ttf")
});

if(!fontsLoaded) {
  return null
}

  return <ShopNavigator />;
   
  
}
