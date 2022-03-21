import { StyleSheet, Text, View, FlatList, Animated } from "react-native";
import React from "react";
import { render } from "react-dom";
import { ScreenWidth } from "react-native-elements/dist/helpers";

const ProductShimmer = () => {
  const fadeAnim = React.useRef(new Animated.Value(0)).current;

  const render = (index) => {
    var op = new Animated.Value(0);

    if (index === 1) {
      op = fadeAnim.interpolate({
        inputRange: [0, 0.5, 1, 1.5, 2],
        outputRange: [1, 0.7, 0.5, 0.5, 1],
      });
    } else if (index === 2) {
      op = fadeAnim.interpolate({
        inputRange: [1, 1.5, 2, 2.5, 3],
        outputRange: [1, 0.7, 0.5, 0.7, 1],
      });
    } else if (index === 3) {
      op = fadeAnim.interpolate({
        inputRange: [2, 2.5, 3, 3.5, 4],
        outputRange: [1, 0.7, 0.5, 0.7, 1],
      });
    } else if (index === 4) {
      op = fadeAnim.interpolate({
        inputRange: [3, 3.5, 4, 4.5, 5],
        outputRange: [1, 0.7, 0.5, 0.7, 1],
      });
    } else {
      op = fadeAnim.interpolate({
        inputRange: [4, 4.5, 5, 5.5, 6],
        outputRange: [1, 0.7, 0.5, 0.7, 1],
      });
    }

    return (
      <Animated.View
        style={{
          width: ScreenWidth / 2 - 15,
          marginHorizontal: 5,
          height: 96 + 10 + 15,
          backgroundColor: "rgba(0,0,0,.1)",
          marginVertical: 10,
          opacity: op,
        }}
      ></Animated.View>
    );
  };
  React.useEffect(() => {
    Animated.loop(
      Animated.timing(fadeAnim, {
        toValue: 6,
        duration: 3000,
        useNativeDriver: true,
      })
    ).start();
  }, []);

  return (
    <View style={{ margin: 5, flexDirection: "row" }}>
      <FlatList
        data={[1, 2, 3, 4, 5]}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
        keyExtractor={(item, index) => "key" + index}
        renderItem={({ item, index }) => {
          return render(index + 1);
        }}
      />
      <FlatList
        data={[1, 2, 3, 4, 5]}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 10 }}
        keyExtractor={(item, index) => "key" + index}
        renderItem={({ item, index }) => {
          return render(index + 1);
        }}
      />
    </View>
  );
};

export default ProductShimmer;

const styles = StyleSheet.create({});
