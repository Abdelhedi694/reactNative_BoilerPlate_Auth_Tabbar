import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text } from 'react-native-paper';
import Animated, { FadeIn } from 'react-native-reanimated';

export default function SettingsScreen() {
  return (
    <Animated.View 
      entering={FadeIn}
      style={styles.container}
    >
      <Text variant="headlineMedium">Paramètres</Text>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
});
