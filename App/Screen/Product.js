import { StyleSheet, Text, View, FlatList } from "react-native";
import React from "react";
import RenderProduct from "../Component/RenderProduct";
import ProductShimmer from "../Shimmer/ProductShimmer";

const Product = ({ navigation }) => {
  const [product, setProduct] = React.useState([]);
  React.useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((response) => response.json())
      .then((result) => setProduct(result));
  }, []);
  // console.log(product.products);
  return (
    <>
      {product?.products!==undefined ? (
        <FlatList
          data={product?.products}
          numColumns={2}
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: 10 }}
          keyExtractor={(item, index) => "key" + index}
          renderItem={({ item }) => {
            return <RenderProduct navigation={navigation} item={item} />;
          }}
        />
      ) : (
        <ProductShimmer />
      )}
    </>
  );
};

export default Product;

const styles = StyleSheet.create({});
