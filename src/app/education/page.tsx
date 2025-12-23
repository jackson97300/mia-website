'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { BookOpen, GraduationCap, ChevronRight } from 'lucide-react';
import { lessons, getLessonsByCategory } from '@/data/lessons';

export default function EducationPage() {
  const beginnerLessons = getLessonsByCategory('beginner');
  const intermediateLessons = getLessonsByCategory('intermediate');
  const totalDuration = lessons.reduce((acc, l) => acc + l.duration, 0);
  const totalHours = Math.round(totalDuration / 60);

  return (
    <div className="p-6 md:p-8 lg:p-12">
      <div className="max-w-3xl mx-auto text-center py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-mia-cyan/10 border border-mia-cyan/30 rounded-full text-mia-cyan text-sm mb-6">
            <BookOpen className="w-4 h-4" />
            <span>{lessons.length} leçons • ~{totalHours}h</span>
          </div>

          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            <span className="text-white">Éducation </span>
            <span className="text-gradient">Trading</span>
          </h1>

          <p className="text-lg text-light-400 mb-12">
            Ressources éducatives pour comprendre les marchés et améliorer vos compétences.
          </p>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-6 mb-12">
            <div className="bg-dark-200/50 rounded-2xl p-6 border border-white/5">
              <div className="text-3xl font-bold text-mia-cyan mb-1">{beginnerLessons.length}</div>
              <div className="text-sm text-light-500">Débutant</div>
            </div>
            <div className="bg-dark-200/50 rounded-2xl p-6 border border-white/5">
              <div className="text-3xl font-bold text-mia-gold mb-1">{intermediateLessons.length}</div>
              <div className="text-sm text-light-500">Intermédiaire</div>
            </div>
            <div className="bg-dark-200/50 rounded-2xl p-6 border border-white/5">
              <div className="text-3xl font-bold text-accent-success mb-1">100%</div>
              <div className="text-sm text-light-500">Gratuit</div>
            </div>
          </div>

          {/* CTA Button */}
          <Link
            href={`/education/${lessons[0]?.slug || 'futures-101'}`}
            className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-mia-cyan to-mia-cyan-dark text-dark font-bold rounded-xl hover:shadow-lg hover:shadow-mia-cyan/30 transition-all text-lg"
          >
            <GraduationCap className="w-6 h-6" />
            Commencer à apprendre
            <ChevronRight className="w-5 h-5" />
          </Link>

          {/* Popular Lessons */}
          <div className="mt-16">
            <h3 className="text-lg font-semibold text-white mb-6">🔥 Leçons populaires</h3>
            <div className="grid md:grid-cols-3 gap-4">
              {[lessons[0], lessons[5], lessons[11]].filter(Boolean).map((lesson) => (
                <Link
                  key={lesson.id}
                  href={`/education/${lesson.slug}`}
                  className="bg-dark-200/50 rounded-xl p-4 border border-white/5 hover:border-mia-cyan/30 transition-all text-left group"
                >
                  <div className="flex items-center gap-3 mb-2">
                    <span className="text-2xl">{lesson.icon}</span>
                    <span className="text-xs px-2 py-0.5 rounded bg-mia-cyan/20 text-mia-cyan">
                      {lesson.duration}m
                    </span>
                  </div>
                  <h4 className="font-medium text-white group-hover:text-mia-cyan transition-colors">
                    {lesson.title.fr}
                  </h4>
                </Link>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
