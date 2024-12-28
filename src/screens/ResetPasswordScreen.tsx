import React, { useState } from 'react';
import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { TextInput, Button, Text } from 'react-native-paper';
import { useForm, Controller } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import Animated, { FadeIn, FadeOut } from 'react-native-reanimated';
import { resetPasswordSchema } from '../utils/validationSchemas';
import { useAuth } from '../context/AuthContext';
import { RootStackParamList } from '../types/navigation';

type ResetPasswordScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'ResetPassword'>;

type FormData = {
  email: string;
};

export default function ResetPasswordScreen() {
  const { resetPassword } = useAuth();
  const navigation = useNavigation<ResetPasswordScreenNavigationProp>();
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const { control, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: yupResolver(resetPasswordSchema),
  });

  const onSubmit = async (data: FormData) => {
    try {
      setLoading(true);
      await resetPassword(data.email);
      setSuccess(true);
      setTimeout(() => {
        navigation.navigate('Login');
      }, 3000);
    } catch (error) {
      console.error(error);
      // Handle error appropriately
    } finally {
      setLoading(false);
    }
  };

  return (
    <KeyboardAvoidingView 
      behavior={Platform.OS === "ios" ? "padding" : "height"}
      style={styles.container}
    >
      <Animated.View 
        entering={FadeIn}
        exiting={FadeOut}
        style={styles.formContainer}
      >
        <Text variant="headlineMedium" style={styles.title}>
          Réinitialisation du mot de passe
        </Text>

        {success ? (
          <Animated.View entering={FadeIn}>
            <Text style={styles.successText}>
              Un email de réinitialisation a été envoyé à votre adresse email.
              Vous allez être redirigé vers la page de connexion.
            </Text>
          </Animated.View>
        ) : (
          <>
            <Text style={styles.description}>
              Entrez votre adresse email pour recevoir un lien de réinitialisation
              de votre mot de passe.
            </Text>

            <Controller
              control={control}
              name="email"
              render={({ field: { onChange, value } }) => (
                <TextInput
                  label="Email"
                  value={value}
                  onChangeText={onChange}
                  error={!!errors.email}
                  mode="outlined"
                  left={<TextInput.Icon icon="email" />}
                  style={styles.input}
                  autoCapitalize="none"
                />
              )}
            />
            {errors.email && (
              <Text style={styles.errorText}>{errors.email.message}</Text>
            )}

            <Button
              mode="contained"
              onPress={handleSubmit(onSubmit)}
              loading={loading}
              style={styles.button}
            >
              Envoyer le lien
            </Button>

            <Button
              mode="text"
              onPress={() => navigation.navigate('Login')}
              style={styles.backButton}
            >
              Retour à la connexion
            </Button>
          </>
        )}
      </Animated.View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  formContainer: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  description: {
    textAlign: 'center',
    marginBottom: 30,
  },
  input: {
    marginBottom: 10,
  },
  button: {
    marginTop: 20,
    padding: 5,
  },
  backButton: {
    marginTop: 10,
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginBottom: 10,
  },
  successText: {
    color: 'green',
    textAlign: 'center',
    marginTop: 20,
  },
});
