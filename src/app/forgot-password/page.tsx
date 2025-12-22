'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useLanguage } from '@/i18n/LanguageContext';

const translations = {
  fr: {
    title: 'Mot de passe oublié ?',
    subtitle: 'Entrez votre email pour réinitialiser votre mot de passe',
    email: 'Email',
    emailPlaceholder: 'votre@email.com',
    submit: 'Envoyer le lien',
    backToLogin: 'Retour à la connexion',
    successTitle: 'Email envoyé !',
    successMessage: 'Si un compte existe avec cet email, vous recevrez un lien de réinitialisation.',
    checkSpam: 'Vérifiez également vos spams.',
  },
  en: {
    title: 'Forgot password?',
    subtitle: 'Enter your email to reset your password',
    email: 'Email',
    emailPlaceholder: 'your@email.com',
    submit: 'Send reset link',
    backToLogin: 'Back to login',
    successTitle: 'Email sent!',
    successMessage: 'If an account exists with this email, you will receive a reset link.',
    checkSpam: 'Also check your spam folder.',
  },
  es: {
    title: '¿Olvidaste tu contraseña?',
    subtitle: 'Ingresa tu email para restablecer tu contraseña',
    email: 'Email',
    emailPlaceholder: 'tu@email.com',
    submit: 'Enviar enlace',
    backToLogin: 'Volver al inicio de sesión',
    successTitle: '¡Email enviado!',
    successMessage: 'Si existe una cuenta con este email, recibirás un enlace de restablecimiento.',
    checkSpam: 'También revisa tu carpeta de spam.',
  },
  de: {
    title: 'Passwort vergessen?',
    subtitle: 'Geben Sie Ihre E-Mail ein, um Ihr Passwort zurückzusetzen',
    email: 'E-Mail',
    emailPlaceholder: 'ihre@email.com',
    submit: 'Link senden',
    backToLogin: 'Zurück zur Anmeldung',
    successTitle: 'E-Mail gesendet!',
    successMessage: 'Wenn ein Konto mit dieser E-Mail existiert, erhalten Sie einen Zurücksetzungslink.',
    checkSpam: 'Überprüfen Sie auch Ihren Spam-Ordner.',
  },
};

export default function ForgotPasswordPage() {
  const { language } = useLanguage();
  const t = translations[language as keyof typeof translations] || translations.fr;

  const [email, setEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setSuccess(true);
      setIsLoading(false);
    }, 1500);
  };

  return (
    <main className="min-h-screen bg-[#0A0E17] flex items-center justify-center p-4">
      {/* Background effects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#00B4DC]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-[#D4AF37]/10 rounded-full blur-3xl" />
      </div>

      {/* Card */}
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
        </div>

        {/* Form Card */}
        <div className="bg-[#0D1321]/80 backdrop-blur-xl border border-white/10 rounded-2xl p-8 shadow-2xl">
          {success ? (
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-green-500/20 rounded-full flex items-center justify-center mb-4">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <h2 className="text-xl font-bold text-white mb-2">{t.successTitle}</h2>
              <p className="text-gray-400 mb-2">{t.successMessage}</p>
              <p className="text-gray-500 text-sm">{t.checkSpam}</p>
              
              <Link
                href="/login"
                className="mt-6 inline-flex items-center gap-2 text-[#00B4DC] hover:text-[#33C9E8] transition-colors"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                {t.backToLogin}
              </Link>
            </div>
          ) : (
            <>
              <div className="text-center mb-6">
                <h1 className="text-xl font-bold text-white">{t.title}</h1>
                <p className="text-gray-400 mt-1 text-sm">{t.subtitle}</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
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
                    t.submit
                  )}
                </button>

                <p className="text-center">
                  <Link
                    href="/login"
                    className="text-gray-400 hover:text-gray-300 transition-colors text-sm flex items-center justify-center gap-2"
                  >
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                    </svg>
                    {t.backToLogin}
                  </Link>
                </p>
              </form>
            </>
          )}
        </div>
      </div>
    </main>
  );
}
