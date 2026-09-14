import React, { useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SearchResultItem, SearchCategory } from '../types/search.types';
import { useSearch } from '../hooks/useSearch';
import {
  MagnifyingGlassIcon,
  XMarkIcon,
  MapIcon,
  BookOpenIcon,
  SparklesIcon,
  AcademicCapIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import { cn } from '@/utils/cn';

export interface GlobalSearchModalProps {
  isOpen: boolean;
  onClose: () => void;
  query?: string;
  setQuery?: (q: string) => void;
  category?: SearchCategory;
  setCategory?: (c: SearchCategory) => void;
  results?: SearchResultItem[];
  isLoading?: boolean;
  selectedIndex?: number;
  setSelectedIndex?: (i: number | ((prev: number) => number)) => void;
}

const CATEGORIES: { id: SearchCategory; label: string }[] = [
  { id: 'all', label: 'All Results' },
  { id: 'lessons', label: 'Lessons' },
  { id: 'roadmaps', label: 'Roadmaps' },
  { id: 'skills', label: 'Skills' },
  { id: 'portfolios', label: 'Portfolios' },
  { id: 'certificates', label: 'Certificates' },
];

const getCategoryIcon = (cat: string) => {
  switch (cat) {
    case 'roadmap':
      return <MapIcon className="w-4 h-4 text-brand" />;
    case 'lesson':
      return <BookOpenIcon className="w-4 h-4 text-blue-400" />;
    case 'skill':
      return <SparklesIcon className="w-4 h-4 text-purple-400" />;
    case 'portfolio':
      return <UserIcon className="w-4 h-4 text-emerald-400" />;
    case 'certificate':
      return <AcademicCapIcon className="w-4 h-4 text-amber-400" />;
    default:
      return <MagnifyingGlassIcon className="w-4 h-4 text-[color:var(--text-secondary)]" />;
  }
};

export const GlobalSearchModal: React.FC<GlobalSearchModalProps> = ({
  isOpen,
  onClose,
  query: propQuery,
  setQuery: propSetQuery,
  category: propCategory,
  setCategory: propSetCategory,
  results: propResults,
  isLoading: propIsLoading,
  selectedIndex: propSelectedIndex,
  setSelectedIndex: propSetSelectedIndex,
}) => {
  const internalSearch = useSearch();

  const query = propQuery ?? internalSearch.query;
  const setQuery = propSetQuery ?? internalSearch.setQuery;
  const category = propCategory ?? internalSearch.category;
  const setCategory = propSetCategory ?? internalSearch.setCategory;
  const results = propResults ?? internalSearch.results;
  const isLoading = propIsLoading ?? internalSearch.isLoading;
  const selectedIndex = propSelectedIndex ?? internalSearch.selectedIndex;
  const setSelectedIndex = propSetSelectedIndex ?? internalSearch.setSelectedIndex;

  const navigate = useNavigate();
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 50);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const handleSelect = (item: SearchResultItem) => {
    onClose();
    navigate(item.url);
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSelectedIndex((prev: number) => (prev < results.length - 1 ? prev + 1 : 0));
    } else if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSelectedIndex((prev: number) => (prev > 0 ? prev - 1 : results.length - 1));
    } else if (e.key === 'Enter' && results[selectedIndex]) {
      e.preventDefault();
      handleSelect(results[selectedIndex]);
    } else if (e.key === 'Escape') {
      onClose();
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-16 sm:pt-24 p-4 bg-black/75 backdrop-blur-sm animate-in fade-in duration-150">
      <div
        className="w-full max-w-2xl rounded-2xl border border-border bg-[color:var(--color-bg-card)] shadow-2xl overflow-hidden flex flex-col max-h-[80vh] animate-in zoom-in-95 duration-150"
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="flex items-center gap-3 px-4 py-3.5 border-b border-border bg-[color:var(--color-bg-base)]">
          <MagnifyingGlassIcon className="w-5 h-5 text-[color:var(--text-secondary)] flex-shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search lessons, roadmaps, skills, portfolios, certificates..."
            className="flex-1 bg-transparent text-sm sm:text-base font-body text-[color:var(--text-primary)] placeholder-[color:var(--text-secondary)] focus:outline-none"
          />
          {query && (
            <button
              type="button"
              onClick={() => setQuery('')}
              className="p-1 rounded-md text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] cursor-pointer"
            >
              <XMarkIcon className="w-4 h-4" />
            </button>
          )}
          <kbd className="hidden sm:inline-block px-2 py-0.5 rounded bg-black/5 dark:bg-white/5 border border-border text-[10px] font-mono text-[color:var(--text-secondary)]">
            ESC
          </kbd>
        </div>

        {/* Category Filter Pills */}
        <div className="flex items-center gap-2 px-4 py-2.5 overflow-x-auto border-b border-border bg-[color:var(--color-bg-base)]/50 scrollbar-hide">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setCategory(cat.id)}
              className={cn(
                'px-3 py-1 rounded-full text-xs font-mono transition-colors whitespace-nowrap cursor-pointer',
                category === cat.id
                  ? 'bg-brand text-white font-semibold'
                  : 'text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5'
              )}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Results List */}
        <div className="flex-1 overflow-y-auto p-2 divide-y divide-border/50">
          {isLoading ? (
            <div className="p-8 text-center text-xs text-[color:var(--text-secondary)] font-mono">
              Searching Skillora catalog...
            </div>
          ) : query.trim().length > 0 && results.length === 0 ? (
            <div className="p-8 text-center">
              <p className="text-sm font-heading font-medium text-[color:var(--text-primary)]">
                No results found for "{query}"
              </p>
              <p className="text-xs text-[color:var(--text-secondary)] mt-1">
                Try searching for a different skill, curriculum topic, or student portfolio.
              </p>
            </div>
          ) : query.trim().length === 0 ? (
            <div className="p-6 text-center text-xs text-[color:var(--text-secondary)]">
              <p className="font-heading font-semibold text-sm text-[color:var(--text-primary)] mb-1">
                Quick Navigation
              </p>
              <p>Type keywords like <span className="text-brand font-mono">Python</span>, <span className="text-brand font-mono">React</span>, or <span className="text-brand font-mono">Full-Stack</span>.</p>
            </div>
          ) : (
            results.map((item, index) => (
              <div
                key={item.id}
                onClick={() => handleSelect(item)}
                onMouseEnter={() => setSelectedIndex(index)}
                className={cn(
                  'p-3.5 rounded-xl flex items-start gap-3 transition-colors cursor-pointer',
                  selectedIndex === index
                    ? 'bg-brand/10 border border-brand/30 text-[color:var(--text-primary)]'
                    : 'hover:bg-black/5 dark:hover:bg-white/5 text-[color:var(--text-secondary)]'
                )}
              >
                <div className="p-2 rounded-lg bg-[color:var(--color-bg-base)] border border-border flex-shrink-0 mt-0.5">
                  {getCategoryIcon(item.category)}
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="text-sm font-heading font-bold text-[color:var(--text-primary)] truncate">
                      {item.title}
                    </h4>
                    {item.badge && (
                      <span className="px-2 py-0.5 rounded-full bg-black/5 dark:bg-white/5 border border-border text-[10px] font-mono text-brand flex-shrink-0">
                        {item.badge}
                      </span>
                    )}
                  </div>
                  {item.subtitle && (
                    <p className="text-xs text-[color:var(--text-secondary)] font-medium mt-0.5">
                      {item.subtitle}
                    </p>
                  )}
                  {item.description && (
                    <p className="text-xs text-[color:var(--text-secondary)] mt-1 line-clamp-1">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            ))
          )}
        </div>

        {/* Footer */}
        <div className="p-3 border-t border-border bg-[color:var(--color-bg-base)] flex items-center justify-between text-[11px] text-[color:var(--text-secondary)] font-mono">
          <div className="flex items-center gap-2">
            <span>Navigate <kbd className="px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/5 border border-border">↑</kbd> <kbd className="px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/5 border border-border">↓</kbd></span>
            <span>Select <kbd className="px-1.5 py-0.5 rounded bg-black/5 dark:bg-white/5 border border-border">↵</kbd></span>
          </div>
          <span>Powered by Skillora Search</span>
        </div>
      </div>
    </div>
  );
};
