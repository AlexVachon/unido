import { createI18n } from 'vue-i18n';

const messages = {
  en: {
    login: 'Log In',
    email: 'E-mail',
    password: 'Password',
    enterEmail: 'Enter your email',
    enterPassword: 'Enter your password',
    requiredEmail: "Email is required",
    requiredPassword: "Password is required",
    validationEmail: "Enter a valid email",
    validationPassword: "Password must contain atleast 6 caracters",
    reset: 'Reset',
    loginSuccess: 'Login successful!',
    formError: 'Please check the form fields.',
    forgetPassword: "Forgot your password ?",
    login_or: "or",
    no_account: "New to Easy ?",
    join_now: "Join now"
  },
  fr: {
    login: 'Connexion',
    email: 'E-mail',
    password: 'Mot de passe',
    enterEmail: 'Entrez votre e-mail',
    enterPassword: 'Entrez votre mot de passe',
    requiredEmail: "L'email est requis",
    requiredPassword: "Le mot de passe est requis",
    validationEmail: "Veuillez entrer un e-mail valide",
    validationPassword: "Le mot de passe doit comporter au moins 6 caractères",
    reset: 'Réinitialiser',
    loginSuccess: 'Connexion réussie !',
    formError: 'Veuillez vérifier les champs du formulaire.',
    forgetPassword: "Oublié votre mot de passe ?",
    login_or: "ou",
    no_account: "Nouveau sur Easy ?",
    join_now: "Rejoindre maintenant"
  },
};

const i18n = createI18n({
  locale: localStorage.getItem('lang') as string,
  messages,
});

export default i18n;
