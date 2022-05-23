import { View, Text } from "react-native";
import { useReducer } from "react";
import ColorCounter from "../components/ColorCounter";

const COLOR_INCREMENT = 15;

const reducer = (state, action) => {
  switch (action.colorToChange) {
    case "change_red":
      if (state.red + action.payload > 255 || state.red + action.payload < 0)
        return state;
      return { ...state, red: state.red + action.payload };
    case "change_green":
      if (
        state.green + action.payload > 255 ||
        state.green + action.payload < 0
      )
        return state;
      return { ...state, green: state.green + action.payload };
    case "change_blue":
      if (state.blue + action.payload > 255 || state.blue + action.payload < 0)
        return state;
      return { ...state, blue: state.blue + action.payload };

    default:
      return state;
  }
};

const SquareScreen = () => {
  const [state, dispatch] = useReducer(reducer, { red: 0, green: 0, blue: 0 });
  const { red, green, blue } = state;

  return (
    <View>
      <Text>Square Screen</Text>
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "change_red", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({
            colorToChange: "change_red",
            payload: -1 * COLOR_INCREMENT,
          })
        }
        color="Red"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "change_green", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({
            colorToChange: "change_green",
            payload: -1 * COLOR_INCREMENT,
          })
        }
        color="Green"
      />
      <ColorCounter
        onIncrease={() =>
          dispatch({ colorToChange: "change_blue", payload: COLOR_INCREMENT })
        }
        onDecrease={() =>
          dispatch({
            colorToChange: "change_blue",
            payload: -1 * COLOR_INCREMENT,
          })
        }
        color="Blue"
      />
      <View
        style={{
          height: 150,
          width: 150,
          backgroundColor: `rgb(${red}, ${green}, ${blue})`,
        }}
      />
    </View>
  );
};

export default SquareScreen;
