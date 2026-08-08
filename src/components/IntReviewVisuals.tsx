"use client";

import React from "react";

/**
 * Theme SVG Visualizer for Format 01: Video Response
 */
export function VideoResponseVisual() {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-line bg-ink-900 p-3 sm:p-4 font-mono select-none flex flex-col justify-between group">
      {/* Background blueprint grid pattern */}
      <svg
        className="absolute inset-0 h-full w-full opacity-20 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern id="blueprint-grid-video" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-accent-500/40" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blueprint-grid-video)" />
      </svg>

      {/* Top telemetry bar */}
      <div className="relative z-10 flex items-center justify-between text-[11px] text-paper-muted">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
          </span>
          <span className="text-rose-400 font-bold tracking-wider">REC 01:30</span>
        </div>
        <span className="rounded bg-ink-800 border border-accent-500/30 px-1.5 py-0.5 text-[10px] text-accent-400">
          HD 1080P // 60FPS
        </span>
      </div>

      {/* Center visual: Vector Facial Landmark & Gaze Tracking Grid */}
      <div className="relative z-10 flex flex-1 items-center justify-center my-2">
        <div className="relative flex items-center justify-center w-full max-w-[140px] aspect-[4/3] rounded-md border border-accent-500/30 bg-ink-950/70 p-2 shadow-inner">
          <svg className="w-16 h-16 text-accent-400/40" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M32 12C21.5 12 18 19.5 18 29C18 38.5 22.5 44 32 44C41.5 44 46 38.5 46 29C46 19.5 42.5 12 32 12Z" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 2" />
            <path d="M12 54C12 47 19 45 32 45C45 45 52 47 52 54" stroke="currentColor" strokeWidth="1.5" />
            <circle cx="26" cy="27" r="2" fill="currentColor" className="text-accent-400" />
            <circle cx="38" cy="27" r="2" fill="currentColor" className="text-accent-400" />
            <path d="M 22 27 L 30 27 M 26 23 L 26 31" stroke="currentColor" strokeWidth="0.75" className="text-accent-400" />
            <path d="M 34 27 L 42 27 M 38 23 L 38 31" stroke="currentColor" strokeWidth="0.75" className="text-accent-400" />
          </svg>

          <div className="absolute inset-1.5 border border-accent-400/50 rounded pointer-events-none">
            <span className="absolute -top-1 -start-1 w-1.5 h-1.5 border-t-2 border-s-2 border-accent-400"></span>
            <span className="absolute -top-1 -end-1 w-1.5 h-1.5 border-t-2 border-e-2 border-accent-400"></span>
            <span className="absolute -bottom-1 -start-1 w-1.5 h-1.5 border-b-2 border-s-2 border-accent-400"></span>
            <span className="absolute -bottom-1 -end-1 w-1.5 h-1.5 border-b-2 border-e-2 border-accent-400"></span>
          </div>
        </div>
      </div>

      {/* Speech Audio Waveform & Real-time Transcript ticker */}
      <div className="relative z-10 space-y-1.5">
        <div className="flex items-end justify-center gap-1 h-4">
          {[40, 65, 30, 85, 95, 50, 75, 45, 90, 60, 35, 80, 55, 70, 40].map((height, idx) => (
            <span
              key={idx}
              className="w-1 rounded-full bg-accent-400/80 transition-all duration-300 group-hover:bg-accent-400"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>

        <div className="rounded bg-ink-950/90 border border-line p-1.5 text-[10px] text-paper flex items-center justify-between">
          <span className="truncate text-accent-300">
            &ldquo;In my previous role leading microservices...&rdquo;
          </span>
          <span className="shrink-0 text-[9px] text-accent-400 font-bold ms-2">
            [STT LIVE]
          </span>
        </div>
      </div>
    </div>
  );
}

/**
 * Theme SVG Visualizer for Format 02: MCQ & Single Select
 */
export function MCQSelectVisual() {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-line bg-ink-900 p-3 sm:p-4 font-mono select-none flex flex-col justify-between group">
      {/* Background blueprint grid pattern */}
      <svg className="absolute inset-0 h-full w-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="blueprint-grid-mcq" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-accent-500/40" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blueprint-grid-mcq)" />
      </svg>

      {/* Top Header */}
      <div className="relative z-10 flex items-center justify-between text-[11px]">
        <span className="text-accent-400 font-bold tracking-wider">MCQ // SINGLE SELECT</span>
        <span className="rounded bg-accent-500/10 border border-accent-500/30 px-1.5 py-0.5 text-[10px] text-accent-300">
          PASS TARGET: 80%
        </span>
      </div>

      {/* Options List Vector */}
      <div className="relative z-10 space-y-1.5 my-2">
        <div className="rounded bg-ink-950/60 border border-line p-1.5 text-[10px] text-paper-muted flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded border border-paper-muted/40 flex items-center justify-center text-[9px] shrink-0">A</span>
          <span className="truncate">Cascading latency timeouts</span>
        </div>
        <div className="rounded bg-accent-500/15 border border-accent-500/50 p-1.5 text-[10px] text-accent-300 flex items-center justify-between shadow-sm">
          <div className="flex items-center gap-2 truncate">
            <span className="w-3.5 h-3.5 rounded bg-accent-400 text-ink-950 font-bold flex items-center justify-center text-[9px] shrink-0">✓</span>
            <span className="truncate font-semibold">Unhandled backpressure &amp; queue overload</span>
          </div>
          <span className="text-[9px] bg-accent-400/20 text-accent-300 px-1 rounded shrink-0 ms-1">MATCH</span>
        </div>
        <div className="rounded bg-ink-950/60 border border-line p-1.5 text-[10px] text-paper-muted flex items-center gap-2">
          <span className="w-3.5 h-3.5 rounded border border-paper-muted/40 flex items-center justify-center text-[9px] shrink-0">C</span>
          <span className="truncate">Inefficient garbage collection cycles</span>
        </div>
      </div>

      {/* Footer Status */}
      <div className="relative z-10 flex items-center justify-between text-[10px] border-t border-line/60 pt-1.5">
        <span className="text-paper-muted">Automated Grading</span>
        <span className="text-accent-400 font-bold">[AUTO-SCORED 10/10]</span>
      </div>
    </div>
  );
}

