import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  ArrowLeftIcon,
  AcademicCapIcon,
  ChevronDownIcon,
  SparklesIcon,
  CheckBadgeIcon,
} from '@heroicons/react/24/outline';

interface CourseSwitcherNavProps {
  currentCourseTitle: string;
  currentCourseId: string;
}

const ALL_COURSES = [
  { id: 'python', title: 'Python Masterclass', route: '/courses/python' },
  { id: 'web-development', title: 'Web Development Masterclass', route: '/courses/web-development' },
  { id: 'javascript', title: 'JavaScript Masterclass', route: '/courses/javascript' },
  { id: 'html-css', title: 'HTML & CSS Masterclass', route: '/courses/html-css' },
  { id: 'shopify', title: 'Shopify Liquid Masterclass', route: '/courses/shopify' },
  { id: 'shopify-developer', title: 'Shopify Developer Masterclass', route: '/courses/shopify-developer' },
  { id: 'meta-ads', title: 'Meta Ads Masterclass', route: '/courses/meta-ads' },
  { id: 'google-ads', title: 'Google Ads Masterclass', route: '/courses/google-ads' },
  { id: 'youtube-ads', title: 'YouTube Ads Masterclass', route: '/courses/youtube-ads' },
  { id: 'instagram-ads', title: 'Instagram Ads Masterclass', route: '/courses/instagram-ads' },
  { id: 'facebook-ads', title: 'Facebook Ads Masterclass', route: '/courses/facebook-ads' },
  { id: 'seo', title: 'SEO Masterclass', route: '/courses/seo' },
  { id: 'prompt-engineering', title: 'Prompt Engineering Masterclass', route: '/courses/prompt-engineering' },
  { id: '3d-animation', title: '3D Animation Masterclass', route: '/courses/3d-animation' },
  { id: 'english-email-writing', title: 'English Email Writing', route: '/courses/english-email-writing' },
  { id: 'professional-english-speaking', title: 'Professional English Speaking', route: '/courses/professional-english-speaking' },
];

export const CourseSwitcherNav: React.FC<CourseSwitcherNavProps> = ({
  currentCourseTitle,
  currentCourseId,
}) => {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="flex flex-wrap items-center justify-between gap-3 mb-6 p-3 rounded-2xl bg-[color:var(--color-bg-card)] border border-border">
      {/* Left: Back to Courses */}
      <div className="flex items-center gap-3">
        <button
          type="button"
          onClick={() => navigate('/courses')}
          className="inline-flex items-center gap-1.5 text-xs font-mono font-medium text-[color:var(--text-secondary)] hover:text-brand transition-colors cursor-pointer"
        >
          <ArrowLeftIcon className="w-3.5 h-3.5" /> Back to All Courses
        </button>

        <span className="hidden sm:inline text-border">|</span>

        {/* Course Switcher Dropdown */}
        <div className="relative" ref={dropdownRef}>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            title={`Current: ${currentCourseTitle}`}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-xl bg-[color:var(--color-bg-base)] border border-border hover:border-brand text-xs font-heading font-semibold text-[color:var(--text-primary)] transition-all cursor-pointer"
          >
            <AcademicCapIcon className="w-3.5 h-3.5 text-brand" />
            <span>Switch Course</span>
            <ChevronDownIcon className={`w-3 h-3 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
          </button>

          {isOpen && (
            <div className="absolute left-0 top-full mt-2 w-72 max-h-80 overflow-y-auto rounded-2xl bg-[color:var(--color-bg-card)] border border-border shadow-2xl z-40 p-2 space-y-1 animate-in fade-in zoom-in-95 duration-200">
              <div className="px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-wider text-[color:var(--text-secondary)] border-b border-border">
                All Available Masterclasses
              </div>

              {ALL_COURSES.map((c) => {
                const isCurrent = c.id === currentCourseId;
                return (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => {
                      setIsOpen(false);
                      navigate(c.route);
                    }}
                    className={`w-full text-left px-3 py-2 rounded-xl text-xs font-medium transition-all flex items-center justify-between cursor-pointer ${
                      isCurrent
                        ? 'bg-brand/10 text-brand font-bold border border-brand/20'
                        : 'text-[color:var(--text-primary)] hover:bg-black/5 dark:hover:bg-white/5 border border-transparent'
                    }`}
                  >
                    <span className="truncate">{c.title}</span>
                    {isCurrent && <CheckBadgeIcon className="w-3.5 h-3.5 text-brand shrink-0" />}
                  </button>
                );
              })}
            </div>
          )}
        </div>
      </div>

      {/* Right: Active Roadmap Link */}
      <div className="flex items-center gap-2">
        <button
          type="button"
          onClick={() => navigate('/roadmap')}
          className="text-xs font-mono text-brand hover:underline cursor-pointer flex items-center gap-1"
        >
          <SparklesIcon className="w-3.5 h-3.5" /> View Active Roadmap
        </button>
      </div>
    </div>
  );
};
