import { Section } from '../layout/Section';
import { motion } from 'framer-motion';
import { ExternalLink, Code2, Target, Flame, Trophy } from 'lucide-react';

// ── Update these numbers whenever your stats change ──────────────────────────
const stats = {
    leetcode: {
        solved: 140,
        total: 3400,
        easy: 62,
        medium: 66,
        hard: 12,
        streak: 30,
        url: 'https://leetcode.com/u/Aks_719/',
    },
    gfg: {
        score: 420,
        solved: 85,
        streak: 15,
        url: 'https://www.geeksforgeeks.org/profile/bodduaks1rue',
    },
    hackerrank: {
        stars: 5,
        badges: ['C++', 'Java', 'Problem Solving'],
        url: 'https://www.hackerrank.com/profile/bodduakshaya22',
    },
    total: 200,
};

const ProgressBar = ({ value, max, color }: { value: number; max: number; color: string }) => (
    <div className="w-full h-1.5 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
        <motion.div
            initial={{ width: 0 }}
            whileInView={{ width: `${Math.min((value / max) * 100, 100)}%` }}
            viewport={{ once: true }}
            transition={{ duration: 0.9, ease: 'easeOut', delay: 0.2 }}
            className={`h-full rounded-full ${color}`}
        />
    </div>
);

