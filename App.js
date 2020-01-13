//you use map to transform an array of data into and array of components
import React, {useState} from 'react';
//we are using hooks to get the user input
import {StyleSheet, Text, View, TextInput, Button,
ScrollView, FlatList} from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  //rather than creating a function, you set up a const container to hold the function which is then delivered with the => arrow
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = goalTitle => {
    //the ... pulls all the content out of the old array and puts it in a new array in the [] as the new element enteredGoal
    //your get your currentGoals(currentState) and set it to what was returned when the course value was updated, because it give latest snapshot before it applies the state change
    //now courseGoals is an array of objects
    setCourseGoals(currentGoals => [...currentGoals, {id: Math.random().toString(), 
      value: goalTitle
    }])
    //The enteredGoal value was previously managed here, not anymore, it's managed in GoalInput. So we pass in the argument goalTitle, and store it as a new value
  }

  return ( <View style = {styles.screen} > 
    {/* This is not a function of GoalInput, it's a function of App, but it's passed into GoalInput */ } 
    <GoalInput onAddGoal = {addGoalHandler}/> 
    {/* not by default on web, and organizes elements in a row. native use by default, and in a column. flexbox positiosn elements inside of a view next to eachother or above eachother, or distributed on axis, aa reamining space between elements, or how chidlren are aligned on cross-axis */ }
    {/* ScrollView can be inefficient because it renders all items, even the ones that are not on the screen, */ } 
    {/* data points to courseGoals, flatlist will automatically add data if it has a certain shape, which is an object, and I access the value property of the object  */ } 
    <FlatList keyExtractor = {(item, index) => item.id}
    data = {courseGoals}
    renderItem = {
      itemData => ( < GoalItem title = {itemData.item.value}/>
      )}/>
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