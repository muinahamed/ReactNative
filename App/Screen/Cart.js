import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  FlatList,
  Button,
  Pressable,
} from "react-native";
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import RenderCard from "../Component/RenderCard";
import { ScreenWidth } from "react-native-elements/dist/helpers";
import { CheckOut } from "../Reducer/Action";

const Cart = () => {
  const product = useSelector((state) => state.Reducers);
  const [subTotal, setSubTotal] = React.useState(0);
  const dispatch = useDispatch();

  const addSubTotal = () => {
    let temp = 0;
    product.map((i) => {
      //   console.log(i);
      temp = temp + i.price * i.count;
    });
    setSubTotal(temp);
  };

  React.useEffect(() => {
    addSubTotal();
  }, [product]);
  //   console.log(subTotal);

  return (
    <SafeAreaView style={{ flex: 1 }}>
      {product.length > 0 ? (
        <FlatList
          contentContainerStyle={{ paddingBottom: 50 }}
          data={product}
          renderItem={({ item }) => {
            return <RenderCard item={item} />;
          }}
          keyExtractor={(item, index) => index.toString()}
        />
      ) : (
        <Text style={[styles.text, { textAlign: "center", marginTop: 100 }]}>
          No Item available
        </Text>
      )}
      <View style={styles.head}>
        <Text style={styles.text}>SubTotal</Text>
        <Text style={styles.text}>{subTotal}</Text>
        <Pressable onPress={() => dispatch(CheckOut())}>
          <Text
            style={[
              styles.text,
              { padding: 8, backgroundColor: "orange", borderRadius: 5 },
            ]}
          >
            CheckOut
          </Text>
        </Pressable>
      </View>
    </SafeAreaView>
  );
};

export default Cart;

const styles = StyleSheet.create({
  head: {
    position: "absolute",
    bottom: 0,
    backgroundColor: "white",
    zIndex: 100,
    flexDirection: "row",
    width: ScreenWidth,
    paddingVertical: 5,
    justifyContent: "space-around",
    alignItems: "center",
  },
  text: { fontWeight: "bold", fontSize: 16 },
});
