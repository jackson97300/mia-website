import { Clock, ChevronRight, ArrowLeft, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { lessons, getLessonBySlug } from '@/data/lessons';
import { lessonContents } from '@/data/lessonContents';
import CandlestickChart from '@/components/education/charts/CandlestickChart';
import SessionHeatmap from '@/components/education/charts/SessionHeatmap';
import RiskRewardCalculator from '@/components/education/calculators/RiskRewardCalculator';

export function generateStaticParams() {
  return lessons.map((lesson) => ({
    slug: lesson.slug,
  }));
}

export default function LessonPage({ params }: { params: { slug: string } }) {
  const { slug } = params;
  const lesson = getLessonBySlug(slug);
  const language = 'fr';

  if (!lesson) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl text-white">Leçon non trouvée</h1>
        <Link href="/education" className="text-mia-cyan mt-4 inline-block">
          Retour à l&apos;éducation
        </Link>
      </div>
    );
  }

  const currentIndex = lessons.findIndex(l => l.slug === slug);
  const prevLesson = currentIndex > 0 ? lessons[currentIndex - 1] : null;
  const nextLesson = currentIndex < lessons.length - 1 ? lessons[currentIndex + 1] : null;
  const content = lessonContents[slug];

  return (
    <div className="p-6 md:p-8 lg:p-12">
      <div className="max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-light-500 mb-8">
          <Link href="/education" className="hover:text-white transition-colors">
            Education
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className={`px-2 py-0.5 rounded text-xs ${
            lesson.category === 'beginner' ? 'bg-mia-cyan/20 text-mia-cyan' : 'bg-mia-gold/20 text-mia-gold'
          }`}>
            {lesson.category === 'beginner' ? 'Débutant' : 'Intermédiaire'}
          </span>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white">{lesson.title.fr}</span>
        </nav>

        {/* Header */}
        <header className="mb-8">
          <span className="text-5xl mb-4 block">{lesson.icon}</span>
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
            {lesson.title.fr}
          </h1>
          <p className="text-xl text-light-400 mb-6">
            {lesson.description.fr}
          </p>
          
          <div className="flex flex-wrap items-center gap-4 text-sm">
            <span className="flex items-center gap-2 text-light-400">
              <Clock className="w-4 h-4" />
              {lesson.duration} min
            </span>
            <span className={`px-3 py-1 rounded-full ${
              lesson.level === 'easy' ? 'bg-green-500/20 text-green-400' :
              lesson.level === 'medium' ? 'bg-yellow-500/20 text-yellow-400' :
              'bg-red-500/20 text-red-400'
            }`}>
              {lesson.level === 'easy' ? 'Facile' : lesson.level === 'medium' ? 'Moyen' : 'Difficile'}
            </span>
            <div className="flex flex-wrap gap-2">
              {lesson.topics.map((topic, i) => (
                <span key={i} className="px-2 py-1 bg-dark-300 text-light-400 rounded text-xs">
                  {topic}
                </span>
              ))}
            </div>
          </div>
        </header>

        {/* Lesson Content */}
        <article className="space-y-8">
          {content ? (
            <>
              {content.sections.map((section, index) => (
                <section key={index} className="card-glass p-6 rounded-2xl">
                  {section.title && (
                    <h2 className="text-2xl font-bold text-white mb-4">
                      {section.title.fr}
                    </h2>
                  )}
                  
                  {section.content && (
                    <div className="text-light-300 space-y-4">
                      {section.content.fr?.map((paragraph: string, pIndex: number) => (
                        <p key={pIndex}>{paragraph}</p>
                      ))}
                    </div>
                  )}

                  {section.component === 'CandlestickChart' && (
                    <div className="mt-6">
                      <CandlestickChart title={section.componentTitle?.fr} />
                    </div>
                  )}
                  
                  {section.component === 'SessionHeatmap' && (
                    <div className="mt-6">
                      <SessionHeatmap language={language} />
                    </div>
                  )}
                  
                  {section.component === 'RiskRewardCalculator' && (
                    <div className="mt-6">
                      <RiskRewardCalculator language={language} />
                    </div>
                  )}

                  {section.bullets && (
                    <ul className="mt-4 space-y-2">
                      {section.bullets.fr?.map((bullet: string, bIndex: number) => (
                        <li key={bIndex} className="flex items-start gap-2 text-light-300">
                          <span className="text-mia-cyan mt-1">•</span>
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  )}

                  {section.infoBox && (
                    <div className={`mt-4 p-4 rounded-xl border-l-4 ${
                      section.infoBox.type === 'tip' ? 'bg-mia-cyan/10 border-mia-cyan' :
                      section.infoBox.type === 'warning' ? 'bg-yellow-500/10 border-yellow-500' :
                      'bg-purple-500/10 border-purple-500'
                    }`}>
                      <p className="text-light-300">{section.infoBox.text.fr}</p>
                    </div>
                  )}
                </section>
              ))}
            </>
          ) : (
            <section className="card-glass p-6 rounded-2xl">
              <p className="text-light-400">Contenu en cours de rédaction...</p>
            </section>
          )}
        </article>

        {/* Navigation */}
        <nav className="flex justify-between mt-12 pt-8 border-t border-white/10">
          {prevLesson ? (
            <Link
              href={`/education/${prevLesson.slug}`}
              className="flex items-center gap-3 p-4 bg-dark-200 hover:bg-dark-300 rounded-xl transition-all group max-w-[45%]"
            >
              <ArrowLeft className="w-5 h-5 text-light-500 group-hover:-translate-x-1 transition-transform" />
              <div className="text-left">
                <div className="text-xs text-light-500">Leçon précédente</div>
                <div className="text-sm text-white font-medium truncate">{prevLesson.title.fr}</div>
              </div>
            </Link>
          ) : <div />}
          
          {nextLesson ? (
            <Link
              href={`/education/${nextLesson.slug}`}
              className="flex items-center gap-3 p-4 bg-dark-200 hover:bg-dark-300 rounded-xl transition-all group max-w-[45%]"
            >
              <div className="text-right">
                <div className="text-xs text-light-500">Leçon suivante</div>
                <div className="text-sm text-white font-medium truncate">{nextLesson.title.fr}</div>
              </div>
              <ArrowRight className="w-5 h-5 text-light-500 group-hover:translate-x-1 transition-transform" />
            </Link>
          ) : <div />}
        </nav>
      </div>
    </div>
  );
}
