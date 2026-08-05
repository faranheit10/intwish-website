import { Mail, MessageSquare, Video, Gamepad2, Bell, FileText } from "lucide-react";
import { cn } from "@/lib/cn";

interface IntOSDesktopMockProps {
  className?: string;
}

const emails = [
  { from: "Compliance Dept", subject: "Suspicious transaction — review required", time: "09:42" },
  { from: "CFO Office", subject: "Budget variance Q3 approved", time: "09:15" },
  { from: "HR", subject: "Onboarding checklist — step 4 of 7", time: "08:58" },
];

const tasks = [
  { title: "Prioritize emails", done: true },
  { title: "Reply to escalation", done: false },
];

/**
 * CSS-composed intOS virtual desktop placeholder.
 * PLACEHOLDER per the Phase 1 brief — a high-res intOS desktop capture is
 * pending; this mock keeps real product UI visible above the fold until then.
 * The dashed chip keeps the gap explicit per the QA protocol (§9).
 */
export function IntOSDesktopMock({ className }: IntOSDesktopMockProps) {
  return (
    <div
      className={cn(
        "relative select-none overflow-hidden rounded-xl border border-line-strong bg-gradient-to-b from-ink-800 to-ink-900",
        className
      )}
      aria-hidden="true"
    >
      {/* Desktop wallpaper with subtle grid */}
      <div className="bg-grid absolute inset-0 opacity-60" />

      {/* Top bar */}
      <div className="relative flex items-center justify-between border-b border-line bg-ink-950/60 px-3 py-1.5">
        <span className="font-mono text-[10px] text-faint">intOS — Session 0x7F3A</span>
        <span className="font-mono text-[10px] text-faint">Wed 10:24</span>
      </div>

      {/* Windows */}
      <div className="relative grid grid-cols-5 gap-2 p-2.5">
        {/* Email simulation window */}
        <div className="col-span-3 rounded-lg border border-line bg-ink-850/95 shadow-card">
          <div className="flex items-center justify-between border-b border-line px-2.5 py-1.5">
            <span className="flex items-center gap-1.5 font-mono text-[10px] text-muted">
              <Mail className="h-3 w-3 text-brand-400" />
              Inbox — 12 unread
            </span>
            <span className="rounded bg-brand-500/20 px-1.5 py-0.5 font-mono text-[9px] text-brand-400">
              Simulation
            </span>
          </div>
          <ul className="divide-y divide-line">
            {emails.map((email) => (
              <li key={email.from} className="flex items-center justify-between px-2.5 py-2">
                <div className="min-w-0">
                  <p className="truncate text-[10px] font-medium text-paper">{email.from}</p>
                  <p className="truncate text-[9px] text-muted">{email.subject}</p>
                </div>
                <span className="shrink-0 font-mono text-[9px] text-faint">{email.time}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Right column: chat + notifications */}
        <div className="col-span-2 flex flex-col gap-2">
          <div className="rounded-lg border border-line bg-ink-850/95 p-2">
            <p className="flex items-center gap-1.5 font-mono text-[10px] text-muted">
              <MessageSquare className="h-3 w-3 text-accent-400" />
              Team Messenger
            </p>
            <div className="mt-1.5 space-y-1">
              <p className="rounded-md rounded-ss-none bg-ink-700/70 px-2 py-1 text-[9px] text-paper">
                How do I handle this escalation?
              </p>
              <p className="rounded-md rounded-se-none bg-brand-500/25 px-2 py-1 text-[9px] text-paper">
                Escalate to the compliance lead.
              </p>
            </div>
          </div>
          <div className="rounded-lg border border-line bg-ink-850/95 p-2">
            <p className="flex items-center gap-1.5 font-mono text-[10px] text-muted">
              <Bell className="h-3 w-3 text-brand-400" />
              Notifications
            </p>
            <p className="mt-1 text-[9px] text-paper">Meeting request — Team sync 14:00</p>
          </div>
        </div>
      </div>

      {/* Taskbar */}
      <div className="relative flex items-center gap-2 border-t border-line bg-ink-950/70 px-3 py-2">
        {[Mail, MessageSquare, Video, Gamepad2].map((Icon, i) => (
          <span
            key={i}
            className={cn(
              "inline-flex h-6 w-6 items-center justify-center rounded-md border border-line bg-white/5",
              i === 0 && "border-brand-500/50 bg-brand-500/15"
            )}
          >
            <Icon className="h-3 w-3 text-paper" />
          </span>
        ))}
        <span className="ms-auto inline-flex items-center gap-1 font-mono text-[9px] text-faint">
          <FileText className="h-3 w-3" /> intOS v4.2
        </span>
      </div>

      {/* Task tracker chip */}
      <div className="absolute start-2 top-2 rounded border border-dashed border-accent-500/60 bg-ink-950/80 px-2 py-1">
        <p className="font-mono text-[9px] text-accent-300">tasks: {tasks.filter((t) => t.done).length}/{tasks.length} ✓</p>
      </div>
    </div>
  );
}
