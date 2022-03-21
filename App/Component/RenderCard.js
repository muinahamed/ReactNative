import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { Card } from "react-native-elements";
import { Dimensions } from "react-native";

import { AntDesign } from "@expo/vector-icons";

const windowWidth = Dimensions.get("window").width;

import { useDispatch } from "react-redux";
import { addQuantityHandler, subQuantityHandler } from "../Reducer/Action";

const RenderCard = ({ item }) => {
  const dispatch = useDispatch();
//   console.log(item);
  return (
    <View>
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
          {item.description}
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
          <View style={{ flexDirection: "row", alignItems: "center" }}>
            <AntDesign
              onPress={() =>
                item?.count > 1 && dispatch(subQuantityHandler(item))
              }
              style={{ padding: 5 }}
              name="minuscircleo"
              size={24}
              color={item?.count > 1 ? "black" : "rgba(0,0,0,.3)"}
            />
            <Text>{item.count}</Text>
            <AntDesign
              onPress={() =>
                item.stock > item.count && dispatch(addQuantityHandler(item))
              }
              style={{ padding: 5 }}
              name="pluscircleo"
              size={24}
              color={item.stock > item.count ? "black" : "rgba(0,0,0,.4)"}
            />
          </View>
        </View>
      </Card>
    </View>
  );
};

export default RenderCard;

const styles = StyleSheet.create({
  // text: { color: ecomilliJustOrange, fontSize: 11 },
});
