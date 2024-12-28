import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Text, Button } from 'react-native-paper';
import Animated, { FadeIn } from 'react-native-reanimated';
import { useAuth } from '../context/AuthContext';

export default function ProfileScreen() {
  const { logOut, user } = useAuth();

  return (
    <Animated.View 
      entering={FadeIn}
      style={styles.container}
    >
      <Text variant="headlineMedium">Profil</Text>
      <Text style={styles.email}>{user?.email}</Text>
      <Button 
        mode="contained" 
        onPress={logOut}
        style={styles.button}
      >
        Se déconnecter
      </Button>
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
  email: {
    marginVertical: 20,
    fontSize: 16,
  },
  button: {
    marginTop: 20,
  },
});
