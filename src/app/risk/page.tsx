'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ArrowLeft, AlertTriangle } from 'lucide-react'
import { LanguageProvider, useLanguage } from '@/i18n/LanguageContext'
import LanguageSelector from '@/components/LanguageSelector'

function RiskContent() {
  const { language } = useLanguage()

  const content = {
    fr: {
      title: "Avertissement sur les Risques",
      lastUpdate: "Dernière mise à jour : 21 décembre 2025",
      intro: "VEUILLEZ LIRE ATTENTIVEMENT CET AVERTISSEMENT AVANT D'UTILISER NOS SERVICES",
      sections: [
        {
          title: "⚠️ Risque de perte en capital",
          content: "Le trading sur les marchés financiers, notamment sur les contrats à terme (futures), comporte des RISQUES ÉLEVÉS DE PERTE EN CAPITAL. Vous pouvez perdre la totalité de votre investissement, voire plus que votre mise initiale en cas d'utilisation de l'effet de levier.\n\nLes performances passées ne garantissent en aucun cas les résultats futurs. Les marchés financiers sont volatils et imprévisibles."
        },
        {
          title: "📊 Nature du service",
          content: "MIA IA SYSTEM est un OUTIL D'AIDE À LA DÉCISION. Il ne constitue pas :\n\n• Un conseil en investissement\n• Une recommandation d'achat ou de vente\n• Une garantie de performance\n• Un service de gestion de portefeuille\n\nVous restez seul responsable de vos décisions d'investissement."
        },
        {
          title: "💡 Compréhension des produits",
          content: "Avant d'investir, vous devez vous assurer de comprendre :\n\n• Le fonctionnement des contrats futures (ES, NQ, RTY)\n• L'effet de levier et ses conséquences\n• Les mécanismes de marge\n• Les heures de trading et la liquidité\n• Les risques spécifiques à chaque marché"
        },
        {
          title: "💰 Capital à risque",
          content: "N'INVESTISSEZ JAMAIS :\n\n• De l'argent que vous ne pouvez pas vous permettre de perdre\n• De l'argent emprunté\n• Votre épargne de sécurité\n• De l'argent destiné à vos besoins essentiels\n\nLe trading doit être effectué uniquement avec du capital de risque."
        },
        {
          title: "📉 Volatilité des marchés",
          content: "Les marchés futures sont particulièrement volatils, notamment lors :\n\n• Des annonces économiques (NFP, FOMC, CPI...)\n• Des événements géopolitiques\n• Des périodes de faible liquidité\n• Des ouvertures/fermetures de marchés\n\nMême avec des outils d'analyse avancés, des pertes significatives peuvent survenir rapidement."
        },
        {
          title: "🤖 Limites du système automatisé",
          content: "MIA IA SYSTEM, bien que sophistiqué, présente des limites :\n\n• Les algorithmes sont basés sur des données historiques\n• Les conditions de marché peuvent changer\n• Des erreurs techniques peuvent survenir\n• Les signaux peuvent être retardés ou incorrects\n• Aucun système n'est infaillible"
        },
        {
          title: "📚 Formation recommandée",
          content: "Avant d'utiliser nos services, nous recommandons fortement :\n\n• Une formation approfondie sur les marchés futures\n• Une pratique sur compte de démonstration\n• Une compréhension des analyses technique et fondamentale\n• Une gestion rigoureuse du risque (stop-loss, taille de position)\n• Une connaissance de votre profil de risque"
        },
        {
          title: "🌍 Réglementation",
          content: "Le trading de produits dérivés peut être soumis à des réglementations spécifiques selon votre pays de résidence. Assurez-vous de respecter les lois en vigueur dans votre juridiction.\n\nMIA IA SYSTEM ne fournit pas de services dans les pays où le trading de futures est interdit ou restreint."
        },
        {
          title: "✋ Responsabilité",
          content: "En utilisant MIA IA SYSTEM, vous reconnaissez et acceptez que :\n\n• Vous êtes seul responsable de vos décisions de trading\n• MIA IA SYSTEM ne peut être tenu responsable de vos pertes\n• Les informations fournies sont à titre informatif uniquement\n• Vous avez lu et compris cet avertissement sur les risques"
        },
        {
          title: "📞 Assistance",
          content: "Si vous avez des questions sur les risques liés au trading ou à l'utilisation de nos services, n'hésitez pas à nous contacter :\n\nEmail : contact@mia-ia-system.com\nSupport : support@mia-ia-system.com"
        }
      ],
      disclaimer: "⚠️ RAPPEL : Le trading de produits financiers comporte des risques. Vous pouvez perdre tout ou partie de votre capital. N'investissez que ce que vous pouvez vous permettre de perdre."
    },
    en: {
      title: "Risk Warning",
      lastUpdate: "Last updated: December 21, 2025",
      intro: "PLEASE READ THIS WARNING CAREFULLY BEFORE USING OUR SERVICES",
      sections: [
        {
          title: "⚠️ Risk of capital loss",
          content: "Trading in financial markets, particularly futures contracts, involves HIGH RISK OF CAPITAL LOSS. You can lose your entire investment, or even more than your initial stake when using leverage.\n\nPast performance does not guarantee future results. Financial markets are volatile and unpredictable."
        },
        {
          title: "📊 Nature of the service",
          content: "MIA IA SYSTEM is a DECISION-SUPPORT TOOL. It does not constitute:\n\n• Investment advice\n• A recommendation to buy or sell\n• A performance guarantee\n• A portfolio management service\n\nYou remain solely responsible for your investment decisions."
        },
        {
          title: "💡 Product understanding",
          content: "Before investing, you must ensure you understand:\n\n• How futures contracts (ES, NQ, RTY) work\n• Leverage and its consequences\n• Margin mechanisms\n• Trading hours and liquidity\n• Specific risks of each market"
        },
        {
          title: "💰 Risk capital",
          content: "NEVER INVEST:\n\n• Money you cannot afford to lose\n• Borrowed money\n• Your emergency savings\n• Money intended for essential needs\n\nTrading should only be done with risk capital."
        },
        {
          title: "📉 Market volatility",
          content: "Futures markets are particularly volatile, especially during:\n\n• Economic announcements (NFP, FOMC, CPI...)\n• Geopolitical events\n• Low liquidity periods\n• Market opens/closes\n\nEven with advanced analysis tools, significant losses can occur quickly."
        },
        {
          title: "🤖 Automated system limitations",
          content: "MIA IA SYSTEM, although sophisticated, has limitations:\n\n• Algorithms are based on historical data\n• Market conditions can change\n• Technical errors may occur\n• Signals may be delayed or incorrect\n• No system is infallible"
        },
        {
          title: "📚 Recommended training",
          content: "Before using our services, we strongly recommend:\n\n• Thorough training on futures markets\n• Practice on a demo account\n• Understanding of technical and fundamental analysis\n• Rigorous risk management (stop-loss, position sizing)\n• Knowledge of your risk profile"
        },
        {
          title: "🌍 Regulation",
          content: "Trading derivative products may be subject to specific regulations depending on your country of residence. Make sure you comply with the laws in force in your jurisdiction.\n\nMIA IA SYSTEM does not provide services in countries where futures trading is prohibited or restricted."
        },
        {
          title: "✋ Liability",
          content: "By using MIA IA SYSTEM, you acknowledge and accept that:\n\n• You are solely responsible for your trading decisions\n• MIA IA SYSTEM cannot be held liable for your losses\n• Information provided is for informational purposes only\n• You have read and understood this risk warning"
        },
        {
          title: "📞 Support",
          content: "If you have questions about trading risks or use of our services, please contact us:\n\nEmail: contact@mia-ia-system.com\nSupport: support@mia-ia-system.com"
        }
      ],
      disclaimer: "⚠️ REMINDER: Trading financial products involves risks. You may lose all or part of your capital. Only invest what you can afford to lose."
    },
    es: {
      title: "Advertencia de Riesgo",
      lastUpdate: "Última actualización: 21 de diciembre de 2025",
      intro: "POR FAVOR LEA ESTA ADVERTENCIA CUIDADOSAMENTE ANTES DE USAR NUESTROS SERVICIOS",
      sections: [
        {
          title: "⚠️ Riesgo de pérdida de capital",
          content: "El trading en mercados financieros, particularmente en contratos de futuros, implica un ALTO RIESGO DE PÉRDIDA DE CAPITAL. Puede perder toda su inversión, o incluso más que su inversión inicial al usar apalancamiento.\n\nEl rendimiento pasado no garantiza resultados futuros. Los mercados financieros son volátiles e impredecibles."
        },
        {
          title: "📊 Naturaleza del servicio",
          content: "MIA IA SYSTEM es una HERRAMIENTA DE APOYO A LA DECISIÓN. No constituye:\n\n• Asesoramiento de inversión\n• Una recomendación de compra o venta\n• Una garantía de rendimiento\n• Un servicio de gestión de carteras\n\nUsted sigue siendo el único responsable de sus decisiones de inversión."
        },
        {
          title: "💡 Comprensión del producto",
          content: "Antes de invertir, debe asegurarse de comprender:\n\n• Cómo funcionan los contratos de futuros (ES, NQ, RTY)\n• El apalancamiento y sus consecuencias\n• Los mecanismos de margen\n• Las horas de trading y la liquidez\n• Los riesgos específicos de cada mercado"
        },
        {
          title: "💰 Capital de riesgo",
          content: "NUNCA INVIERTA:\n\n• Dinero que no puede permitirse perder\n• Dinero prestado\n• Sus ahorros de emergencia\n• Dinero destinado a necesidades esenciales\n\nEl trading solo debe realizarse con capital de riesgo."
        },
        {
          title: "📉 Volatilidad del mercado",
          content: "Los mercados de futuros son particularmente volátiles, especialmente durante:\n\n• Anuncios económicos (NFP, FOMC, CPI...)\n• Eventos geopolíticos\n• Períodos de baja liquidez\n• Aperturas/cierres de mercado\n\nIncluso con herramientas de análisis avanzadas, pueden ocurrir pérdidas significativas rápidamente."
        },
        {
          title: "🤖 Limitaciones del sistema automatizado",
          content: "MIA IA SYSTEM, aunque sofisticado, tiene limitaciones:\n\n• Los algoritmos se basan en datos históricos\n• Las condiciones del mercado pueden cambiar\n• Pueden ocurrir errores técnicos\n• Las señales pueden retrasarse o ser incorrectas\n• Ningún sistema es infalible"
        },
        {
          title: "📚 Formación recomendada",
          content: "Antes de usar nuestros servicios, recomendamos encarecidamente:\n\n• Formación exhaustiva sobre mercados de futuros\n• Práctica en cuenta demo\n• Comprensión del análisis técnico y fundamental\n• Gestión rigurosa del riesgo (stop-loss, tamaño de posición)\n• Conocimiento de su perfil de riesgo"
        },
        {
          title: "🌍 Regulación",
          content: "El trading de productos derivados puede estar sujeto a regulaciones específicas según su país de residencia. Asegúrese de cumplir con las leyes vigentes en su jurisdicción.\n\nMIA IA SYSTEM no proporciona servicios en países donde el trading de futuros está prohibido o restringido."
        },
        {
          title: "✋ Responsabilidad",
          content: "Al usar MIA IA SYSTEM, reconoce y acepta que:\n\n• Usted es el único responsable de sus decisiones de trading\n• MIA IA SYSTEM no puede ser responsable de sus pérdidas\n• La información proporcionada es solo con fines informativos\n• Ha leído y entendido esta advertencia de riesgo"
        },
        {
          title: "📞 Soporte",
          content: "Si tiene preguntas sobre los riesgos del trading o el uso de nuestros servicios, contáctenos:\n\nEmail: contact@mia-ia-system.com\nSoporte: support@mia-ia-system.com"
        }
      ],
      disclaimer: "⚠️ RECORDATORIO: El trading de productos financieros implica riesgos. Puede perder todo o parte de su capital. Solo invierta lo que pueda permitirse perder."
    },
    de: {
      title: "Risikowarnung",
      lastUpdate: "Letzte Aktualisierung: 21. Dezember 2025",
      intro: "BITTE LESEN SIE DIESE WARNUNG SORGFÄLTIG, BEVOR SIE UNSERE DIENSTE NUTZEN",
      sections: [
        {
          title: "⚠️ Risiko des Kapitalverlusts",
          content: "Der Handel an Finanzmärkten, insbesondere mit Futures-Kontrakten, birgt ein HOHES RISIKO DES KAPITALVERLUSTS. Sie können Ihre gesamte Investition verlieren oder sogar mehr als Ihren ursprünglichen Einsatz bei Verwendung von Hebelwirkung.\n\nVergangene Leistungen garantieren keine zukünftigen Ergebnisse. Finanzmärkte sind volatil und unvorhersehbar."
        },
        {
          title: "📊 Art des Services",
          content: "MIA IA SYSTEM ist ein ENTSCHEIDUNGSUNTERSTÜTZUNGSTOOL. Es stellt keine:\n\n• Anlageberatung\n• Kauf- oder Verkaufsempfehlung\n• Leistungsgarantie\n• Portfoliomanagement-Dienstleistung dar.\n\nSie bleiben allein verantwortlich für Ihre Anlageentscheidungen."
        },
        {
          title: "💡 Produktverständnis",
          content: "Vor einer Investition müssen Sie sicherstellen, dass Sie verstehen:\n\n• Wie Futures-Kontrakte (ES, NQ, RTY) funktionieren\n• Hebelwirkung und ihre Konsequenzen\n• Margin-Mechanismen\n• Handelszeiten und Liquidität\n• Spezifische Risiken jedes Marktes"
        },
        {
          title: "💰 Risikokapital",
          content: "INVESTIEREN SIE NIEMALS:\n\n• Geld, das Sie sich nicht leisten können zu verlieren\n• Geliehenes Geld\n• Ihre Notersparnisse\n• Geld für wesentliche Bedürfnisse\n\nTrading sollte nur mit Risikokapital durchgeführt werden."
        },
        {
          title: "📉 Marktvolatilität",
          content: "Futures-Märkte sind besonders volatil, insbesondere während:\n\n• Wirtschaftsankündigungen (NFP, FOMC, CPI...)\n• Geopolitischer Ereignisse\n• Perioden geringer Liquidität\n• Marktöffnungen/-schließungen\n\nSelbst mit fortschrittlichen Analysetools können schnell erhebliche Verluste auftreten."
        },
        {
          title: "🤖 Grenzen des automatisierten Systems",
          content: "MIA IA SYSTEM hat trotz seiner Ausgereiftheit Grenzen:\n\n• Algorithmen basieren auf historischen Daten\n• Marktbedingungen können sich ändern\n• Technische Fehler können auftreten\n• Signale können verzögert oder falsch sein\n• Kein System ist unfehlbar"
        },
        {
          title: "📚 Empfohlene Schulung",
          content: "Bevor Sie unsere Dienste nutzen, empfehlen wir dringend:\n\n• Gründliche Schulung über Futures-Märkte\n• Übung auf einem Demo-Konto\n• Verständnis der technischen und fundamentalen Analyse\n• Rigoroses Risikomanagement (Stop-Loss, Positionsgröße)\n• Kenntnis Ihres Risikoprofils"
        },
        {
          title: "🌍 Regulierung",
          content: "Der Handel mit Derivaten kann je nach Wohnsitzland bestimmten Vorschriften unterliegen. Stellen Sie sicher, dass Sie die in Ihrer Jurisdiktion geltenden Gesetze einhalten.\n\nMIA IA SYSTEM bietet keine Dienste in Ländern an, in denen der Futures-Handel verboten oder eingeschränkt ist."
        },
        {
          title: "✋ Haftung",
          content: "Durch die Nutzung von MIA IA SYSTEM erkennen Sie an und akzeptieren, dass:\n\n• Sie allein für Ihre Trading-Entscheidungen verantwortlich sind\n• MIA IA SYSTEM nicht für Ihre Verluste haftbar gemacht werden kann\n• Bereitgestellte Informationen nur zu Informationszwecken dienen\n• Sie diese Risikowarnung gelesen und verstanden haben"
        },
        {
          title: "📞 Support",
          content: "Bei Fragen zu Trading-Risiken oder der Nutzung unserer Dienste kontaktieren Sie uns:\n\nE-Mail: contact@mia-ia-system.com\nSupport: support@mia-ia-system.com"
        }
      ],
      disclaimer: "⚠️ ERINNERUNG: Der Handel mit Finanzprodukten birgt Risiken. Sie können Ihr gesamtes Kapital oder einen Teil davon verlieren. Investieren Sie nur, was Sie sich leisten können zu verlieren."
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
              <AlertTriangle className="w-10 h-10 text-accent-warning" />
              <div>
                <h1 className="text-3xl font-bold text-white">{t.title}</h1>
                <p className="text-light-400 text-sm">{t.lastUpdate}</p>
              </div>
            </div>

            {/* Warning banner */}
            <div className="bg-accent-warning/10 border border-accent-warning/30 rounded-xl p-4 mb-8">
              <p className="text-accent-warning font-semibold text-center">{t.intro}</p>
            </div>

            <div className="glass p-8 space-y-8">
              {t.sections.map((section, index) => (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: index * 0.05 }}>
                  <h2 className="text-xl font-semibold text-white mb-3">{section.title}</h2>
                  <p className="text-light-400 leading-relaxed whitespace-pre-line">{section.content}</p>
                </motion.div>
              ))}
            </div>

            {/* Final disclaimer */}
            <div className="bg-red-500/10 border border-red-500/30 rounded-xl p-6 mt-8">
              <p className="text-red-400 font-semibold text-center text-lg">{t.disclaimer}</p>
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

export default function RiskPage() {
  return (
    <LanguageProvider>
      <RiskContent />
    </LanguageProvider>
  )
}
