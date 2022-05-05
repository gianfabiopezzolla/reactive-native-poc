import { Text, StyleSheet, View } from "react-native";

const ComponentsScreen = () => {
  const helloIam = (
    <Text style={styles.subTextStyle}>My name is Gianfabio</Text>
  );
  return (
    <View>
      <Text style={styles.textStyle}>Getting started with react native!</Text>
      {helloIam}
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 45,
  },
  subTextStyle: {
    fontSize: 20,
  },
});

export default ComponentsScreen;
