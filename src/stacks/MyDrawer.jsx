import { createDrawerNavigator } from "@react-navigation/drawer";
import Flex from "../screens/Flex";

const Drawer = createDrawerNavigator();

const MyDrawer = () => {
  return (
    <Drawer.Navigator>
      <Drawer.Screen name="Flex" component={Flex} />
      {/* <Drawer.Screen name="Article" component={Article} /> */}
    </Drawer.Navigator>
  );
};

export default MyDrawer;
