import React from "react";
import { SafeAreaView, StyleSheet, View } from "react-native";

const Flex = () => {
  return (
    <>
      {/* <SafeAreaView> */}
      <View
        style={[
          styles.container,
          {
            // Try setting `flexDirection` to `"row"`.
            flexDirection: "column",
          },
        ]}
      >
        <View style={{ flex: 1, backgroundColor: "red" }} />
        <View style={{ flex: 2, backgroundColor: "darkorange" }} />
        <View style={{ flex: 3, backgroundColor: "green" }} />
      </View>
      {/* </SafeAreaView> */}
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
});

export default Flex;
