import { createDrawerNavigator } from "@react-navigation/drawer";
import ChatGPT from "../pages/ChatGPT";
import DrawerHeader from "../components/DrawerHeader";

const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        header: (props) => <DrawerHeader {...props} />,
      }}
    >
      <Drawer.Screen name="ChatGPT" component={ChatGPT} />
    </Drawer.Navigator>
  );
}

export default DrawerNavigator;