/**
 * Theme SVG Visualizer for Format 03: Text & Short Answer / Essay
 */
export function TextEssayVisual() {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-line bg-ink-900 p-3 sm:p-4 font-mono select-none flex flex-col justify-between group">
      <svg className="absolute inset-0 h-full w-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="blueprint-grid-text" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-accent-500/40" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blueprint-grid-text)" />
      </svg>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between text-[11px]">
        <span className="text-brand-400 font-bold tracking-wider">ESSAY // OPEN-ENDED</span>
        <span className="text-[10px] text-paper-muted">248 / 300 WDS</span>
      </div>

      {/* Text Editor Window Vector */}
      <div className="relative z-10 my-2 rounded bg-ink-950/80 border border-brand-500/30 p-2 text-[10px] space-y-1">
        <p className="text-paper-muted leading-relaxed line-clamp-2">
          &ldquo;When our database cluster hit peak concurrency, I deployed a write-ahead caching strategy that reduced queue delay by 64%...&rdquo;
        </p>
        <div className="flex items-center gap-1">
          <span className="h-3 w-0.5 bg-accent-400 animate-pulse"></span>
          <span className="text-[9px] text-accent-400/80">SAO Parser Active</span>
        </div>
      </div>

      {/* SAO Decomposition Tag Badges */}
      <div className="relative z-10 flex items-center justify-between text-[9px] border-t border-line/60 pt-1.5">
        <div className="flex items-center gap-1">
          <span className="rounded bg-teal-500/20 text-teal-300 border border-teal-500/40 px-1 py-0.5 font-bold">
            SITUATION ✓
          </span>
          <span className="rounded bg-brand-500/20 text-brand-300 border border-brand-500/40 px-1 py-0.5 font-bold">
            ACTION ✓
          </span>
        </div>
        <span className="text-brand-400 font-bold">[SAO PARSED]</span>
      </div>
    </div>
  );
}

/**
 * Theme SVG Visualizer for Format 04: Rating Scales & Rank Ordering
 */
