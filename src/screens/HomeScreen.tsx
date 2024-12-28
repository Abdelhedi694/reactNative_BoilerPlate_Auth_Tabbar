import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-paper';
import Animated, { FadeIn } from 'react-native-reanimated';
import { useAuth } from '../context/AuthContext';

export default function HomeScreen() {
  const { user, logOut } = useAuth();

  const handleLogout = async () => {
    try {
      await logOut();
    } catch (error) {
      console.error(error);
      // Handle error appropriately
    }
  };

  return (
    <Animated.View 
      entering={FadeIn}
      style={styles.container}
    >
      <View style={styles.content}>
        <Text variant="headlineMedium" style={styles.welcome}>
          Bienvenue{user?.email ? `, ${user.email}` : ''}!
        </Text>
        
        <Text style={styles.description}>
          Vous êtes maintenant connecté à votre compte.
        </Text>

        <Button
          mode="contained"
          onPress={handleLogout}
          style={styles.button}
        >
          Se déconnecter
        </Button>
      </View>
    </Animated.View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  welcome: {
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    textAlign: 'center',
    marginBottom: 30,
  },
  button: {
    marginTop: 20,
    padding: 5,
  },
});
