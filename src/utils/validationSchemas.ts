import * as yup from 'yup';

export const loginSchema = yup.object({
  email: yup.string().email('Email invalide').required('Email requis'),
  password: yup.string()
    .required('Mot de passe requis')
    .min(6, 'Le mot de passe doit contenir au moins 6 caractères'),
});

export const registerSchema = yup.object({
  email: yup.string().email('Email invalide').required('Email requis'),
  password: yup.string()
    .required('Mot de passe requis')
    .min(6, 'Le mot de passe doit contenir au moins 6 caractères')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/,
      'Le mot de passe doit contenir au moins une majuscule, une minuscule et un chiffre'
    ),
  confirmPassword: yup.string()
    .required('Confirmation du mot de passe requise')
    .oneOf([yup.ref('password')], 'Les mots de passe ne correspondent pas'),
});

export const resetPasswordSchema = yup.object({
  email: yup.string().email('Email invalide').required('Email requis'),
});
