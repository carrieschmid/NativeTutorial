import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
//can also use TouchableHighlight, TouchableNativeFeedback(android), Touchable without feedback

const GoalItem = props => {
    return ( 
        //onPress expects a function, so we are forwarding what onDelete points to 
    <TouchableOpacity activeOpacity= {0.8} onPress={props.onDelete.bind(this, props.id)}>
        <View style={styles.listItem} >
        <Text >{props.title}</Text>
        </View>
  </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor:'black',
    borderWidth: 1
    }

});

export default GoalItem;