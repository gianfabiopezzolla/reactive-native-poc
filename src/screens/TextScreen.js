import { Text, View, TextInput, StyleSheet } from "react-native";
import { useState } from "react";

const TextScreen = () => {
  const [password, setPasswordValidation] = useState("");

  return (
    <View>
      <Text>Enter Password:</Text>
      <TextInput
        style={styles.input}
        autoCapitalize="none"
        autoCorrect={false}
        value={password}
        onChangeText={(newValue) => setPasswordValidation(newValue)}
      />
      <Text>Your password {password}</Text>
      {password.length < 5 ? (
        <Text>The password should ne at least five characters length</Text>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    margin: 15,
    borderColor: "red",
    borderWidth: 1,
  },
});

export default TextScreen;
