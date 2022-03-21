import * as React from "react";
import { Text, View } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Product from "./App/Screen/Product";
import Cart from "./App/Screen/Cart";
import { Provider } from "react-redux";
import { createStore } from "redux";
import { combineReducers } from "redux";
import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Reducers } from "./App/Reducer/Reducers";

const Tab = createBottomTabNavigator();
const root = combineReducers({ Reducers });
const store = createStore(root);
export default function App() {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            headerTitleAlign: "center",
            tabBarIcon: ({ focused, color, size }) => {
              if (route.name === "product") {
                return (
                  <Feather
                    name="home"
                    size={24}
                    color={focused ? "green" : "black"}
                  />
                );
              } else {
                return (
                  <AntDesign
                    name="shoppingcart"
                    size={24}
                    color={focused ? "green" : "black"}
                  />
                );
              }
            },
            tabBarActiveTintColor: "green",
            tabBarInactiveTintColor: "black",
          })}
        >
          <Tab.Screen name="product" component={Product} />
          <Tab.Screen name="cart" component={Cart} />
        </Tab.Navigator>
      </Provider>
    </NavigationContainer>
  );
}
