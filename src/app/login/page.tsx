'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageContext';

const translations = {
  fr: {
    title: 'Connexion',
    subtitle: 'Accédez à votre dashboard MIA',
    email: 'Email',
    password: 'Mot de passe',
    rememberMe: 'Se souvenir de moi',
    forgotPassword: 'Mot de passe oublié ?',
    login: 'Se connecter',
    noAccount: "Vous n'avez pas de compte ?",
    register: "S'inscrire",
    orContinueWith: 'Ou continuer avec',
    loginError: 'Email ou mot de passe incorrect',
    emailPlaceholder: 'votre@email.com',
    passwordPlaceholder: '••••••••',
    backToHome: "Retour à l'accueil",
  },
  en: {
    title: 'Login',
    subtitle: 'Access your MIA dashboard',
    email: 'Email',
    password: 'Password',
    rememberMe: 'Remember me',
    forgotPassword: 'Forgot password?',
    login: 'Sign in',
    noAccount: "Don't have an account?",
    register: 'Sign up',
    orContinueWith: 'Or continue with',
    loginError: 'Invalid email or password',
    emailPlaceholder: 'your@email.com',
    passwordPlaceholder: '••••••••',
    backToHome: 'Back to home',
  },
  es: {
    title: 'Iniciar sesión',
    subtitle: 'Accede a tu dashboard MIA',
    email: 'Email',
    password: 'Contraseña',
    rememberMe: 'Recordarme',
    forgotPassword: '¿Olvidaste tu contraseña?',
    login: 'Iniciar sesión',
    noAccount: '¿No tienes una cuenta?',
    register: 'Registrarse',
    orContinueWith: 'O continuar con',
    loginError: 'Email o contraseña incorrectos',
    emailPlaceholder: 'tu@email.com',
    passwordPlaceholder: '••••••••',
    backToHome: 'Volver al inicio',
  },
  de: {
    title: 'Anmelden',
    subtitle: 'Zugriff auf Ihr MIA-Dashboard',
    email: 'E-Mail',
    password: 'Passwort',
    rememberMe: 'Angemeldet bleiben',
    forgotPassword: 'Passwort vergessen?',
    login: 'Anmelden',
    noAccount: 'Noch kein Konto?',
    register: 'Registrieren',
    orContinueWith: 'Oder fortfahren mit',
    loginError: 'Ungültige E-Mail oder Passwort',
    emailPlaceholder: 'ihre@email.com',
    passwordPlaceholder: '••••••••',
    backToHome: 'Zurück zur Startseite',
  },
};

export default function LoginPage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.fr;

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    // Simulation de connexion (à remplacer par vraie API)
    setTimeout(() => {
      if (email && password) {
        // Rediriger vers le dashboard
        window.location.href = 'https://dashboard.mia-ia-system.com';
      } else {
        setError(t.loginError);
      }
      setIsLoading(false);
    }, 1500);
  };

  const handleGoogleLogin = () => {
    alert('Google OAuth - À implémenter');
  };

  return (
    <main className="min-h-screen bg-[#0A0E17] flex items-center justify-center p-4">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00B4DC]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
      </div>

      {/* Login Card */}
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
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                {t.email}
              </label>
              <input
                type="email"
                id="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
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
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder={t.passwordPlaceholder}
                required
                className="w-full px-4 py-3 bg-[#131722] border border-white/10 rounded-xl text-white placeholder-gray-500 focus:outline-none focus:border-[#00B4DC] focus:ring-1 focus:ring-[#00B4DC] transition-all"
              />
            </div>

            {/* Remember me & Forgot password */}
            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="w-4 h-4 rounded border-white/20 bg-[#131722] text-[#00B4DC] focus:ring-[#00B4DC] focus:ring-offset-0"
                />
                <span className="text-sm text-gray-400">{t.rememberMe}</span>
              </label>
              <Link
                href="/forgot-password"
                className="text-sm text-[#00B4DC] hover:text-[#33C9E8] transition-colors"
              >
                {t.forgotPassword}
              </Link>
            </div>

            {/* Error message */}
            {error && (
              <div className="p-3 bg-red-500/10 border border-red-500/30 rounded-lg text-red-400 text-sm">
                {error}
              </div>
            )}

            {/* Submit button */}
            <button
              type="submit"
              disabled={isLoading}
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
                t.login
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

          {/* Social login */}
          <button
            onClick={handleGoogleLogin}
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

          {/* Register link */}
          <p className="mt-6 text-center text-gray-400">
            {t.noAccount}{' '}
            <Link
              href="/register"
              className="text-[#00B4DC] hover:text-[#33C9E8] font-medium transition-colors"
            >
              {t.register}
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
