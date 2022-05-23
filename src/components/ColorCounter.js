import { Text, View, Button } from "react-native";

const ColorCounter = ({ color, onIncrease, onDecrease }) => {
  return (
    <View>
      <Text>{color}</Text>
      <Button onPress={() => onIncrease()} title={`increase ${color}`} />
      <Button onPress={() => onDecrease()} title={`decrease ${color}`} />
    </View>
  );
};

export default ColorCounter;
