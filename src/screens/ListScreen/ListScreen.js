import { FlatList, Text, StyleSheet, View } from "react-native";
import FRIENDS from "./friends";

const ListScreen = () => {
  const friends = [
    {
      name: "Gianfabio",
      age: 35,
    },
    {
      name: "Stefano",
      age: 30,
    },
    {
      name: "Francesco",
      age: 40,
    },
  ];

  const names = (key, name, age) => {
    return (
      <View>
        <Text style={styles.textStyle}>{name}</Text>
        <Text style={styles.ageText}>{age}</Text>
      </View>
    );
  };

  return (
    <FlatList
      keyExtractor={(friend) => friend.name}
      data={friends}
      renderItem={({ item }) => names(item.key, item.name, item.age)}
    />
  );
};

const styles = StyleSheet.create({
  textStyle: {
    marginVertical: 50,
  },
  ageText: {
    fontSize: 12,
  },
});

export default ListScreen;
