import React, { useState } from 'react';
import { AdminUserRecord, UserFilterOptions } from '../types/admin.types';
import { Card } from '@/components/data-display/Card';
import { Button } from '@/components/elements/Button';
import { Input } from '@/components/forms/Input';
import {
  MagnifyingGlassIcon,
  ShieldCheckIcon,
  ShieldExclamationIcon,
  NoSymbolIcon,
  CheckCircleIcon,
  ArrowPathIcon,
} from '@heroicons/react/24/outline';

interface AdminUsersTabProps {
  users: AdminUserRecord[];
  isLoading: boolean;
  filters: UserFilterOptions;
  onFilterChange: (filters: UserFilterOptions) => void;
  onRefresh: () => void;
  onToggleSuspension: (userId: string, isSuspended: boolean, reason?: string) => Promise<void>;
  onSetRole: (userId: string, role: 'admin' | 'user') => Promise<void>;
}

export const AdminUsersTab: React.FC<AdminUsersTabProps> = ({
  users,
  isLoading,
  filters,
  onFilterChange,
  onRefresh,
  onToggleSuspension,
  onSetRole,
}) => {
  // Suspension modal state
  const [selectedUserForSuspend, setSelectedUserForSuspend] = useState<AdminUserRecord | null>(null);
  const [suspendReason, setSuspendReason] = useState('Violated community guidelines.');
  const [isSubmittingSuspend, setIsSubmittingSuspend] = useState(false);

  const handleSearchChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const updated = { ...filters, searchQuery: e.target.value };
    onFilterChange(updated);
  };

  const handlePlanFilter = (plan: 'all' | 'free' | 'pro') => {
    onFilterChange({ ...filters, planFilter: plan });
  };

  const handleStatusFilter = (status: 'all' | 'active' | 'suspended') => {
    onFilterChange({ ...filters, statusFilter: status });
  };

  const handleRoleFilter = (role: 'all' | 'admin' | 'user') => {
    onFilterChange({ ...filters, roleFilter: role });
  };

  const handleConfirmSuspension = async () => {
    if (!selectedUserForSuspend) return;
    setIsSubmittingSuspend(true);
    try {
      await onToggleSuspension(selectedUserForSuspend.id, true, suspendReason);
      setSelectedUserForSuspend(null);
      setSuspendReason('Violated community guidelines.');
    } finally {
      setIsSubmittingSuspend(false);
    }
  };

  return (
    <div className="space-y-6">
      {/* Header Bar */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-xl font-heading font-bold text-[color:var(--text-primary)]">
            User Management &amp; RBAC Control
          </h2>
          <p className="text-sm text-[color:var(--text-secondary)] mt-0.5">
            Search, filter, manage roles, and review accounts across the Skillora ecosystem.
          </p>
        </div>
        <button
          type="button"
          onClick={onRefresh}
          disabled={isLoading}
          className="self-start sm:self-auto flex items-center gap-2 px-3.5 py-2 rounded-xl border border-border bg-[color:var(--color-bg-card)] hover:bg-black/5 dark:hover:bg-white/5 text-xs font-semibold text-[color:var(--text-primary)] transition-colors cursor-pointer disabled:opacity-50"
        >
          <ArrowPathIcon className={`w-4 h-4 ${isLoading ? 'animate-spin text-brand' : ''}`} />
          <span>Refresh Users</span>
        </button>
      </div>

      {/* Filter Controls Bar */}
      <Card className="p-4 space-y-4">
        <div className="flex flex-col md:flex-row items-center gap-4">
          {/* Search Box */}
          <div className="relative flex-1 w-full">
            <MagnifyingGlassIcon className="w-5 h-5 absolute left-3.5 top-1/2 -translate-y-1/2 text-[color:var(--text-secondary)]" />
            <input
              type="text"
              placeholder="Search by full name, email, or user ID..."
              value={filters.searchQuery || ''}
              onChange={handleSearchChange}
              className="w-full bg-[color:var(--color-bg-base)] border border-border rounded-xl pl-10 pr-4 py-2.5 text-sm text-[color:var(--text-primary)] placeholder-[color:var(--text-secondary)] focus:outline-none focus:border-brand transition-colors"
            />
          </div>

          {/* Quick Filters Group */}
          <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
            {/* Plan Filter */}
            <div className="flex items-center rounded-xl border border-border bg-[color:var(--color-bg-base)] p-1 text-xs font-semibold">
              {(['all', 'pro', 'free'] as const).map((p) => (
                <button
                  key={p}
                  type="button"
                  onClick={() => handlePlanFilter(p)}
                  className={`px-3 py-1 rounded-lg capitalize transition-colors cursor-pointer ${
                    (filters.planFilter || 'all') === p
                      ? 'bg-brand text-white shadow-sm'
                      : 'text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]'
                  }`}
                >
                  {p}
                </button>
              ))}
            </div>

            {/* Status Filter */}
            <div className="flex items-center rounded-xl border border-border bg-[color:var(--color-bg-base)] p-1 text-xs font-semibold">
              {(['all', 'active', 'suspended'] as const).map((s) => (
                <button
                  key={s}
                  type="button"
                  onClick={() => handleStatusFilter(s)}
                  className={`px-3 py-1 rounded-lg capitalize transition-colors cursor-pointer ${
                    (filters.statusFilter || 'all') === s
                      ? 'bg-brand text-white shadow-sm'
                      : 'text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]'
                  }`}
                >
                  {s}
                </button>
              ))}
            </div>

            {/* Role Filter */}
            <div className="flex items-center rounded-xl border border-border bg-[color:var(--color-bg-base)] p-1 text-xs font-semibold">
              {(['all', 'admin', 'user'] as const).map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => handleRoleFilter(r)}
                  className={`px-3 py-1 rounded-lg capitalize transition-colors cursor-pointer ${
                    (filters.roleFilter || 'all') === r
                      ? 'bg-brand text-white shadow-sm'
                      : 'text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)]'
                  }`}
                >
                  {r}
                </button>
              ))}
            </div>
          </div>
        </div>
      </Card>

      {/* Users Table */}
      <Card className="p-0 overflow-hidden border-border">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b border-border bg-black/5 dark:bg-white/5 text-[11px] font-heading font-bold uppercase tracking-wider text-[color:var(--text-secondary)]">
                <th className="py-3.5 px-4">User</th>
                <th className="py-3.5 px-4">Plan</th>
                <th className="py-3.5 px-4">Role</th>
                <th className="py-3.5 px-4">Status</th>
                <th className="py-3.5 px-4">Joined</th>
                <th className="py-3.5 px-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border text-sm">
              {isLoading ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-[color:var(--text-secondary)]">
                    <div className="flex items-center justify-center gap-2">
                      <ArrowPathIcon className="w-5 h-5 animate-spin text-brand" />
                      <span>Loading user accounts...</span>
                    </div>
                  </td>
                </tr>
              ) : users.length === 0 ? (
                <tr>
                  <td colSpan={6} className="py-12 text-center text-[color:var(--text-secondary)]">
                    No users matching current search filter criteria.
                  </td>
                </tr>
              ) : (
                users.map((u) => (
                  <tr key={u.id} className="hover:bg-black/5 dark:hover:bg-white/5 transition-colors">
                    {/* User info */}
                    <td className="py-3.5 px-4">
                      <div className="flex items-center gap-3">
                        {u.avatarUrl ? (
                          <img
                            src={u.avatarUrl}
                            alt={u.fullName}
                            className="w-9 h-9 rounded-full object-cover border border-border flex-shrink-0"
                          />
                        ) : (
                          <div className="w-9 h-9 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center text-brand text-xs font-heading font-bold flex-shrink-0">
                            {u.fullName.slice(0, 2).toUpperCase()}
                          </div>
                        )}
                        <div>
                          <div className="font-heading font-semibold text-[color:var(--text-primary)] flex items-center gap-1.5">
                            <span>{u.fullName}</span>
                            {u.role === 'admin' && (
                              <ShieldCheckIcon className="w-4 h-4 text-brand" title="Administrator" />
                            )}
                          </div>
                          <span className="text-xs font-mono text-[color:var(--text-secondary)]">
                            ID: {u.id.slice(0, 8)}...
                          </span>
                        </div>
                      </div>
                    </td>

                    {/* Plan */}
                    <td className="py-3.5 px-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize border ${
                          u.plan === 'pro'
                            ? 'bg-brand/10 text-brand border-brand/30 font-bold'
                            : 'bg-zinc-500/10 text-[color:var(--text-secondary)] border-border'
                        }`}
                      >
                        {u.plan}
                      </span>
                    </td>

                    {/* Role */}
                    <td className="py-3.5 px-4">
                      <span
                        className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-semibold capitalize border ${
                          u.role === 'admin'
                            ? 'bg-purple-500/10 text-purple-400 border-purple-500/30'
                            : 'bg-zinc-500/10 text-[color:var(--text-secondary)] border-border'
                        }`}
                      >
                        {u.role}
                      </span>
                    </td>

                    {/* Status */}
                    <td className="py-3.5 px-4">
                      {u.isSuspended ? (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-red-500/10 text-red-400 border border-red-500/30">
                          <NoSymbolIcon className="w-3.5 h-3.5" /> Suspended
                        </span>
                      ) : (
                        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-emerald-500/10 text-emerald-400 border border-emerald-500/30">
                          <CheckCircleIcon className="w-3.5 h-3.5" /> Active
                        </span>
                      )}
                    </td>

                    {/* Joined */}
                    <td className="py-3.5 px-4 text-xs font-mono text-[color:var(--text-secondary)]">
                      {new Date(u.createdAt).toLocaleDateString('en-US', {
                        month: 'short',
                        day: 'numeric',
                        year: 'numeric',
                      })}
                    </td>

                    {/* Actions */}
                    <td className="py-3.5 px-4 text-right">
                      <div className="flex items-center justify-end gap-2">
                        {/* Role promotion toggle */}
                        {u.role === 'admin' ? (
                          <button
                            type="button"
                            onClick={() => onSetRole(u.id, 'user')}
                            title="Demote to User"
                            className="px-2.5 py-1 rounded-lg border border-border bg-[color:var(--color-bg-base)] text-xs text-[color:var(--text-secondary)] hover:text-[color:var(--text-primary)] transition-colors cursor-pointer"
                          >
                            Make User
                          </button>
                        ) : (
                          <button
                            type="button"
                            onClick={() => onSetRole(u.id, 'admin')}
                            title="Promote to Admin"
                            className="px-2.5 py-1 rounded-lg border border-purple-500/30 bg-purple-500/10 text-xs text-purple-400 hover:bg-purple-500/20 transition-colors cursor-pointer font-medium"
                          >
                            Make Admin
                          </button>
                        )}

                        {/* Suspension toggle */}
                        {u.isSuspended ? (
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => onToggleSuspension(u.id, false)}
                            className="text-emerald-400 border border-emerald-500/30 hover:bg-emerald-500/10 text-xs py-1 px-2.5"
                          >
                            Restore
                          </Button>
                        ) : (
                          <Button
                            size="sm"
                            variant="ghost"
                            onClick={() => setSelectedUserForSuspend(u)}
                            className="text-red-400 border border-red-500/30 hover:bg-red-500/10 text-xs py-1 px-2.5"
                          >
                            Suspend
                          </Button>
                        )}
                      </div>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </Card>

      {/* Account Suspension Modal */}
      {selectedUserForSuspend && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-in fade-in duration-200">
          <div className="bg-[color:var(--color-bg-card)] border border-border rounded-2xl p-6 max-w-md w-full shadow-2xl space-y-4 animate-in zoom-in-95 duration-200">
            <div className="flex items-center gap-3 text-red-500">
              <ShieldExclamationIcon className="w-6 h-6 flex-shrink-0" />
              <h3 className="text-lg font-heading font-bold">
                Suspend Account: {selectedUserForSuspend.fullName}
              </h3>
            </div>

            <p className="text-xs text-[color:var(--text-secondary)] leading-relaxed">
              Suspended users cannot generate roadmaps, use Study Buddy, or publish portfolio pages.
            </p>

            <div className="space-y-2">
              <label className="text-xs font-heading font-semibold text-[color:var(--text-primary)]">
                Reason for suspension:
              </label>
              <Input
                value={suspendReason}
                onChange={(e) => setSuspendReason(e.target.value)}
                placeholder="e.g. Terms of Service violation"
                disabled={isSubmittingSuspend}
              />
            </div>

            <div className="flex justify-end gap-3 pt-2">
              <Button
                variant="ghost"
                onClick={() => setSelectedUserForSuspend(null)}
                disabled={isSubmittingSuspend}
              >
                Cancel
              </Button>
              <Button
                variant="primary"
                className="bg-red-600 hover:bg-red-700 text-white"
                isLoading={isSubmittingSuspend}
                onClick={handleConfirmSuspension}
              >
                Confirm Suspension
              </Button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
