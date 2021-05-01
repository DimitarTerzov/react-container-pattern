import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const styles = StyleSheet.create({
  header: {
    padding:'5%',
    marginTop: 40
  },
  pageHeading: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#f5deb3',
    textAlign: 'center'
  },
  pageDescription: {
    marginTop: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: '#0066ff',
    textAlign: 'center'
  }
});

export default Header = () => {
  return(
    <View style={styles.header}>
      <Text style={styles.pageHeading}>
        Share Code Between React Native and React JS
      </Text>
      <Text style={styles.pageDescription}>
        Using container pattern
      </Text>
    </View>
  )
};