import React from "react";
import { Text, StyleSheet, View, Button, TouchableOpacity } from "react-native";

const HomeScreen = ({ navigation }) => {
  return (
    <View>
      <Text style={styles.text}>Hi there!</Text>
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Components")}
        title="go to components"
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Image")}
        title="go to image"
      />
      <Button
        style={styles.button}
        onPress={() => navigation.navigate("Counter")}
        title="go to counter"
      />
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
  },
  button: {
    paddingBottom: "10px",
  },
});

export default HomeScreen;
