import React from 'react';
import {SafeAreaView, StyleSheet} from 'react-native';
import {TextCustomView} from 'rn-text-custom';

const ExampleTextCustomView = () => {
  return (
    <SafeAreaView style={styles.container}>
      <TextCustomView
        bold
        fontSize={20}
        color="red"
        style={{
          padding: 20,
        }}>
        Hello World!
      </TextCustomView>
    </SafeAreaView>
  );
};

export default ExampleTextCustomView;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
