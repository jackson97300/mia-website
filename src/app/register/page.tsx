'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageContext';

const translations = {
  fr: {
    title: 'Créer un compte',
    subtitle: 'Rejoignez MIA IA SYSTEM',
    firstName: 'Prénom',
    lastName: 'Nom',
    email: 'Email',
    password: 'Mot de passe',
    confirmPassword: 'Confirmer le mot de passe',
    acceptTerms: "J'accepte les",
    termsOfService: "conditions d'utilisation",
    and: 'et la',
    privacyPolicy: 'politique de confidentialité',
    register: "S'inscrire",
    haveAccount: 'Vous avez déjà un compte ?',
    login: 'Se connecter',
    orContinueWith: 'Ou continuer avec',
    passwordMismatch: 'Les mots de passe ne correspondent pas',
    passwordWeak: 'Le mot de passe doit contenir au moins 8 caractères',
    registerSuccess: 'Compte créé avec succès !',
    firstNamePlaceholder: 'Jean',
    lastNamePlaceholder: 'Dupont',
    emailPlaceholder: 'votre@email.com',
    passwordPlaceholder: '••••••••',
    backToHome: "Retour à l'accueil",
  },
  en: {
    title: 'Create an account',
    subtitle: 'Join MIA IA SYSTEM',
    firstName: 'First name',
    lastName: 'Last name',
    email: 'Email',
    password: 'Password',
    confirmPassword: 'Confirm password',
    acceptTerms: 'I accept the',
    termsOfService: 'terms of service',
    and: 'and the',
    privacyPolicy: 'privacy policy',
    register: 'Sign up',
    haveAccount: 'Already have an account?',
    login: 'Sign in',
    orContinueWith: 'Or continue with',
    passwordMismatch: 'Passwords do not match',
    passwordWeak: 'Password must be at least 8 characters',
    registerSuccess: 'Account created successfully!',
    firstNamePlaceholder: 'John',
    lastNamePlaceholder: 'Doe',
    emailPlaceholder: 'your@email.com',
    passwordPlaceholder: '••••••••',
    backToHome: 'Back to home',
  },
  es: {
    title: 'Crear una cuenta',
    subtitle: 'Únete a MIA IA SYSTEM',
    firstName: 'Nombre',
    lastName: 'Apellido',
    email: 'Email',
    password: 'Contraseña',
    confirmPassword: 'Confirmar contraseña',
    acceptTerms: 'Acepto los',
    termsOfService: 'términos de servicio',
    and: 'y la',
    privacyPolicy: 'política de privacidad',
    register: 'Registrarse',
    haveAccount: '¿Ya tienes una cuenta?',
    login: 'Iniciar sesión',
    orContinueWith: 'O continuar con',
    passwordMismatch: 'Las contraseñas no coinciden',
    passwordWeak: 'La contraseña debe tener al menos 8 caracteres',
    registerSuccess: '¡Cuenta creada con éxito!',
    firstNamePlaceholder: 'Juan',
    lastNamePlaceholder: 'García',
    emailPlaceholder: 'tu@email.com',
    passwordPlaceholder: '••••••••',
    backToHome: 'Volver al inicio',
  },
  de: {
    title: 'Konto erstellen',
    subtitle: 'Treten Sie MIA IA SYSTEM bei',
    firstName: 'Vorname',
    lastName: 'Nachname',
    email: 'E-Mail',
    password: 'Passwort',
    confirmPassword: 'Passwort bestätigen',
    acceptTerms: 'Ich akzeptiere die',
    termsOfService: 'Nutzungsbedingungen',
    and: 'und die',
    privacyPolicy: 'Datenschutzrichtlinie',
    register: 'Registrieren',
    haveAccount: 'Haben Sie bereits ein Konto?',
    login: 'Anmelden',
    orContinueWith: 'Oder fortfahren mit',
    passwordMismatch: 'Passwörter stimmen nicht überein',
    passwordWeak: 'Passwort muss mindestens 8 Zeichen haben',
    registerSuccess: 'Konto erfolgreich erstellt!',
    firstNamePlaceholder: 'Max',
    lastNamePlaceholder: 'Mustermann',
    emailPlaceholder: 'ihre@email.com',
    passwordPlaceholder: '••••••••',
    backToHome: 'Zurück zur Startseite',
  },
};

