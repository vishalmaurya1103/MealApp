import { StyleSheet } from "react-native";
import { StatusBar } from "expo-status-bar";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import CategoriseScreen from "./screens/CategoriseScreen";
import MealsOverviewScreen from "./screens/MealsOverviewScreen";
import MealDetailsScreen from "./screens/MealDetailsScreen";
import FavoriteScreen from "./screens/FavoriteScreen";
import { Ionicons } from "@expo/vector-icons";
// import FavoriteContextProvider from "./Store/context/favorite-context";
import { Provider } from "react-redux";
import { store } from "./Store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#371501" },
        headerTintColor: "#e4ba23",
        sceneContainerStyle: { backgroundColor: "#3f2f25" },
        drawerContentStyle: { backgroundColor: "#3f2f25" },
        drawerInactiveTintColor: "#e4ba23",
        drawerActiveBackgroundColor: "#7c5a46",
        drawerActiveTintColor: "#e4ba23",
      }}
    >
      <Drawer.Screen
        options={{
          drawerIcon: (Size) => (
            <Ionicons name="list" color="#e4ba23" Size={Size} />
          ),
        }}
        name="Meals Categories"
        component={CategoriseScreen}
      />
      <Drawer.Screen
        options={{
          drawerIcon: (Size) => (
            <Ionicons name="star" color="#e4ba23" Size={Size} />
          ),
        }}
        name="Favorite"
        component={FavoriteScreen}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      {/* <FavoriteContextProvider> */}
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerBackTitle: "Back",
              headerStyle: { backgroundColor: "#371501" },
              headerTintColor: "#e4ba23",
              contentStyle: { backgroundColor: "#3f2f25" },
            }}
          >
            <Stack.Screen
              name="Drawer"
              component={DrawerNavigator}
              options={{
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverview"
              component={MealsOverviewScreen}
            />
            <Stack.Screen name="MealDetails" component={MealDetailsScreen} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
      {/* </FavoriteContextProvider> */}
    </>
  );
}

const styles = StyleSheet.create({
  container: {},
});
