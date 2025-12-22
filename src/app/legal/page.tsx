'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, Scale } from 'lucide-react'
import { LanguageProvider, useLanguage } from '@/i18n/LanguageContext'
import LanguageSelector from '@/components/LanguageSelector'

function LegalContent() {
  const { language } = useLanguage()

  const content = {
    fr: {
      title: "Mentions Légales",
      lastUpdate: "Dernière mise à jour : 21 décembre 2025",
      sections: [
        {
          title: "1. Éditeur du site",
          content: "Le site mia-ia-system.com est édité par :\n\nMIA IA SYSTEM\nStatut : Auto-entrepreneur\nEmail : contact@mia-ia-system.com\n\nDirecteur de la publication : MIA IA SYSTEM"
        },
        {
          title: "2. Hébergement",
          content: "Le site est hébergé par :\n\nCloudflare, Inc.\n101 Townsend St\nSan Francisco, CA 94107\nÉtats-Unis\n\nwww.cloudflare.com"
        },
        {
          title: "3. Propriété intellectuelle",
          content: "L'ensemble du contenu du site (textes, graphismes, logos, icônes, images, vidéos, sons, logiciels, bases de données) est la propriété exclusive de MIA IA SYSTEM ou de ses partenaires et est protégé par les lois françaises et internationales relatives à la propriété intellectuelle.\n\nToute reproduction, représentation, modification, publication, transmission, dénaturation, totale ou partielle du site ou de son contenu, par quelque procédé que ce soit, et sur quelque support que ce soit est interdite sans l'autorisation écrite préalable de MIA IA SYSTEM."
        },
        {
          title: "4. Données personnelles",
          content: "Conformément à la loi « Informatique et Libertés » du 6 janvier 1978 modifiée et au Règlement Général sur la Protection des Données (RGPD), vous disposez d'un droit d'accès, de rectification, de suppression et d'opposition aux données personnelles vous concernant.\n\nPour exercer ces droits, vous pouvez nous contacter à : contact@mia-ia-system.com\n\nPour plus d'informations, consultez notre Politique de Confidentialité."
        },
        {
          title: "5. Cookies",
          content: "Le site utilise des cookies pour améliorer l'expérience utilisateur et analyser le trafic. En poursuivant votre navigation, vous acceptez l'utilisation de cookies conformément à notre Politique de Confidentialité.\n\nVous pouvez à tout moment désactiver les cookies dans les paramètres de votre navigateur."
        },
        {
          title: "6. Liens hypertextes",
          content: "Le site peut contenir des liens vers d'autres sites. MIA IA SYSTEM n'exerce aucun contrôle sur ces sites et décline toute responsabilité quant à leur contenu.\n\nLa création de liens hypertextes vers le site est soumise à l'accord préalable de MIA IA SYSTEM."
        },
        {
          title: "7. Limitation de responsabilité",
          content: "MIA IA SYSTEM s'efforce d'assurer l'exactitude des informations diffusées sur le site, mais ne peut en garantir l'exhaustivité ni l'absence d'erreurs.\n\nMIA IA SYSTEM décline toute responsabilité pour :\n- Les éventuelles imprécisions ou omissions\n- Les dommages résultant de l'utilisation du site\n- L'interruption du service\n- Les pertes financières liées au trading"
        },
        {
          title: "8. Droit applicable",
          content: "Les présentes mentions légales sont régies par le droit français.\n\nTout litige relatif à l'utilisation du site sera soumis à la compétence exclusive des tribunaux français."
        },
        {
          title: "9. Contact",
          content: "Pour toute question ou réclamation concernant le site :\n\nEmail : contact@mia-ia-system.com\nSupport : support@mia-ia-system.com"
        }
      ]
    },
    en: {
      title: "Legal Notice",
      lastUpdate: "Last updated: December 21, 2025",
      sections: [
        {
          title: "1. Site publisher",
          content: "The site mia-ia-system.com is published by:\n\nMIA IA SYSTEM\nStatus: Self-employed\nEmail: contact@mia-ia-system.com\n\nPublication director: MIA IA SYSTEM"
        },
        {
          title: "2. Hosting",
          content: "The site is hosted by:\n\nCloudflare, Inc.\n101 Townsend St\nSan Francisco, CA 94107\nUnited States\n\nwww.cloudflare.com"
        },
        {
          title: "3. Intellectual property",
          content: "All content on the site (texts, graphics, logos, icons, images, videos, sounds, software, databases) is the exclusive property of MIA IA SYSTEM or its partners and is protected by French and international intellectual property laws.\n\nAny reproduction, representation, modification, publication, transmission, distortion, total or partial, of the site or its content, by any means whatsoever, and on any medium whatsoever, is prohibited without the prior written authorization of MIA IA SYSTEM."
        },
        {
          title: "4. Personal data",
          content: "In accordance with the French Data Protection Act and the General Data Protection Regulation (GDPR), you have the right to access, rectify, delete, and object to personal data concerning you.\n\nTo exercise these rights, you can contact us at: contact@mia-ia-system.com\n\nFor more information, see our Privacy Policy."
        },
        {
          title: "5. Cookies",
          content: "The site uses cookies to improve user experience and analyze traffic. By continuing to browse, you accept the use of cookies in accordance with our Privacy Policy.\n\nYou can disable cookies at any time in your browser settings."
        },
        {
          title: "6. Hyperlinks",
          content: "The site may contain links to other sites. MIA IA SYSTEM has no control over these sites and disclaims any responsibility for their content.\n\nCreation of hyperlinks to the site is subject to prior agreement from MIA IA SYSTEM."
        },
        {
          title: "7. Limitation of liability",
          content: "MIA IA SYSTEM strives to ensure the accuracy of information published on the site, but cannot guarantee its completeness or absence of errors.\n\nMIA IA SYSTEM disclaims any responsibility for:\n- Any inaccuracies or omissions\n- Damages resulting from use of the site\n- Service interruption\n- Financial losses related to trading"
        },
        {
          title: "8. Applicable law",
          content: "These legal notices are governed by French law.\n\nAny dispute relating to use of the site will be subject to the exclusive jurisdiction of French courts."
        },
        {
          title: "9. Contact",
          content: "For any questions or complaints regarding the site:\n\nEmail: contact@mia-ia-system.com\nSupport: support@mia-ia-system.com"
        }
      ]
    },
    es: {
      title: "Aviso Legal",
      lastUpdate: "Última actualización: 21 de diciembre de 2025",
      sections: [
        {
          title: "1. Editor del sitio",
          content: "El sitio mia-ia-system.com es editado por:\n\nMIA IA SYSTEM\nEstado: Autónomo\nEmail: contact@mia-ia-system.com\n\nDirector de publicación: MIA IA SYSTEM"
        },
        {
          title: "2. Alojamiento",
          content: "El sitio está alojado por:\n\nCloudflare, Inc.\n101 Townsend St\nSan Francisco, CA 94107\nEstados Unidos\n\nwww.cloudflare.com"
        },
        {
          title: "3. Propiedad intelectual",
          content: "Todo el contenido del sitio (textos, gráficos, logotipos, iconos, imágenes, videos, sonidos, software, bases de datos) es propiedad exclusiva de MIA IA SYSTEM o sus socios y está protegido por las leyes francesas e internacionales de propiedad intelectual.\n\nQueda prohibida cualquier reproducción, representación, modificación, publicación, transmisión, distorsión, total o parcial, del sitio o su contenido, por cualquier medio y en cualquier soporte, sin la autorización previa por escrito de MIA IA SYSTEM."
        },
        {
          title: "4. Datos personales",
          content: "De acuerdo con la Ley de Protección de Datos y el Reglamento General de Protección de Datos (RGPD), tiene derecho a acceder, rectificar, eliminar y oponerse a los datos personales que le conciernen.\n\nPara ejercer estos derechos, puede contactarnos en: contact@mia-ia-system.com\n\nPara más información, consulte nuestra Política de Privacidad."
        },
        {
          title: "5. Cookies",
          content: "El sitio utiliza cookies para mejorar la experiencia del usuario y analizar el tráfico. Al continuar navegando, acepta el uso de cookies de acuerdo con nuestra Política de Privacidad.\n\nPuede desactivar las cookies en cualquier momento en la configuración de su navegador."
        },
        {
          title: "6. Enlaces",
          content: "El sitio puede contener enlaces a otros sitios. MIA IA SYSTEM no tiene control sobre estos sitios y declina cualquier responsabilidad por su contenido.\n\nLa creación de enlaces al sitio está sujeta al acuerdo previo de MIA IA SYSTEM."
        },
        {
          title: "7. Limitación de responsabilidad",
          content: "MIA IA SYSTEM se esfuerza por garantizar la exactitud de la información publicada en el sitio, pero no puede garantizar su integridad ni la ausencia de errores.\n\nMIA IA SYSTEM declina cualquier responsabilidad por:\n- Posibles inexactitudes u omisiones\n- Daños resultantes del uso del sitio\n- Interrupción del servicio\n- Pérdidas financieras relacionadas con el trading"
        },
        {
          title: "8. Ley aplicable",
          content: "Este aviso legal se rige por la ley francesa.\n\nCualquier disputa relacionada con el uso del sitio estará sujeta a la jurisdicción exclusiva de los tribunales franceses."
        },
        {
          title: "9. Contacto",
          content: "Para cualquier pregunta o reclamación sobre el sitio:\n\nEmail: contact@mia-ia-system.com\nSoporte: support@mia-ia-system.com"
        }
      ]
    },
    de: {
      title: "Impressum",
      lastUpdate: "Letzte Aktualisierung: 21. Dezember 2025",
      sections: [
        {
          title: "1. Herausgeber der Website",
          content: "Die Website mia-ia-system.com wird herausgegeben von:\n\nMIA IA SYSTEM\nStatus: Selbstständig\nE-Mail: contact@mia-ia-system.com\n\nVerantwortlich für den Inhalt: MIA IA SYSTEM"
        },
        {
          title: "2. Hosting",
          content: "Die Website wird gehostet von:\n\nCloudflare, Inc.\n101 Townsend St\nSan Francisco, CA 94107\nUSA\n\nwww.cloudflare.com"
        },
        {
          title: "3. Geistiges Eigentum",
          content: "Alle Inhalte der Website (Texte, Grafiken, Logos, Icons, Bilder, Videos, Töne, Software, Datenbanken) sind ausschließliches Eigentum von MIA IA SYSTEM oder seinen Partnern und sind durch französische und internationale Gesetze zum geistigen Eigentum geschützt.\n\nJede Reproduktion, Darstellung, Modifikation, Veröffentlichung, Übertragung, Entstellung, ganz oder teilweise, der Website oder ihres Inhalts, mit welchen Mitteln und auf welchem Medium auch immer, ist ohne vorherige schriftliche Genehmigung von MIA IA SYSTEM untersagt."
        },
        {
          title: "4. Personenbezogene Daten",
          content: "Gemäß dem Datenschutzgesetz und der Datenschutz-Grundverordnung (DSGVO) haben Sie das Recht auf Zugang, Berichtigung, Löschung und Widerspruch gegen Sie betreffende personenbezogene Daten.\n\nUm diese Rechte auszuüben, können Sie uns kontaktieren unter: contact@mia-ia-system.com\n\nWeitere Informationen finden Sie in unserer Datenschutzrichtlinie."
        },
        {
          title: "5. Cookies",
          content: "Die Website verwendet Cookies, um die Benutzererfahrung zu verbessern und den Verkehr zu analysieren. Durch fortgesetztes Browsen akzeptieren Sie die Verwendung von Cookies gemäß unserer Datenschutzrichtlinie.\n\nSie können Cookies jederzeit in Ihren Browsereinstellungen deaktivieren."
        },
        {
          title: "6. Hyperlinks",
          content: "Die Website kann Links zu anderen Websites enthalten. MIA IA SYSTEM hat keine Kontrolle über diese Websites und lehnt jede Verantwortung für deren Inhalt ab.\n\nDie Erstellung von Hyperlinks zur Website bedarf der vorherigen Zustimmung von MIA IA SYSTEM."
        },
        {
          title: "7. Haftungsbeschränkung",
          content: "MIA IA SYSTEM bemüht sich, die Richtigkeit der auf der Website veröffentlichten Informationen zu gewährleisten, kann jedoch deren Vollständigkeit oder Fehlerfreiheit nicht garantieren.\n\nMIA IA SYSTEM lehnt jede Verantwortung ab für:\n- Mögliche Ungenauigkeiten oder Auslassungen\n- Schäden, die aus der Nutzung der Website resultieren\n- Serviceunterbrechungen\n- Finanzielle Verluste im Zusammenhang mit Trading"
        },
        {
          title: "8. Anwendbares Recht",
          content: "Dieses Impressum unterliegt französischem Recht.\n\nJede Streitigkeit im Zusammenhang mit der Nutzung der Website unterliegt der ausschließlichen Zuständigkeit französischer Gerichte."
        },
        {
          title: "9. Kontakt",
          content: "Bei Fragen oder Beschwerden zur Website:\n\nE-Mail: contact@mia-ia-system.com\nSupport: support@mia-ia-system.com"
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
              <Scale className="w-10 h-10 text-mia-cyan" />
              <div>
                <h1 className="text-3xl font-bold text-white">{t.title}</h1>
                <p className="text-light-400 text-sm">{t.lastUpdate}</p>
              </div>
            </div>

            <div className="glass p-8 space-y-8">
              {t.sections.map((section, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
                  <h2 className="text-xl font-semibold text-white mb-3">{section.title}</h2>
                  <p className="text-light-400 leading-relaxed whitespace-pre-line">{section.content}</p>
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

export default function LegalPage() {
  return (
    <LanguageProvider>
      <LegalContent />
    </LanguageProvider>
  )
}
