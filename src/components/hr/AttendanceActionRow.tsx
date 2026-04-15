import { SELECTED_DATE, BRANCH_NAME } from "@/lib/mock-data/hr-attendance";

export function AttendanceActionRow() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {/* Date navigator */}
      <div className="flex items-center bg-card rounded-xl p-1 shadow-sm border border-border">
        <button
          disabled
          className="p-1.5 rounded-lg text-text-muted hover:bg-surface-muted transition-colors"
          aria-label="Previous day"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
        </button>
        <span className="px-4 text-sm font-bold font-headline text-text-primary">
          {SELECTED_DATE}
        </span>
        <button
          disabled
          className="p-1.5 rounded-lg text-text-muted hover:bg-surface-muted transition-colors"
          aria-label="Next day"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m9 18 6-6-6-6" />
          </svg>
        </button>
      </div>

      {/* Branch selector */}
      <div className="flex items-center gap-2 px-4 py-2 bg-card rounded-xl shadow-sm border border-border cursor-default">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-primary"
        >
          <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <span className="text-sm font-semibold text-text-primary">{BRANCH_NAME}</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="text-text-muted"
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </div>

      {/* Export button */}
      <button
        disabled
        className="flex items-center gap-2 px-4 py-2 bg-primary text-white rounded-xl font-semibold text-sm shadow-sm opacity-80 cursor-not-allowed"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="7 10 12 15 17 10" />
          <line x1="12" x2="12" y1="15" y2="3" />
        </svg>
        Export
      </button>
    </div>
  );
}
