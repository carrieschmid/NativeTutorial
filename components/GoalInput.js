//View is compiled to Native code, upper part will stay JavaScript
import React, {useState} from 'react';
import {View,TextInput,Button,StyleSheet, Modal} from 'react-native';

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

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        //after setting enteredGoal to state I want to clear it. Why did we need the bind before but not now?
        setEnteredGoal('');
    };

    return (    
        <Modal visible={props.visible} animationType="slide">
        {/* this refers to the visible prop we got on the GoalInput */}
        <View style = {styles.inputContainer} >
        {/* This only take space that the children of Modal require(the buttons)  */}
      
        {/* TextInput is a controlled component with two-way binding */ } 
        <TextInput placeholder = "Course Goal"
        style = {styles.input}
        //onChangeText take a function that will execute for every keystroke, don't want to execute it immediately
        onChangeText = {goalInputHandler}
        // pass the entered goal back into TextInput
        value = {enteredGoal}/>
        <View style = {styles.buttonContainer}>
            
                <Button title="CANCEL" color="red" onPress={props.onCancel}/> 
            
            
                <Button title = "ADD"
                //onAddGoal points to a function, use .bind to pre-define arguments that will be eventually passed along when the function is executed, first argument is what the this keyword shuold refer to other arguments are forwarded to the onAddGoal function(which is addGoalHandler function)
                onPress = {addGoalHandler}/> 
            
            </View>
        </View>
        </Modal> 
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        //makes the children of Modal take up all the space, takes as much space as parent gives it
        justifyContent: 'center',
        alignItems: 'center'
    },
    input: {
        width: '80%',
        borderColor: 'black',
        borderWidth: 1,
        padding: 10,
        margin: 10
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
        //this makes the width a little more narrow than the input box child
    },
    button: {
        width: '40%'
    }

});

export default GoalInput;