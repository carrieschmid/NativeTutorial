import React from 'react';
import {View,TextInput,Button,StyleSheet} from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');
    //save the text entered in state
    //we access text through entered goal
    //passs the entered goal back into the TextInput
    //enteredText is passed in by ReactNative

    const goalInputHandler = (enteredText) => {
        //enteredText is already a string and is pointed at from onChangeText
        setEnteredGoal(enteredText);
    };

    return ( 
        <View style = {styles.inputContainer} > 
        
        {/* TextInput is a controlled component with two-way binding */ } 
        <TextInput placeholder = "Course Goal"
        style = {styles.input}
        //onChangeText take a function that will execute for every keystroke, don't want to execute it immediately
        onChangeText = {goalInputHandler}
        // pass the entered goal back into TextInput
        value = {enteredGoal}/> 
        <Button title = "ADD"
        //onAddGoal points to a function, use .bind to pre-define arguments that will be eventually passed along when the function is executed, first argument is what the this keyword shuold refer to other arguments are forwarded to the onAddGoal function(which is addGoalHandler function)
        onPress = {props.onAddGoal.bind(this, enteredGoal)}/> 
        </View>
    );
};

const styles = StyleSheet.create({
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

export default GoalInput;