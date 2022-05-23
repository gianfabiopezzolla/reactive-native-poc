import { Button, View, Text, StyleSheet, FlatList } from "react-native";
import { useState } from "react";

const ColorScreen = () => {
  const [colors, setColors] = useState([]);

  return (
    <View>
      <Text>ColorScreen Ciao</Text>
      <Button
        title="add Color"
        onPress={() => {
          setColors([...colors, randomRgb()]);
        }}
      />
      <FlatList
        keyExtractor={(item) => item}
        data={colors}
        renderItem={({ item }) => {
          return (
            <View style={{ height: 100, width: 100, backgroundColor: item }} />
          );
        }}
      />
    </View>
  );
};

const randomRgb = () => {
  const randomColors = Array.from(Array(3).keys()).map(() =>
    Math.floor(Math.random() * 256)
  );
  const [red, green, blue] = randomColors;
  return `rgb(${red}, ${green}, ${blue})`;
};

const styles = StyleSheet.create({});

export default ColorScreen;
