import { useState, useEffect, useCallback, useRef } from 'react';
import { SearchResultItem, SearchCategory } from '../types/search.types';
import { SearchService } from '../services/search.service';

export function useSearch() {
  const [query, setQuery] = useState<string>('');
  const [category, setCategory] = useState<SearchCategory>('all');
  const [results, setResults] = useState<SearchResultItem[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  const debounceTimerRef = useRef<NodeJS.Timeout | null>(null);

  const performSearch = useCallback(async (searchQuery: string, searchCategory: SearchCategory) => {
    if (!searchQuery.trim() || searchQuery.trim().length < 2) {
      setResults([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    try {
      const data = await SearchService.search(searchQuery, searchCategory);
      setResults(data);
      setSelectedIndex(0);
    } catch (err) {
      console.warn('[useSearch] Search execution error:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (debounceTimerRef.current) {
      clearTimeout(debounceTimerRef.current);
    }

    if (!query.trim()) {
      setResults([]);
      setIsLoading(false);
      return;
    }

    setIsLoading(true);
    debounceTimerRef.current = setTimeout(() => {
      performSearch(query, category);
    }, 250);

    return () => {
      if (debounceTimerRef.current) {
        clearTimeout(debounceTimerRef.current);
      }
    };
  }, [query, category, performSearch]);

  // Global Ctrl+K / Cmd+K listener
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen((prev) => !prev);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openSearch = () => setIsOpen(true);
  const closeSearch = () => {
    setIsOpen(false);
    setQuery('');
    setResults([]);
  };

  return {
    query,
    setQuery,
    category,
    setCategory,
    results,
    isLoading,
    isOpen,
    openSearch,
    closeSearch,
    selectedIndex,
    setSelectedIndex,
  };
}
