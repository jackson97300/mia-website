'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, FileText } from 'lucide-react'
import { LanguageProvider, useLanguage } from '@/i18n/LanguageContext'
import LanguageSelector from '@/components/LanguageSelector'

function TermsContent() {
  const { language } = useLanguage()

  const content = {
    fr: {
      title: "Conditions Générales d'Utilisation",
      lastUpdate: "Dernière mise à jour : 21 décembre 2025",
      sections: [
        {
          title: "1. Objet",
          content: "Les présentes Conditions Générales d'Utilisation (CGU) régissent l'accès et l'utilisation du site web mia-ia-system.com et des services proposés par MIA IA SYSTEM. En accédant au site, vous acceptez sans réserve les présentes CGU."
        },
        {
          title: "2. Description du service",
          content: "MIA IA SYSTEM est un système d'analyse de marché et de génération de signaux de trading pour les marchés futures (ES, NQ, RTY). Le service comprend : un dashboard de visualisation des signaux, des alertes Discord en temps réel, des outils d'analyse et un calendrier économique."
        },
        {
          title: "3. Avertissement sur les risques",
          content: "Le trading sur les marchés financiers comporte des risques significatifs de perte en capital. Les performances passées ne garantissent pas les résultats futurs. MIA IA SYSTEM est un outil d'aide à la décision et ne constitue en aucun cas un conseil en investissement. Vous êtes seul responsable de vos décisions d'investissement. N'investissez jamais plus que ce que vous pouvez vous permettre de perdre."
        },
        {
          title: "4. Inscription et compte utilisateur",
          content: "L'accès à certaines fonctionnalités peut nécessiter la création d'un compte. Vous vous engagez à fournir des informations exactes et à maintenir la confidentialité de vos identifiants. Vous êtes responsable de toute activité effectuée depuis votre compte."
        },
        {
          title: "5. Propriété intellectuelle",
          content: "L'ensemble des éléments du site (textes, images, logos, logiciels, algorithmes) sont protégés par le droit de la propriété intellectuelle. Toute reproduction, représentation ou exploitation non autorisée est interdite."
        },
        {
          title: "6. Limitation de responsabilité",
          content: "MIA IA SYSTEM ne garantit pas l'exactitude, la complétude ou l'actualité des informations fournies. Le service est fourni « en l'état ». En aucun cas MIA IA SYSTEM ne pourra être tenu responsable des pertes financières résultant de l'utilisation du service."
        },
        {
          title: "7. Disponibilité du service",
          content: "MIA IA SYSTEM s'efforce d'assurer la disponibilité du service 24h/24, 7j/7. Toutefois, des interruptions pour maintenance ou mises à jour peuvent survenir. MIA IA SYSTEM ne pourra être tenu responsable des conséquences de ces interruptions."
        },
        {
          title: "8. Modification des CGU",
          content: "MIA IA SYSTEM se réserve le droit de modifier les présentes CGU à tout moment. Les utilisateurs seront informés des modifications par email ou via le site. La poursuite de l'utilisation du service après modification vaut acceptation des nouvelles CGU."
        },
        {
          title: "9. Droit applicable",
          content: "Les présentes CGU sont régies par le droit français. Tout litige relatif à leur interprétation ou exécution relève de la compétence exclusive des tribunaux français."
        },
        {
          title: "10. Contact",
          content: "Pour toute question relative aux présentes CGU, vous pouvez nous contacter à : contact@mia-ia-system.com"
        }
      ]
    },
    en: {
      title: "Terms of Service",
      lastUpdate: "Last updated: December 21, 2025",
      sections: [
        {
          title: "1. Purpose",
          content: "These Terms of Service (ToS) govern access to and use of the mia-ia-system.com website and services offered by MIA IA SYSTEM. By accessing the site, you accept these ToS without reservation."
        },
        {
          title: "2. Service description",
          content: "MIA IA SYSTEM is a market analysis and trading signal generation system for futures markets (ES, NQ, RTY). The service includes: a signal visualization dashboard, real-time Discord alerts, analysis tools, and an economic calendar."
        },
        {
          title: "3. Risk warning",
          content: "Trading in financial markets involves significant risk of capital loss. Past performance does not guarantee future results. MIA IA SYSTEM is a decision-support tool and does not constitute investment advice. You are solely responsible for your investment decisions. Never invest more than you can afford to lose."
        },
        {
          title: "4. Registration and user account",
          content: "Access to certain features may require creating an account. You agree to provide accurate information and maintain the confidentiality of your credentials. You are responsible for all activity conducted from your account."
        },
        {
          title: "5. Intellectual property",
          content: "All elements of the site (texts, images, logos, software, algorithms) are protected by intellectual property law. Any unauthorized reproduction, representation, or exploitation is prohibited."
        },
        {
          title: "6. Limitation of liability",
          content: "MIA IA SYSTEM does not guarantee the accuracy, completeness, or timeliness of information provided. The service is provided \"as is\". In no event shall MIA IA SYSTEM be liable for financial losses resulting from use of the service."
        },
        {
          title: "7. Service availability",
          content: "MIA IA SYSTEM strives to ensure service availability 24/7. However, interruptions for maintenance or updates may occur. MIA IA SYSTEM cannot be held responsible for the consequences of these interruptions."
        },
        {
          title: "8. Modification of ToS",
          content: "MIA IA SYSTEM reserves the right to modify these ToS at any time. Users will be notified of changes by email or via the site. Continued use of the service after modification constitutes acceptance of the new ToS."
        },
        {
          title: "9. Applicable law",
          content: "These ToS are governed by French law. Any dispute relating to their interpretation or execution falls under the exclusive jurisdiction of French courts."
        },
        {
          title: "10. Contact",
          content: "For any questions regarding these ToS, you can contact us at: contact@mia-ia-system.com"
        }
      ]
    },
    es: {
      title: "Términos de Servicio",
      lastUpdate: "Última actualización: 21 de diciembre de 2025",
      sections: [
        {
          title: "1. Objeto",
          content: "Estos Términos de Servicio (TdS) rigen el acceso y uso del sitio web mia-ia-system.com y los servicios ofrecidos por MIA IA SYSTEM. Al acceder al sitio, acepta estos TdS sin reservas."
        },
        {
          title: "2. Descripción del servicio",
          content: "MIA IA SYSTEM es un sistema de análisis de mercado y generación de señales de trading para mercados de futuros (ES, NQ, RTY). El servicio incluye: un dashboard de visualización de señales, alertas Discord en tiempo real, herramientas de análisis y un calendario económico."
        },
        {
          title: "3. Advertencia de riesgo",
          content: "El trading en mercados financieros implica un riesgo significativo de pérdida de capital. El rendimiento pasado no garantiza resultados futuros. MIA IA SYSTEM es una herramienta de apoyo a la decisión y no constituye asesoramiento de inversión. Usted es el único responsable de sus decisiones de inversión. Nunca invierta más de lo que pueda permitirse perder."
        },
        {
          title: "4. Registro y cuenta de usuario",
          content: "El acceso a ciertas funciones puede requerir la creación de una cuenta. Se compromete a proporcionar información precisa y mantener la confidencialidad de sus credenciales. Usted es responsable de toda la actividad realizada desde su cuenta."
        },
        {
          title: "5. Propiedad intelectual",
          content: "Todos los elementos del sitio (textos, imágenes, logotipos, software, algoritmos) están protegidos por la ley de propiedad intelectual. Queda prohibida cualquier reproducción, representación o explotación no autorizada."
        },
        {
          title: "6. Limitación de responsabilidad",
          content: "MIA IA SYSTEM no garantiza la exactitud, integridad o actualidad de la información proporcionada. El servicio se proporciona \"tal cual\". En ningún caso MIA IA SYSTEM será responsable de las pérdidas financieras resultantes del uso del servicio."
        },
        {
          title: "7. Disponibilidad del servicio",
          content: "MIA IA SYSTEM se esfuerza por garantizar la disponibilidad del servicio 24/7. Sin embargo, pueden producirse interrupciones por mantenimiento o actualizaciones. MIA IA SYSTEM no puede ser responsable de las consecuencias de estas interrupciones."
        },
        {
          title: "8. Modificación de los TdS",
          content: "MIA IA SYSTEM se reserva el derecho de modificar estos TdS en cualquier momento. Los usuarios serán notificados de los cambios por correo electrónico o a través del sitio. El uso continuado del servicio después de la modificación constituye la aceptación de los nuevos TdS."
        },
        {
          title: "9. Ley aplicable",
          content: "Estos TdS se rigen por la ley francesa. Cualquier disputa relacionada con su interpretación o ejecución es de competencia exclusiva de los tribunales franceses."
        },
        {
          title: "10. Contacto",
          content: "Para cualquier pregunta sobre estos TdS, puede contactarnos en: contact@mia-ia-system.com"
        }
      ]
    },
    de: {
      title: "Nutzungsbedingungen",
      lastUpdate: "Letzte Aktualisierung: 21. Dezember 2025",
      sections: [
        {
          title: "1. Zweck",
          content: "Diese Nutzungsbedingungen (NB) regeln den Zugang und die Nutzung der Website mia-ia-system.com und der von MIA IA SYSTEM angebotenen Dienste. Mit dem Zugriff auf die Website akzeptieren Sie diese NB ohne Vorbehalt."
        },
        {
          title: "2. Servicebeschreibung",
          content: "MIA IA SYSTEM ist ein Marktanalyse- und Trading-Signal-Generierungssystem für Futures-Märkte (ES, NQ, RTY). Der Service umfasst: ein Signal-Visualisierungs-Dashboard, Echtzeit-Discord-Benachrichtigungen, Analysetools und einen Wirtschaftskalender."
        },
        {
          title: "3. Risikowarnung",
          content: "Der Handel an Finanzmärkten birgt erhebliche Risiken des Kapitalverlusts. Vergangene Leistungen garantieren keine zukünftigen Ergebnisse. MIA IA SYSTEM ist ein Entscheidungsunterstützungstool und stellt keine Anlageberatung dar. Sie sind allein für Ihre Anlageentscheidungen verantwortlich. Investieren Sie nie mehr als Sie sich leisten können zu verlieren."
        },
        {
          title: "4. Registrierung und Benutzerkonto",
          content: "Der Zugang zu bestimmten Funktionen kann die Erstellung eines Kontos erfordern. Sie verpflichten sich, genaue Informationen bereitzustellen und die Vertraulichkeit Ihrer Zugangsdaten zu wahren. Sie sind für alle von Ihrem Konto aus durchgeführten Aktivitäten verantwortlich."
        },
        {
          title: "5. Geistiges Eigentum",
          content: "Alle Elemente der Website (Texte, Bilder, Logos, Software, Algorithmen) sind durch das Recht des geistigen Eigentums geschützt. Jede nicht autorisierte Reproduktion, Darstellung oder Verwertung ist untersagt."
        },
        {
          title: "6. Haftungsbeschränkung",
          content: "MIA IA SYSTEM garantiert nicht die Genauigkeit, Vollständigkeit oder Aktualität der bereitgestellten Informationen. Der Service wird \"wie besehen\" bereitgestellt. In keinem Fall haftet MIA IA SYSTEM für finanzielle Verluste, die aus der Nutzung des Services resultieren."
        },
        {
          title: "7. Serviceverfügbarkeit",
          content: "MIA IA SYSTEM bemüht sich, die Serviceverfügbarkeit 24/7 zu gewährleisten. Es können jedoch Unterbrechungen für Wartung oder Updates auftreten. MIA IA SYSTEM kann nicht für die Folgen dieser Unterbrechungen verantwortlich gemacht werden."
        },
        {
          title: "8. Änderung der NB",
          content: "MIA IA SYSTEM behält sich das Recht vor, diese NB jederzeit zu ändern. Benutzer werden per E-Mail oder über die Website über Änderungen informiert. Die fortgesetzte Nutzung des Services nach Änderung gilt als Annahme der neuen NB."
        },
        {
          title: "9. Anwendbares Recht",
          content: "Diese NB unterliegen französischem Recht. Alle Streitigkeiten bezüglich ihrer Auslegung oder Ausführung fallen unter die ausschließliche Zuständigkeit französischer Gerichte."
        },
        {
          title: "10. Kontakt",
          content: "Bei Fragen zu diesen NB können Sie uns kontaktieren unter: contact@mia-ia-system.com"
        }
      ]
    }
  }

  const t = content[language as keyof typeof content] || content.fr

  return (
    <div className="min-h-screen bg-dark-100">
      {/* Header */}
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

      {/* Content */}
      <main className="pt-24 pb-16">
        <div className="container-custom max-w-4xl">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <div className="flex items-center gap-4 mb-6">
              <FileText className="w-10 h-10 text-mia-cyan" />
              <div>
                <h1 className="text-3xl font-bold text-white">{t.title}</h1>
                <p className="text-light-400 text-sm">{t.lastUpdate}</p>
              </div>
            </div>

            <div className="glass p-8 space-y-8">
              {t.sections.map((section, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 }}
                >
                  <h2 className="text-xl font-semibold text-white mb-3">{section.title}</h2>
                  <p className="text-light-400 leading-relaxed">{section.content}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/10 py-8">
        <div className="container-custom text-center">
          <p className="text-light-500 text-sm">© {new Date().getFullYear()} MIA IA SYSTEM. Tous droits réservés.</p>
        </div>
      </footer>
    </div>
  )
}

export default function TermsPage() {
  return (
    <LanguageProvider>
      <TermsContent />
    </LanguageProvider>
  )
}
