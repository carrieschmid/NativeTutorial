//you use map to transform an array of data into and array of components
//command m, debugger in andriod, command d, debugger in ios, make sure it's set to local and not tunnel
//debugger, step marker at step and take it step by step, hover to see the values
//download React Native Debugger from github page(google it), give you Redux and Elements debugging tools
import React, {useState} from 'react';
//we are using hooks to get the user input
import {StyleSheet, Text, View, TextInput, Button,
ScrollView, FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  //rather than creating a function, you set up a const container to hold the function which is then delivered with the => arrow
  const [courseGoals, setCourseGoals] = useState([]);
  //we pass this to GoalInput to change the visibility of the modal
  const [isAddMode, setIsAddMode] = useState(false);
  console.log('RE-RENDERING COMPONENT');
  console.log(courseGoals);
  //This will be the complete list because it's just been rendered

  const addGoalHandler = goalTitle => {
    //this ignores user input if it's empty
    if (goalTitle.length === 0){
      return;
    }
    //the ... pulls all the content out of the old array and puts it in a new array in the [] as the new element enteredGoal
    //your get your currentGoals(currentState) and set it to what was returned when the course value was updated, because it give latest snapshot before it applies the state change
    //now courseGoals is an array of objects
    setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), 
      value: goalTitle
    }]);
    //The enteredGoal value was previously managed here, not anymore, it's managed in GoalInput. So we pass in the argument goalTitle, and store it as a new value
    //Here we use the shorter syntax with only one expression we want to return, so we omit the function body and return statement
    setIsAddMode(false);
    //this turns off the Modal in GoalInput because we're done adding it
  };

  const removeGoalHandler = goalId => {
    console.log('TO BE DELETED:' + goalId);
    console.log(courseGoals);
    setCourseGoals(currentGoals => {
      return currentGoals.filter(goal => goal.id !== goalId);
      //returns new array filered by a certain criteria (a function passed to filter), to keep all that do not match the goalId
    })

  }

  const cancelGoalAdditionHandler = () => {
    setIsAddMode(false);
  };

  return ( 
  
  <View style = {styles.screen} >
    <Button title="Add New Goal" onPress={()=> setIsAddMode(true)} />
    {/* This is not a function of GoalInput, it's a function of App, but it's passed into GoalInput */ } 
    <GoalInput visible={isAddMode} onAddGoal = {addGoalHandler} onCancel={cancelGoalAdditionHandler}/> 
    {/* not by default on web, and organizes elements in a row. native use by default, and in a column. flexbox positiosn elements inside of a view next to eachother or above eachother, or distributed on axis, aa reamining space between elements, or how chidlren are aligned on cross-axis */ }
    {/* ScrollView can be inefficient because it renders all items, even the ones that are not on the screen, */ } 
    {/* data points to courseGoals, flatlist will automatically add data if it has a certain shape, which is an object, and I access the value property of the object  */ } 
    <FlatList keyExtractor = {(item, index) => item.id}
    data = {courseGoals}
    renderItem = {
      itemData => ( < GoalItem 
        id={itemData.item.id}
        //all of the info is inside the GoalItem and we connect our function from inside the goal item(related to the bind statement in GoalItem)
        onDelete = {removeGoalHandler}
        title = {itemData.item.value}/>
      )}
    />
    </View>
  
  );
}


{
  /* in future you can use StyleSheet for further optimaization */ }
const styles = StyleSheet.create({
  screen: {
    padding: 50
  },
});