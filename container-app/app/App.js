import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CaptionContainer from '../platform/caption/captionContainerComponent';
import ContainerButton from '../platform/button/buttonContainerComponent';
import Header from './components/headerComponent';

export default function App() {
  const [refresh, setRefresh] = useState(false);
  return (
    <View>
      <Header></Header>
      <CaptionContainer refresh={refresh} setRefresh={setRefresh} />
      <ContainerButton setRefrsh={setRefresh} />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