export const DSATracker = () => {
    return (
        <Section id="dsa" className="bg-white dark:bg-[#09090b] border-b border-slate-200 dark:border-slate-800/80">
            <div className="max-w-5xl mx-auto">
                {/* Header */}
                <div className="mb-14">
                    <div className="flex items-center gap-3 mb-4">
                        <Code2 size={28} className="text-slate-800 dark:text-slate-200" />
                        <h2 className="text-4xl md:text-5xl font-black tracking-tighter text-slate-900 dark:text-white font-display">
                            DSA Progress.
                        </h2>
                    </div>
                    <p className="max-w-xl text-slate-600 dark:text-slate-400 text-lg leading-relaxed">
                        Coding profiles, problem-solving streaks, and algorithmic progress across platforms.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                    {/* ── LeetCode Card ─────────────────────────────── */}
                    <motion.a
                        href={stats.leetcode.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.5 }}
                        className="group p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 hover:border-orange-300 dark:hover:border-orange-700 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col gap-5 cursor-pointer"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">🟡</span>
                                <div>
                                    <h3 className="font-black font-display text-slate-900 dark:text-white">LeetCode</h3>
                                    <p className="text-xs text-slate-500 font-mono">@Aks_719</p>
                                </div>
                            </div>
                            <ExternalLink size={16} className="text-slate-400 group-hover:text-orange-500 transition-colors" />
                        </div>

                        {/* Solved big number */}
                        <div className="flex items-end gap-2">
                            <span className="text-5xl font-black font-display text-slate-900 dark:text-white">{stats.leetcode.solved}</span>
                            <span className="text-slate-400 text-sm mb-1.5">/ {stats.leetcode.total} solved</span>
                        </div>

                        <ProgressBar value={stats.leetcode.solved} max={stats.leetcode.total} color="bg-orange-400" />

                        {/* Difficulty split */}
                        <div className="grid grid-cols-3 gap-2 text-center">
                            {[
                                { label: 'Easy', val: stats.leetcode.easy, color: 'text-emerald-500' },
                                { label: 'Medium', val: stats.leetcode.medium, color: 'text-amber-500' },
                                { label: 'Hard', val: stats.leetcode.hard, color: 'text-red-500' },
                            ].map(({ label, val, color }) => (
                                <div key={label} className="p-2 bg-white dark:bg-[#09090b] rounded-xl border border-slate-200 dark:border-slate-800">
                                    <p className={`text-lg font-black font-display ${color}`}>{val}</p>
                                    <p className="text-xs text-slate-500 font-medium">{label}</p>
                                </div>
                            ))}
                        </div>

                        {/* Streak */}
                        <div className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400">
                            <Flame size={16} className="text-orange-400" />
                            {stats.leetcode.streak}-day streak
                        </div>
                    </motion.a>

                    {/* ── GFG Card ──────────────────────────────────── */}
                    <motion.a
                        href={stats.gfg.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.5, delay: 0.1 }}
                        className="group p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 hover:border-green-300 dark:hover:border-green-700 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col gap-5 cursor-pointer"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">🟢</span>
                                <div>
                                    <h3 className="font-black font-display text-slate-900 dark:text-white">GeeksforGeeks</h3>
                                    <p className="text-xs text-slate-500 font-mono">@bodduaks1rue</p>
                                </div>
                            </div>
                            <ExternalLink size={16} className="text-slate-400 group-hover:text-green-500 transition-colors" />
                        </div>

                        <div className="flex items-end gap-2">
                            <span className="text-5xl font-black font-display text-slate-900 dark:text-white">{stats.gfg.solved}</span>
                            <span className="text-slate-400 text-sm mb-1.5">problems solved</span>
                        </div>

                        <ProgressBar value={stats.gfg.solved} max={200} color="bg-green-500" />

                        <div className="flex items-center gap-3">
                            <div className="flex-1 p-3 bg-white dark:bg-[#09090b] rounded-xl border border-slate-200 dark:border-slate-800 text-center">
                                <p className="text-2xl font-black font-display text-green-500">{stats.gfg.score}</p>
                                <p className="text-xs text-slate-500 font-medium">Score</p>
                            </div>
                            <div className="flex-1 p-3 bg-white dark:bg-[#09090b] rounded-xl border border-slate-200 dark:border-slate-800 text-center">
                                <p className="text-2xl font-black font-display text-slate-900 dark:text-white">{stats.gfg.streak}</p>
                                <p className="text-xs text-slate-500 font-medium">Day Streak</p>
                            </div>
                        </div>

                        <div className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400">
                            <Target size={16} className="text-green-500" />
                            Data Structures | Algorithms
                        </div>
                    </motion.a>

                    {/* ── HackerRank Card ───────────────────────────── */}
                    <motion.a
                        href={stats.hackerrank.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: '-80px' }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                        className="group p-6 rounded-3xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-900/40 hover:border-emerald-300 dark:hover:border-emerald-700 hover:-translate-y-1 hover:shadow-lg transition-all flex flex-col gap-5 cursor-pointer"
                    >
                        <div className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <span className="text-2xl">🟩</span>
                                <div>
                                    <h3 className="font-black font-display text-slate-900 dark:text-white">HackerRank</h3>
                                    <p className="text-xs text-slate-500 font-mono">@bodduakshaya22</p>
                                </div>
                            </div>
                            <ExternalLink size={16} className="text-slate-400 group-hover:text-emerald-500 transition-colors" />
                        </div>

                        <div className="flex items-end gap-2">
                            <span className="text-5xl font-black font-display text-emerald-500">5★</span>
                            <span className="text-slate-400 text-sm mb-1.5">Rating</span>
                        </div>

                        {/* Star display */}
                        <div className="flex items-center gap-1">
                            {Array.from({ length: 5 }).map((_, i) => (
                                <motion.span
                                    key={i}
                                    initial={{ opacity: 0, scale: 0 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3 + i * 0.08 }}
                                    className="text-2xl"
                                >
                                    ⭐
                                </motion.span>
                            ))}
                        </div>

                        {/* Badges */}
                        <div className="flex flex-wrap gap-2">
                            {stats.hackerrank.badges.map((badge) => (
                                <span
                                    key={badge}
                                    className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-200 dark:border-emerald-800 rounded-full"
                                >
                                    <Trophy size={11} />
                                    {badge}
                                </span>
                            ))}
                        </div>

                        <div className="flex items-center gap-2 text-sm font-semibold text-slate-600 dark:text-slate-400">
                            <Trophy size={16} className="text-emerald-500" />
                            C++ · Java · Problem Solving
                        </div>
                    </motion.a>
                </div>

                {/* Total banner */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: 0.3 }}
                    className="mt-6 p-6 rounded-3xl bg-slate-900 dark:bg-white flex flex-col md:flex-row items-center justify-between gap-6"
                >
                    <div>
                        <p className="text-sm font-mono text-slate-400 dark:text-slate-500 uppercase tracking-widest mb-1">Total Problems Solved</p>
                        <p className="text-4xl font-black font-display text-white dark:text-slate-900">{stats.total}+ across all platforms</p>
                    </div>
                    <div className="flex gap-3">
                        {[
                            { label: 'LeetCode', href: stats.leetcode.url },
                            { label: 'GFG', href: stats.gfg.url },
                            { label: 'HackerRank', href: stats.hackerrank.url },
                        ].map(({ label, href }) => (
                            <a
                                key={label}
                                href={href}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-4 py-2 bg-white/10 dark:bg-black/10 text-white dark:text-slate-900 border border-white/20 dark:border-slate-900/20 rounded-2xl text-xs font-bold hover:bg-white/20 dark:hover:bg-black/20 transition-colors"
                            >
                                {label} ↗
                            </a>
                        ))}
                    </div>
                </motion.div>
            </div>
        </Section>
    );
};
