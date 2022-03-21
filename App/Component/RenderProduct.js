import {
  StyleSheet,
  Text,
  View,
  Pressable,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { Card } from "react-native-elements";

import { Entypo } from "@expo/vector-icons";
import React, { useEffect, useState } from "react";
import { AntDesign } from "@expo/vector-icons";
const windowWidth = Dimensions.get("window").width;
import { useDispatch } from "react-redux";
import { AddCart } from "../Reducer/Action";

export default function RenderProduct({ navigation, item }) {
  const dispatch = useDispatch();

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          dispatch(AddCart(item));
        }}
      >
        <Card containerStyle={styles.card}>
          <Card.Image
            style={{
              width: windowWidth / 2 - 25,
              height: 96 + 10 + 15,
            }}
            source={{
              uri: item.images[0],
            }}
          ></Card.Image>

          <Text
            numberOfLines={1}
            style={{
              fontSize: 12,
              fontWeight: "bold",
              // color: e,
              textAlign: "left",
              padding: 8,
            }}
          >
            {item.title}
          </Text>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text
              style={{
                fontSize: 15,
                fontWeight: "bold",

                padding: 8,
              }}
            >
              ${item.price}
            </Text>
          </View>
        </Card>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: windowWidth / 2 - 25,
    alignItems: "center",
    flex: 1,
    marginRight: 1,
    padding: 0,
  },
  headerTitle: {
    marginLeft: windowWidth / 30,
    fontWeight: "bold",
  },
});