export default function RegisterPage() {
  const { language } = useLanguage();
  const router = useRouter();
  const t = translations[language as keyof typeof translations] || translations.fr;

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [acceptTerms, setAcceptTerms] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setError('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    if (formData.password.length < 8) {
      setError(t.passwordWeak);
      setIsLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError(t.passwordMismatch);
      setIsLoading(false);
      return;
    }

    // Simulation d'inscription
    setTimeout(() => {
      setSuccess(true);
      setTimeout(() => {
        router.push('/login');
      }, 2000);
    }, 1500);
  };

  const handleGoogleRegister = () => {
    alert('Google OAuth - À implémenter');
  };

  if (success) {
    return (
      <main className="min-h-screen bg-[#0A0E17] flex items-center justify-center p-4">
        <div className="text-center">
          <div className="w-20 h-20 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-6">
            <svg className="w-10 h-10 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-2xl font-bold text-white mb-2">{t.registerSuccess}</h2>
          <p className="text-gray-400">Redirection vers la connexion...</p>
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-[#0A0E17] flex items-center justify-center p-4 py-12">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00B4DC]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
      </div>

      {/* Register Card */}
      <div className="relative w-full max-w-md">
        {/* Logo */}
        <div className="text-center mb-8">
          <Link href="/" className="inline-block">
            <Image
              src="/images/logo-dark.jpg"
              alt="MIA IA SYSTEM"
              width={80}
              height={80}
              className="mx-auto rounded-full border-2 border-[#D4AF37] shadow-lg shadow-[#D4AF37]/30 hover:shadow-[#D4AF37]/50 transition-shadow"
            />
          </Link>
          <h1 className="mt-4 text-2xl font-bold text-white">{t.title}</h1>
          <p className="text-gray-400 mt-1">{t.subtitle}</p>
        </div>

        {/* Form Card */}
        <div className="bg-[#0D1321]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Name fields */}
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-300 mb-2">
                  {t.firstName}
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  placeholder={t.firstNamePlaceholder}
                  required
                  className="w-full px-4 py-3 bg-[#131722] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00B4DC] focus:ring-1 focus:ring-[#00B4DC] transition-all"
                />
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-300 mb-2">
                  {t.lastName}
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  placeholder={t.lastNamePlaceholder}
                  required
                  className="w-full px-4 py-3 bg-[#131722] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00B4DC] focus:ring-1 focus:ring-[#00B4DC] transition-all"
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                {t.email}
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t.emailPlaceholder}
                required
                className="w-full px-4 py-3 bg-[#131722] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00B4DC] focus:ring-1 focus:ring-[#00B4DC] transition-all"
              />
            </div>

            {/* Password */}
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                {t.password}
              </label>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder={t.passwordPlaceholder}
                required
                className="w-full px-4 py-3 bg-[#131722] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00B4DC] focus:ring-1 focus:ring-[#00B4DC] transition-all"
              />
            </div>

            {/* Confirm Password */}
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-300 mb-2">
                {t.confirmPassword}
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                placeholder={t.passwordPlaceholder}
                required
                className="w-full px-4 py-3 bg-[#131722] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00B4DC] focus:ring-1 focus:ring-[#00B4DC] transition-all"
              />
            </div>

            {/* Terms checkbox */}
            <label className="flex items-start gap-3 cursor-pointer">
              <input
                type="checkbox"
                checked={acceptTerms}
                onChange={(e) => setAcceptTerms(e.target.checked)}
                required
                className="mt-1 w-4 h-4 rounded border-white/20 bg-[#131722] text-[#00B4DC] focus:ring-[#00B4DC] focus:ring-offset-0"
              />
              <span className="text-sm text-gray-400">
                {t.acceptTerms}{' '}
                <Link href="/terms" className="text-[#00B4DC] hover:underline">
                  {t.termsOfService}
                </Link>{' '}
                {t.and}{' '}
                <Link href="/privacy" className="text-[#00B4DC] hover:underline">
                  {t.privacyPolicy}
                </Link>
              </span>
            </label>

            {/* Error message */}
            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                {error}
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading || !acceptTerms}
              className="w-full py-3 px-4 bg-gradient-to-r from-[#00B4DC] to-[#0090B0] text-[#0A0E17] font-semibold rounded-xl hover:shadow-lg hover:shadow-[#00B4DC]/30 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
            >
              {isLoading ? (
                <>
                  <svg className="animate-spin h-5 w-5" viewBox="0 0 24 24">
                    <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" fill="none" />
                    <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                  </svg>
                  <span>Loading...</span>
                </>
              ) : (
                t.register
              )}
            </button>
          </form>

          {/* Divider */}
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-white/10"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-[#0D1321] text-gray-500">{t.orContinueWith}</span>
            </div>
          </div>

          {/* Social register */}
          <button
            onClick={handleGoogleRegister}
            className="w-full py-3 px-4 bg-[#131722] border border-white/10 rounded-xl text-white font-medium hover:bg-[#1C2333] hover:border-white/20 transition-all flex items-center justify-center gap-3"
          >
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
              <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
              <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
              <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
            </svg>
            Google
          </button>

          {/* Login link */}
          <p className="mt-6 text-center text-gray-400">
            {t.haveAccount}{' '}
            <Link
              href="/login"
              className="text-[#00B4DC] hover:text-[#33C9E8] font-medium transition-colors"
            >
              {t.login}
            </Link>
          </p>
        </div>

        {/* Back to home */}
        <p className="mt-6 text-center">
          <Link
            href="/"
            className="text-gray-500 hover:text-gray-300 transition-colors text-sm flex items-center justify-center gap-2"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            {t.backToHome}
          </Link>
        </p>
      </div>
    </main>
  );
}
