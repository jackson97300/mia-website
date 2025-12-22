'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Shield } from 'lucide-react'
import { LanguageProvider, useLanguage } from '@/i18n/LanguageContext'
import LanguageSelector from '@/components/LanguageSelector'

function PrivacyContent() {
  const { language } = useLanguage()

  const content = {
    fr: {
      title: "Politique de Confidentialité",
      lastUpdate: "Dernière mise à jour : 21 décembre 2025",
      sections: [
        {
          title: "1. Introduction",
          content: "MIA IA SYSTEM s'engage à protéger votre vie privée. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos données personnelles conformément au Règlement Général sur la Protection des Données (RGPD)."
        },
        {
          title: "2. Responsable du traitement",
          content: "Le responsable du traitement des données est MIA IA SYSTEM, joignable à l'adresse : contact@mia-ia-system.com"
        },
        {
          title: "3. Données collectées",
          content: "Nous pouvons collecter les données suivantes : informations d'identification (nom, prénom, email), données de connexion (adresse IP, navigateur, appareil), données d'utilisation du service (signaux consultés, préférences), données de paiement (pour les services premium, traitées par nos prestataires de paiement sécurisés)."
        },
        {
          title: "4. Finalités du traitement",
          content: "Vos données sont collectées pour : fournir et améliorer nos services, gérer votre compte utilisateur, vous envoyer des communications relatives au service, assurer la sécurité et prévenir la fraude, respecter nos obligations légales."
        },
        {
          title: "5. Base légale",
          content: "Le traitement de vos données repose sur : l'exécution du contrat (fourniture du service), votre consentement (newsletter, cookies non essentiels), nos intérêts légitimes (amélioration du service, sécurité), nos obligations légales."
        },
        {
          title: "6. Durée de conservation",
          content: "Vos données sont conservées pendant la durée de votre utilisation du service, puis pendant une durée maximale de 3 ans après votre dernière activité, sauf obligation légale de conservation plus longue."
        },
        {
          title: "7. Partage des données",
          content: "Vos données peuvent être partagées avec : nos prestataires techniques (hébergement, email), nos prestataires de paiement, les autorités compétentes si la loi l'exige. Nous ne vendons jamais vos données à des tiers."
        },
        {
          title: "8. Vos droits",
          content: "Conformément au RGPD, vous disposez des droits suivants : droit d'accès à vos données, droit de rectification, droit à l'effacement, droit à la limitation du traitement, droit à la portabilité, droit d'opposition. Pour exercer ces droits, contactez-nous à : contact@mia-ia-system.com"
        },
        {
          title: "9. Cookies",
          content: "Notre site utilise des cookies pour : assurer le bon fonctionnement du site, mémoriser vos préférences (langue), analyser l'utilisation du site (avec votre consentement). Vous pouvez gérer vos préférences de cookies via les paramètres de votre navigateur."
        },
        {
          title: "10. Sécurité",
          content: "Nous mettons en œuvre des mesures de sécurité appropriées pour protéger vos données : chiffrement SSL/TLS, accès restreint aux données, sauvegardes régulières, surveillance des systèmes."
        },
        {
          title: "11. Transferts internationaux",
          content: "Vos données peuvent être traitées dans des pays hors UE (hébergement Cloudflare). Ces transferts sont encadrés par des garanties appropriées (clauses contractuelles types)."
        },
        {
          title: "12. Contact",
          content: "Pour toute question concernant cette politique ou vos données personnelles : contact@mia-ia-system.com. Vous pouvez également introduire une réclamation auprès de la CNIL (www.cnil.fr)."
        }
      ]
    },
    en: {
      title: "Privacy Policy",
      lastUpdate: "Last updated: December 21, 2025",
      sections: [
        {
          title: "1. Introduction",
          content: "MIA IA SYSTEM is committed to protecting your privacy. This privacy policy explains how we collect, use, and protect your personal data in accordance with the General Data Protection Regulation (GDPR)."
        },
        {
          title: "2. Data controller",
          content: "The data controller is MIA IA SYSTEM, reachable at: contact@mia-ia-system.com"
        },
        {
          title: "3. Data collected",
          content: "We may collect the following data: identification information (name, email), connection data (IP address, browser, device), service usage data (signals viewed, preferences), payment data (for premium services, processed by our secure payment providers)."
        },
        {
          title: "4. Processing purposes",
          content: "Your data is collected to: provide and improve our services, manage your user account, send you service-related communications, ensure security and prevent fraud, comply with our legal obligations."
        },
        {
          title: "5. Legal basis",
          content: "Processing of your data is based on: contract execution (service provision), your consent (newsletter, non-essential cookies), our legitimate interests (service improvement, security), our legal obligations."
        },
        {
          title: "6. Retention period",
          content: "Your data is retained for the duration of your use of the service, then for a maximum of 3 years after your last activity, unless a longer legal retention obligation applies."
        },
        {
          title: "7. Data sharing",
          content: "Your data may be shared with: our technical providers (hosting, email), our payment providers, competent authorities if required by law. We never sell your data to third parties."
        },
        {
          title: "8. Your rights",
          content: "Under GDPR, you have the following rights: right of access, right to rectification, right to erasure, right to restriction of processing, right to data portability, right to object. To exercise these rights, contact us at: contact@mia-ia-system.com"
        },
        {
          title: "9. Cookies",
          content: "Our site uses cookies to: ensure proper site functioning, remember your preferences (language), analyze site usage (with your consent). You can manage your cookie preferences through your browser settings."
        },
        {
          title: "10. Security",
          content: "We implement appropriate security measures to protect your data: SSL/TLS encryption, restricted data access, regular backups, system monitoring."
        },
        {
          title: "11. International transfers",
          content: "Your data may be processed in countries outside the EU (Cloudflare hosting). These transfers are governed by appropriate safeguards (standard contractual clauses)."
        },
        {
          title: "12. Contact",
          content: "For any questions regarding this policy or your personal data: contact@mia-ia-system.com. You may also file a complaint with the relevant data protection authority."
        }
      ]
    },
    es: {
      title: "Política de Privacidad",
      lastUpdate: "Última actualización: 21 de diciembre de 2025",
      sections: [
        {
          title: "1. Introducción",
          content: "MIA IA SYSTEM se compromete a proteger su privacidad. Esta política de privacidad explica cómo recopilamos, usamos y protegemos sus datos personales de acuerdo con el Reglamento General de Protección de Datos (RGPD)."
        },
        {
          title: "2. Responsable del tratamiento",
          content: "El responsable del tratamiento de datos es MIA IA SYSTEM, contactable en: contact@mia-ia-system.com"
        },
        {
          title: "3. Datos recopilados",
          content: "Podemos recopilar los siguientes datos: información de identificación (nombre, email), datos de conexión (dirección IP, navegador, dispositivo), datos de uso del servicio (señales consultadas, preferencias), datos de pago (para servicios premium, procesados por nuestros proveedores de pago seguros)."
        },
        {
          title: "4. Finalidades del tratamiento",
          content: "Sus datos se recopilan para: proporcionar y mejorar nuestros servicios, gestionar su cuenta de usuario, enviarle comunicaciones relacionadas con el servicio, garantizar la seguridad y prevenir el fraude, cumplir con nuestras obligaciones legales."
        },
        {
          title: "5. Base legal",
          content: "El tratamiento de sus datos se basa en: ejecución del contrato (prestación del servicio), su consentimiento (newsletter, cookies no esenciales), nuestros intereses legítimos (mejora del servicio, seguridad), nuestras obligaciones legales."
        },
        {
          title: "6. Período de conservación",
          content: "Sus datos se conservan durante el período de uso del servicio, luego durante un máximo de 3 años después de su última actividad, salvo obligación legal de conservación más prolongada."
        },
        {
          title: "7. Compartición de datos",
          content: "Sus datos pueden compartirse con: nuestros proveedores técnicos (alojamiento, email), nuestros proveedores de pago, autoridades competentes si la ley lo requiere. Nunca vendemos sus datos a terceros."
        },
        {
          title: "8. Sus derechos",
          content: "Según el RGPD, tiene los siguientes derechos: derecho de acceso, derecho de rectificación, derecho de supresión, derecho a la limitación del tratamiento, derecho a la portabilidad, derecho de oposición. Para ejercer estos derechos, contáctenos en: contact@mia-ia-system.com"
        },
        {
          title: "9. Cookies",
          content: "Nuestro sitio utiliza cookies para: asegurar el correcto funcionamiento del sitio, recordar sus preferencias (idioma), analizar el uso del sitio (con su consentimiento). Puede gestionar sus preferencias de cookies a través de la configuración de su navegador."
        },
        {
          title: "10. Seguridad",
          content: "Implementamos medidas de seguridad apropiadas para proteger sus datos: cifrado SSL/TLS, acceso restringido a datos, copias de seguridad regulares, monitoreo de sistemas."
        },
        {
          title: "11. Transferencias internacionales",
          content: "Sus datos pueden procesarse en países fuera de la UE (alojamiento Cloudflare). Estas transferencias están regidas por garantías apropiadas (cláusulas contractuales tipo)."
        },
        {
          title: "12. Contacto",
          content: "Para cualquier pregunta sobre esta política o sus datos personales: contact@mia-ia-system.com. También puede presentar una reclamación ante la autoridad de protección de datos correspondiente."
        }
      ]
    },
    de: {
      title: "Datenschutzrichtlinie",
      lastUpdate: "Letzte Aktualisierung: 21. Dezember 2025",
      sections: [
        {
          title: "1. Einführung",
          content: "MIA IA SYSTEM verpflichtet sich zum Schutz Ihrer Privatsphäre. Diese Datenschutzrichtlinie erklärt, wie wir Ihre personenbezogenen Daten gemäß der Datenschutz-Grundverordnung (DSGVO) erheben, verwenden und schützen."
        },
        {
          title: "2. Verantwortlicher",
          content: "Der Verantwortliche für die Datenverarbeitung ist MIA IA SYSTEM, erreichbar unter: contact@mia-ia-system.com"
        },
        {
          title: "3. Erhobene Daten",
          content: "Wir können folgende Daten erheben: Identifikationsdaten (Name, E-Mail), Verbindungsdaten (IP-Adresse, Browser, Gerät), Service-Nutzungsdaten (angesehene Signale, Präferenzen), Zahlungsdaten (für Premium-Services, verarbeitet von unseren sicheren Zahlungsanbietern)."
        },
        {
          title: "4. Verarbeitungszwecke",
          content: "Ihre Daten werden erhoben, um: unsere Services bereitzustellen und zu verbessern, Ihr Benutzerkonto zu verwalten, Ihnen servicebezogene Mitteilungen zu senden, Sicherheit zu gewährleisten und Betrug zu verhindern, unseren rechtlichen Verpflichtungen nachzukommen."
        },
        {
          title: "5. Rechtsgrundlage",
          content: "Die Verarbeitung Ihrer Daten basiert auf: Vertragserfüllung (Servicebereitstellung), Ihrer Einwilligung (Newsletter, nicht-essentielle Cookies), unseren berechtigten Interessen (Serviceverbesserung, Sicherheit), unseren rechtlichen Verpflichtungen."
        },
        {
          title: "6. Aufbewahrungsdauer",
          content: "Ihre Daten werden für die Dauer Ihrer Servicenutzung aufbewahrt, dann maximal 3 Jahre nach Ihrer letzten Aktivität, sofern keine längere gesetzliche Aufbewahrungspflicht gilt."
        },
        {
          title: "7. Datenweitergabe",
          content: "Ihre Daten können weitergegeben werden an: unsere technischen Dienstleister (Hosting, E-Mail), unsere Zahlungsanbieter, zuständige Behörden wenn gesetzlich erforderlich. Wir verkaufen Ihre Daten niemals an Dritte."
        },
        {
          title: "8. Ihre Rechte",
          content: "Gemäß DSGVO haben Sie folgende Rechte: Auskunftsrecht, Recht auf Berichtigung, Recht auf Löschung, Recht auf Einschränkung der Verarbeitung, Recht auf Datenübertragbarkeit, Widerspruchsrecht. Um diese Rechte auszuüben, kontaktieren Sie uns unter: contact@mia-ia-system.com"
        },
        {
          title: "9. Cookies",
          content: "Unsere Website verwendet Cookies, um: die ordnungsgemäße Funktion der Website zu gewährleisten, Ihre Präferenzen zu speichern (Sprache), die Website-Nutzung zu analysieren (mit Ihrer Einwilligung). Sie können Ihre Cookie-Einstellungen über Ihre Browser-Einstellungen verwalten."
        },
        {
          title: "10. Sicherheit",
          content: "Wir setzen angemessene Sicherheitsmaßnahmen zum Schutz Ihrer Daten um: SSL/TLS-Verschlüsselung, eingeschränkter Datenzugriff, regelmäßige Backups, Systemüberwachung."
        },
        {
          title: "11. Internationale Übermittlungen",
          content: "Ihre Daten können in Ländern außerhalb der EU verarbeitet werden (Cloudflare-Hosting). Diese Übermittlungen werden durch angemessene Garantien geregelt (Standardvertragsklauseln)."
        },
        {
          title: "12. Kontakt",
          content: "Bei Fragen zu dieser Richtlinie oder Ihren personenbezogenen Daten: contact@mia-ia-system.com. Sie können auch eine Beschwerde bei der zuständigen Datenschutzbehörde einreichen."
        }
      ]
    }
  }

  const t = content[language as keyof typeof content] || content.fr

  return (
    <div className="min-h-screen bg-dark-100">
      <header className="fixed top-0 left-0 right-0 z-50 bg-dark-100/80 backdrop-blur-xl border-b border-white/10">
        <div className="container-custom">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-4">
              <Link href="/" className="flex items-center gap-2 text-light-400 hover:text-white transition-colors">
                <ArrowLeft className="w-5 h-5" />
              </Link>
              <div className="h-6 w-px bg-white/20" />
              <Link href="/" className="flex items-center gap-3 hover:opacity-80 transition-opacity">
                <div className="relative w-8 h-8">
                  <Image src="/images/logo-dark.jpg" alt="MIA IA SYSTEM" fill className="rounded-full object-cover border border-mia-gold/50" />
                </div>
                <span className="font-bold text-white">MIA IA SYSTEM</span>
              </Link>
            </div>
            <LanguageSelector />
          </div>
        </div>
      </header>

      <main className="pt-24 pb-16">
        <div className="container-custom max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-4 mb-6">
              <Shield className="w-10 h-10 text-mia-cyan" />
              <div>
                <h1 className="text-3xl font-bold text-white">{t.title}</h1>
                <p className="text-light-400 text-sm">{t.lastUpdate}</p>
              </div>
            </div>

            <div className="glass p-8 space-y-8">
              {t.sections.map((section, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
                  <h2 className="text-xl font-semibold text-white mb-3">{section.title}</h2>
                  <p className="text-light-400 leading-relaxed">{section.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      <footer className="border-t border-white/10 py-8">
        <div className="container-custom text-center">
          <p className="text-light-500 text-sm">© {new Date().getFullYear()} MIA IA SYSTEM. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}

export default function PrivacyPage() {
  return (
    <LanguageProvider>
      <PrivacyContent />
    </LanguageProvider>
  )
}
