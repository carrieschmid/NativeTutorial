import React, { useState } from 'react';
//we are using hooks to get the user input
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  //save the text entered in state
  //we access text through entered goal
  //passs the entered goal back into the TextInput

  //enteredText is passed in by ReactNative
  //rather than creating a function, you set up a const container to hold the function which is then delivered with the => arrow
  const [] = useState([]);
  const goalInputHandler = (enteredText) => {
    //enteredText is already a string and is pointed at from onChangeText
    setEnteredGoal(enteredText);
  };

  const addGoalHandler = () => {
    console.log(enteredGoal);
  }

  return (
    <View style={styles.screen}>
      {/* not by default on web, and organizes elements in a row. native use by default, and in a column. flexbox positiosn elements inside of a view next to eachother or above eachother, or distributed on axis, aa reamining space between elements, or how chidlren are aligned on cross-axis */}
      <View style={styles.inputContainer}>
        {/* TextInput is a controlled component with two-way binding */}
        <TextInput placeholder="Course Goal"
          style={styles.input}
          //onChangeText take a function that will execute for every keystroke, don't want to execute it immediately
          onChangeText={goalInputHandler}
          // pass the entered goal back into TextInput
          value={enteredGoal} />
        <Button title="ADD"
          onPress={addGoalHandler} />
      </View>
      <View>

      </View>

    </View >
  );
}
//in future you can use StyleSheet for further optimaization
const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 10
  },
});
