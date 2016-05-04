import React, { Text, TouchableHighlight, StyleSheet } from 'react-native';

export default ({title, navigate}) => {
  return (
    <TouchableHighlight onPress={navigate}>
      <Text style={styles.container}>{title}</Text>
    </TouchableHighlight>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    padding: 15,
    borderBottomColor: 'white',
    borderBottomWidth: 1,
    color: 'blue'
  }
});