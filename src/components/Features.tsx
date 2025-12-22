'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import { 
  BarChart3, 
  Target, 
  Bot, 
  Smartphone, 
  Bell, 
  LineChart,
  GraduationCap,
  Calendar,
  ExternalLink
} from 'lucide-react'
import { useLanguage } from '@/i18n/LanguageContext'

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
}

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: 'easeOut',
    },
  },
}

export default function Features() {
  const { t } = useLanguage()

  const features = [
    {
      icon: BarChart3,
      title: t.features.realtime.title,
      description: t.features.realtime.description,
      color: 'text-mia-cyan',
      bgColor: 'bg-mia-cyan/10',
      link: null,
    },
    {
      icon: Target,
      title: t.features.signals.title,
      description: t.features.signals.description,
      color: 'text-accent-purple',
      bgColor: 'bg-accent-purple/10',
      link: null,
    },
    {
      icon: Bot,
      title: t.features.automated.title,
      description: t.features.automated.description,
      color: 'text-mia-gold',
      bgColor: 'bg-mia-gold/10',
      link: null,
    },
    {
      icon: Smartphone,
      title: t.features.accessible.title,
      description: t.features.accessible.description,
      color: 'text-mia-cyan',
      bgColor: 'bg-mia-cyan/10',
      link: null,
    },
    {
      icon: Bell,
      title: t.features.alerts.title,
      description: t.features.alerts.description,
      color: 'text-accent-error',
      bgColor: 'bg-accent-error/10',
      link: null,
    },
    {
      icon: LineChart,
      title: t.features.dashboard.title,
      description: t.features.dashboard.description,
      color: 'text-accent-purple',
      bgColor: 'bg-accent-purple/10',
      link: null,
    },
    {
      icon: GraduationCap,
      title: t.features.education.title,
      description: t.features.education.description,
      color: 'text-mia-gold',
      bgColor: 'bg-mia-gold/10',
      link: null,
    },
    {
      icon: Calendar,
      title: t.features.calendar.title,
      description: t.features.calendar.description,
      color: 'text-mia-cyan',
      bgColor: 'bg-mia-cyan/10',
      link: '/calendar',
    },
  ]

  return (
    <section id="features" className="section relative">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-dark-200/50 to-transparent" />
      
      <div className="container-custom relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="section-title">
            <span className="text-gradient">{t.features.title}</span>
          </h2>
          <p className="section-subtitle">
            {t.features.subtitle}
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {features.map((feature, index) => {
            const CardContent = (
              <>
                {/* Top accent line */}
                <div className={`absolute top-0 left-0 right-0 h-1 ${feature.bgColor} 
                              opacity-0 group-hover:opacity-100 transition-opacity rounded-t-2xl`} />
                
                {/* Link indicator */}
                {feature.link && (
                  <div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity">
                    <ExternalLink className="w-4 h-4 text-mia-cyan" />
                  </div>
                )}
                
                {/* Icon */}
                <div className={`w-16 h-16 ${feature.bgColor} rounded-xl 
                              flex items-center justify-center mx-auto mb-5
                              group-hover:scale-110 transition-transform duration-300`}>
                  <feature.icon className={`w-8 h-8 ${feature.color}`} />
                </div>
                
                {/* Title */}
                <h3 className="text-lg font-semibold text-white mb-3 group-hover:text-mia-cyan transition-colors">
                  {feature.title}
                </h3>
                
                {/* Description */}
                <p className="text-light-400 text-sm leading-relaxed">
                  {feature.description}
                </p>
              </>
            )

            return feature.link ? (
              <motion.div key={index} variants={itemVariants}>
                <Link href={feature.link} className="feature-card group block cursor-pointer">
                  {CardContent}
                </Link>
              </motion.div>
            ) : (
              <motion.div
                key={index}
                variants={itemVariants}
                className="feature-card group"
              >
                {CardContent}
              </motion.div>
            )
          })}
        </motion.div>
      </div>
    </section>
  )
}
