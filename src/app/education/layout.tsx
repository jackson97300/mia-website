'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  Search, Home, ChevronDown, BookOpen, Clock, Zap, 
  GraduationCap, Rocket, Menu, X 
} from 'lucide-react';
import { useLanguage } from '@/i18n/LanguageContext';
import { lessons, getLessonsByCategory } from '@/data/lessons';

export default function EducationLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();
  const { language } = useLanguage();
  const [searchQuery, setSearchQuery] = useState('');
  const [beginnerOpen, setBeginnerOpen] = useState(true);
  const [intermediateOpen, setIntermediateOpen] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const beginnerLessons = getLessonsByCategory('beginner');
  const intermediateLessons = getLessonsByCategory('intermediate');
  const totalDuration = lessons.reduce((acc, l) => acc + l.duration, 0);
  const totalHours = Math.round(totalDuration / 60);

  const filteredBeginnerLessons = beginnerLessons.filter(l => 
    l.title.fr.toLowerCase().includes(searchQuery.toLowerCase()) ||
    l.title.en.toLowerCase().includes(searchQuery.toLowerCase())
  );
  
  const filteredIntermediateLessons = intermediateLessons.filter(l => 
    l.title.fr.toLowerCase().includes(searchQuery.toLowerCase()) ||
    l.title.en.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const SidebarContent = () => (
    <>
      {/* Search */}
      <div className="p-4 border-b border-white/10">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-light-500" />
          <input
            type="text"
            placeholder="Rechercher..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 bg-dark-300 border border-white/10 rounded-xl text-white placeholder-light-500 focus:outline-none focus:border-mia-cyan/50 text-sm"
          />
        </div>
      </div>

      {/* Lessons List */}
      <div className="flex-1 overflow-y-auto p-4 space-y-4">
        {/* Débutant */}
        <div>
          <button 
            onClick={() => setBeginnerOpen(!beginnerOpen)}
            className="flex items-center justify-between w-full text-left mb-2 group"
          >
            <div className="flex items-center gap-2">
              <GraduationCap className="w-4 h-4 text-mia-cyan" />
              <span className="text-sm font-semibold text-mia-cyan uppercase tracking-wider">
                Débutant
              </span>
              <span className="text-xs text-light-500">({filteredBeginnerLessons.length})</span>
            </div>
            <ChevronDown className={`w-4 h-4 text-light-500 transition-transform ${beginnerOpen ? 'rotate-180' : ''}`} />
          </button>
          
          <div className={`space-y-1 overflow-hidden transition-all duration-300 ${beginnerOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            {filteredBeginnerLessons.map((lesson) => (
              <Link
                key={lesson.id}
                href={`/education/${lesson.slug}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center gap-2 group ${
                  pathname === `/education/${lesson.slug}`
                    ? 'bg-mia-cyan/20 text-mia-cyan'
                    : 'text-light-400 hover:bg-dark-300 hover:text-white'
                }`}
              >
                <span className="text-base">{lesson.icon}</span>
                <span className="truncate flex-1">{lesson.title.fr}</span>
                <span className="text-xs text-light-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  {lesson.duration}m
                </span>
              </Link>
            ))}
          </div>
        </div>

        {/* Intermédiaire */}
        <div>
          <button 
            onClick={() => setIntermediateOpen(!intermediateOpen)}
            className="flex items-center justify-between w-full text-left mb-2 group"
          >
            <div className="flex items-center gap-2">
              <Rocket className="w-4 h-4 text-mia-gold" />
              <span className="text-sm font-semibold text-mia-gold uppercase tracking-wider">
                Intermédiaire
              </span>
              <span className="text-xs text-light-500">({filteredIntermediateLessons.length})</span>
            </div>
            <ChevronDown className={`w-4 h-4 text-light-500 transition-transform ${intermediateOpen ? 'rotate-180' : ''}`} />
          </button>
          
          <div className={`space-y-1 overflow-hidden transition-all duration-300 ${intermediateOpen ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'}`}>
            {filteredIntermediateLessons.map((lesson) => (
              <Link
                key={lesson.id}
                href={`/education/${lesson.slug}`}
                onClick={() => setMobileMenuOpen(false)}
                className={`w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center gap-2 group ${
                  pathname === `/education/${lesson.slug}`
                    ? 'bg-mia-gold/20 text-mia-gold'
                    : 'text-light-400 hover:bg-dark-300 hover:text-white'
                }`}
              >
                <span className="text-base">{lesson.icon}</span>
                <span className="truncate flex-1">{lesson.title.fr}</span>
                <span className="text-xs text-light-500 opacity-0 group-hover:opacity-100 transition-opacity">
                  {lesson.duration}m
                </span>
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="p-4 border-t border-white/10 bg-dark-200/50">
        <div className="flex items-center justify-between text-xs text-light-500">
          <div className="flex items-center gap-1">
            <BookOpen className="w-3.5 h-3.5" />
            <span>{lessons.length} leçons</span>
          </div>
          <div className="flex items-center gap-1">
            <Clock className="w-3.5 h-3.5" />
            <span>~{totalHours}h total</span>
          </div>
        </div>
      </div>
    </>
  );

  return (
    <div className="min-h-screen bg-dark flex flex-col">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-dark-100/95 backdrop-blur-xl border-b border-white/10">
        <div className="flex items-center justify-between h-14 px-4">
          <div className="flex items-center gap-3">
            {/* Mobile menu button */}
            <button 
              className="lg:hidden p-2 text-light-400 hover:text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
            
            <Link href="/" className="flex items-center gap-2 text-light-400 hover:text-white transition-colors">
              <Home className="w-4 h-4" />
              <span className="hidden sm:inline text-sm">Accueil</span>
            </Link>
            
            <div className="h-5 w-px bg-white/20" />
            
            <Link href="/" className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <div className="relative w-7 h-7">
                <img
                  alt="MIA"
                  className="rounded-full object-cover border border-mia-gold/50 w-full h-full"
                  src="/images/logo-dark.jpg"
                />
              </div>
              <span className="font-bold text-white text-sm hidden sm:inline">MIA IA SYSTEM</span>
            </Link>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="https://discord.gg/mia-ia-system"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:flex items-center gap-2 px-3 py-1.5 bg-accent-purple/20 text-accent-purple rounded-lg text-sm hover:bg-accent-purple/30 transition-colors"
            >
              <Zap className="w-4 h-4" />
              Discord
            </a>
          </div>
        </div>
      </header>

      <div className="flex flex-1 pt-14">
        {/* Desktop Sidebar */}
        <aside className="hidden lg:flex w-72 flex-shrink-0 border-r border-white/10 bg-dark-100 fixed top-14 bottom-0 flex-col overflow-hidden">
          <SidebarContent />
        </aside>

        {/* Mobile Sidebar */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 z-40 pt-14">
            <div className="absolute inset-0 bg-black/50" onClick={() => setMobileMenuOpen(false)} />
            <aside className="relative w-72 h-full bg-dark-100 flex flex-col overflow-hidden">
              <SidebarContent />
            </aside>
          </div>
        )}

        {/* Main Content */}
        <main className="flex-1 lg:ml-72 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