export function RatingScaleVisual() {
  return (
    <div className="relative aspect-[16/9] w-full overflow-hidden rounded-lg border border-line bg-ink-900 p-3 sm:p-4 font-mono select-none flex flex-col justify-between group">
      <svg className="absolute inset-0 h-full w-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="blueprint-grid-scale" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-accent-500/40" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blueprint-grid-scale)" />
      </svg>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between text-[11px]">
        <span className="text-accent-400 font-bold tracking-wider">LIKERT &amp; RANKING</span>
        <span className="text-[10px] text-accent-300 font-bold">SCORE: 4.8 / 5.0</span>
      </div>

      {/* Likert Scale Meter */}
      <div className="relative z-10 my-1 space-y-1">
        <div className="flex justify-between text-[9px] text-paper-muted">
          <span>Low</span>
          <span className="text-accent-400 font-bold">Target [4]</span>
          <span>High</span>
        </div>
        <div className="flex items-center justify-between gap-1">
          {[1, 2, 3, 4, 5].map((lvl) => (
            <div
              key={lvl}
              className={`h-2 flex-1 rounded-sm ${
                lvl <= 4 ? "bg-accent-400" : "bg-ink-800 border border-line"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Rank Drag Ordering Vector */}
      <div className="relative z-10 space-y-1">
        <div className="rounded bg-ink-950/70 border border-line px-2 py-1 text-[9px] text-paper flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <span className="text-accent-400 font-bold">:::</span>
            <span className="truncate">1. System Architecture</span>
          </span>
          <span className="text-[8px] bg-accent-500/20 text-accent-300 px-1 rounded font-bold">RANK #1</span>
        </div>
        <div className="rounded bg-ink-950/70 border border-line px-2 py-1 text-[9px] text-paper-muted flex items-center justify-between">
          <span className="flex items-center gap-1.5">
            <span className="text-paper-muted">:::</span>
            <span className="truncate">2. Code Quality &amp; Tests</span>
          </span>
          <span className="text-[8px] bg-ink-800 text-paper-muted px-1 rounded">RANK #2</span>
        </div>
      </div>
    </div>
  );
}

/* ============================================================================
   RECRUITER CONTROL SURFACE MODULE VISUALIZERS (16/10 ASPECT RATIO)
   ============================================================================ */

/**
 * Recruiter Control Surface 01: Dual-Mode Assessment Builder
 */
export function AssessmentBuilderVisual() {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-line bg-ink-900 p-3.5 font-mono select-none flex flex-col justify-between group">
      <svg className="absolute inset-0 h-full w-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="blueprint-grid-builder" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand-500/40" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blueprint-grid-builder)" />
      </svg>

      {/* Mode Switcher */}
      <div className="relative z-10 flex items-center justify-between text-[10px]">
        <div className="flex items-center rounded-md bg-ink-950 border border-line p-0.5">
          <span className="px-2 py-0.5 rounded text-paper-muted">Manual</span>
          <span className="px-2 py-0.5 rounded bg-brand-500/30 text-brand-300 font-bold border border-brand-500/40">
            AI Prompt ✨
          </span>
        </div>
        <span className="text-brand-400 font-bold text-[9px]">[AUTO GENERATOR]</span>
      </div>

      {/* Prompt Input Visual */}
      <div className="relative z-10 rounded bg-ink-950/80 border border-brand-500/30 p-2 text-[10px]">
        <span className="text-paper-muted">&gt; Prompt: </span>
        <span className="text-brand-300 font-semibold">&ldquo;Senior Backend Engineer — Node.js &amp; Microservices&rdquo;</span>
      </div>

      {/* Generated Question Pipeline Nodes */}
      <div className="relative z-10 grid grid-cols-3 gap-1.5 my-1">
        <div className="rounded bg-ink-950 border border-line p-1.5 text-[9px]">
          <span className="text-accent-400 font-bold block">Q1 · Video</span>
          <span className="text-paper-muted truncate block">STAR Problem Solving</span>
        </div>
        <div className="rounded bg-ink-950 border border-line p-1.5 text-[9px]">
          <span className="text-brand-400 font-bold block">Q2 · Code MCQ</span>
          <span className="text-paper-muted truncate block">Event Loop Concurrency</span>
        </div>
        <div className="rounded bg-ink-950 border border-line p-1.5 text-[9px]">
          <span className="text-teal-400 font-bold block">Q3 · Essay</span>
          <span className="text-paper-muted truncate block">System Design Tradeoffs</span>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex items-center justify-between text-[9px] border-t border-line/60 pt-1.5 text-paper-muted">
        <span>3 Questions Generated</span>
        <span className="text-brand-400 font-bold">[RUBRIC ATTACHED]</span>
      </div>
    </div>
  );
}

/**
 * Recruiter Control Surface 02: Question Bank Manager
 */
export function QuestionBankVisual() {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-line bg-ink-900 p-3.5 font-mono select-none flex flex-col justify-between group">
      <svg className="absolute inset-0 h-full w-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="blueprint-grid-bank" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand-500/40" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blueprint-grid-bank)" />
      </svg>

      {/* Header & Search */}
      <div className="relative z-10 flex items-center justify-between text-[10px]">
        <div className="flex items-center gap-1 text-paper-muted bg-ink-950 border border-line rounded px-2 py-0.5 w-3/4">
          <span>🔍</span>
          <span className="truncate text-[9px]">Search 1,420 questions...</span>
        </div>
        <span className="text-brand-400 font-bold text-[9px]">#SystemDesign</span>
      </div>

      {/* Stacked Question Items */}
      <div className="relative z-10 space-y-1.5 my-1">
        <div className="rounded bg-ink-950/80 border border-line p-1.5 text-[9px] flex items-center justify-between">
          <span className="truncate text-paper text-[9.5px]">Describe refactoring a high-load monolith...</span>
          <span className="bg-rose-500/20 text-rose-300 border border-rose-500/30 px-1 rounded text-[8px] shrink-0 font-bold ms-1">HARD</span>
        </div>
        <div className="rounded bg-ink-950/80 border border-line p-1.5 text-[9px] flex items-center justify-between">
          <span className="truncate text-paper text-[9.5px]">Single select: Event loop microtask priority...</span>
          <span className="bg-amber-500/20 text-amber-300 border border-amber-500/30 px-1 rounded text-[8px] shrink-0 font-bold ms-1">MEDIUM</span>
        </div>
        <div className="rounded bg-ink-950/80 border border-line p-1.5 text-[9px] flex items-center justify-between">
          <span className="truncate text-paper text-[9.5px]">Rank order cache invalidation strategies...</span>
          <span className="bg-teal-500/20 text-teal-300 border border-teal-500/30 px-1 rounded text-[8px] shrink-0 font-bold ms-1">EASY</span>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex items-center justify-between text-[9px] border-t border-line/60 pt-1.5 text-paper-muted">
        <span>Repository Active</span>
        <span className="text-brand-400 font-bold">[1,420 ITEMS]</span>
      </div>
    </div>
  );
}

/**
 * Recruiter Control Surface 03: Competency Framework Manager (Rubrics)
 */
export function RubricFrameworkVisual() {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-line bg-ink-900 p-3.5 font-mono select-none flex flex-col justify-between group">
      <svg className="absolute inset-0 h-full w-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="blueprint-grid-rubric" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand-500/40" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blueprint-grid-rubric)" />
      </svg>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between text-[10px]">
        <span className="text-brand-400 font-bold tracking-wider">5-LEVEL RUBRIC MATRIX</span>
        <span className="text-paper-muted text-[9px]">WEIGHT: 35%</span>
      </div>

      {/* Rubric Levels Bar */}
      <div className="relative z-10 space-y-1 my-1">
        {[
          { lvl: "L5 Expert", pct: 100, target: true },
          { lvl: "L4 Advanced", pct: 80, target: false },
          { lvl: "L3 Proficient", pct: 60, target: false },
          { lvl: "L2 Developing", pct: 40, target: false },
        ].map((item) => (
          <div key={item.lvl} className="flex items-center gap-2 text-[9px]">
            <span className={`w-20 truncate ${item.target ? "text-brand-300 font-bold" : "text-paper-muted"}`}>
              {item.lvl}
            </span>
            <div className="flex-1 h-2 bg-ink-950 rounded overflow-hidden border border-line">
              <div
                className={`h-full rounded ${item.target ? "bg-brand-400" : "bg-brand-500/40"}`}
                style={{ width: `${item.pct}%` }}
              />
            </div>
            <span className="text-[8px] text-paper-muted w-6 text-end">{item.pct}%</span>
          </div>
        ))}
      </div>

      {/* Footer */}
      <div className="relative z-10 flex items-center justify-between text-[9px] border-t border-line/60 pt-1.5 text-paper-muted">
        <span>Standardized Criteria</span>
        <span className="text-brand-400 font-bold">[BENCHMARK TARGET L5]</span>
      </div>
    </div>
  );
}

/**
 * Recruiter Control Surface 04: 4-Tier Role-Based Access Control (RBAC)
 */
export function RBACVisual() {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-line bg-ink-900 p-3.5 font-mono select-none flex flex-col justify-between group">
      <svg className="absolute inset-0 h-full w-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="blueprint-grid-rbac" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand-500/40" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blueprint-grid-rbac)" />
      </svg>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between text-[10px]">
        <span className="text-brand-400 font-bold tracking-wider">RBAC ACCESS MATRIX</span>
        <span className="text-accent-300 font-bold text-[9px]">[4 GOVERNANCE TIERS]</span>
      </div>

      {/* 4 Roles Grid */}
      <div className="relative z-10 grid grid-cols-2 gap-1.5 my-1 text-[9px]">
        <div className="rounded bg-ink-950 border border-brand-500/30 p-1.5 flex items-center gap-1.5">
          <span className="text-amber-400">👑</span>
          <div>
            <span className="text-paper font-bold block">Owner</span>
            <span className="text-paper-muted text-[8px]">Full Admin &amp; Billing</span>
          </div>
        </div>
        <div className="rounded bg-ink-950 border border-line p-1.5 flex items-center gap-1.5">
          <span className="text-accent-400">🛡️</span>
          <div>
            <span className="text-paper font-bold block">Admin</span>
            <span className="text-paper-muted text-[8px]">Tests &amp; Integrations</span>
          </div>
        </div>
        <div className="rounded bg-ink-950 border border-line p-1.5 flex items-center gap-1.5">
          <span className="text-teal-400">💼</span>
          <div>
            <span className="text-paper font-bold block">Recruiter</span>
            <span className="text-paper-muted text-[8px]">Invites &amp; Review</span>
          </div>
        </div>
        <div className="rounded bg-ink-950 border border-line p-1.5 flex items-center gap-1.5">
          <span className="text-brand-400">👁️</span>
          <div>
            <span className="text-paper font-bold block">Evaluator</span>
            <span className="text-paper-muted text-[8px]">Score &amp; Audit Only</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex items-center justify-between text-[9px] border-t border-line/60 pt-1.5 text-paper-muted">
        <span>Data Governance Locked</span>
        <span className="text-accent-400 font-bold">[SOC-2 COMPLIANT]</span>
      </div>
    </div>
  );
}

/**
 * Recruiter Control Surface 05: ATS & HRIS Integrations
 */
export function IntegrationsVisual() {
  return (
    <div className="relative aspect-[16/10] w-full overflow-hidden rounded-lg border border-line bg-ink-900 p-3.5 font-mono select-none flex flex-col justify-between group">
      <svg className="absolute inset-0 h-full w-full opacity-20 pointer-events-none" xmlns="http://www.w3.org/2000/svg">
        <defs>
          <pattern id="blueprint-grid-int" width="20" height="20" patternUnits="userSpaceOnUse">
            <path d="M 20 0 L 0 0 0 20" fill="none" stroke="currentColor" strokeWidth="0.5" className="text-brand-500/40" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#blueprint-grid-int)" />
      </svg>

      {/* Header */}
      <div className="relative z-10 flex items-center justify-between text-[10px]">
        <span className="text-brand-400 font-bold tracking-wider">ATS // HRIS SYNC HUB</span>
        <span className="text-teal-400 font-bold text-[9px]">LIVE SYNC</span>
      </div>

      {/* Central Integration Topology Vector */}
      <div className="relative z-10 grid grid-cols-2 gap-1.5 my-1">
        <div className="rounded bg-ink-950 border border-teal-500/40 p-1.5 text-[9px] flex items-center justify-between">
          <span className="text-paper font-semibold">Greenhouse</span>
          <span className="text-teal-400 font-bold text-[8px]">✓ SYNC</span>
        </div>
        <div className="rounded bg-ink-950 border border-teal-500/40 p-1.5 text-[9px] flex items-center justify-between">
          <span className="text-paper font-semibold">Lever</span>
          <span className="text-teal-400 font-bold text-[8px]">✓ SYNC</span>
        </div>
        <div className="rounded bg-ink-950 border border-teal-500/40 p-1.5 text-[9px] flex items-center justify-between">
          <span className="text-paper font-semibold">Workday</span>
          <span className="text-teal-400 font-bold text-[8px]">✓ SYNC</span>
        </div>
        <div className="rounded bg-ink-950 border border-teal-500/40 p-1.5 text-[9px] flex items-center justify-between">
          <span className="text-paper font-semibold">BambooHR</span>
          <span className="text-teal-400 font-bold text-[8px]">✓ SYNC</span>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 flex items-center justify-between text-[9px] border-t border-line/60 pt-1.5 text-paper-muted">
        <span>Automated Webhooks</span>
        <span className="text-teal-400 font-bold">[2-WAY SYNC ACTIVE]</span>
      </div>
    </div>
  );
}
