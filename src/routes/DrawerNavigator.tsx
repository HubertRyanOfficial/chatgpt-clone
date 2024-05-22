import { createDrawerNavigator } from "@react-navigation/drawer";
import ChatGPT from "../pages/ChatGPT";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="ChatGPT" component={ChatGPT} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
