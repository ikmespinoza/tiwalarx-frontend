import { salesByCategory } from "@/lib/mock-data/dashboard";

const RADIUS = 60;
const STROKE = 28;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;
const VIEWBOX = 160;
const CENTER = VIEWBOX / 2;

export function SalesByCategoryChart() {
  let cumulativePct = 0;

  return (
    <div className="bg-card border border-border rounded-xl p-6 h-full">
      <h2 className="font-headline font-bold text-sm text-text-primary mb-4">
        Sales by Category
      </h2>

      <div className="flex flex-col items-center">
        {/* SVG donut */}
        <div className="relative">
          <svg
            width={VIEWBOX}
            height={VIEWBOX}
            viewBox={`0 0 ${VIEWBOX} ${VIEWBOX}`}
          >
            {salesByCategory.map((seg, i) => {
              const dashArray = CIRCUMFERENCE;
              const dashOffset =
                CIRCUMFERENCE - (seg.percent / 100) * CIRCUMFERENCE;
              const rotation = -90 + (cumulativePct / 100) * 360;
              cumulativePct += seg.percent;

              return (
                <circle
                  key={i}
                  cx={CENTER}
                  cy={CENTER}
                  r={RADIUS}
                  fill="none"
                  stroke={seg.color}
                  strokeWidth={STROKE}
                  strokeDasharray={`${dashArray} ${CIRCUMFERENCE}`}
                  strokeDashoffset={dashOffset}
                  transform={`rotate(${rotation} ${CENTER} ${CENTER})`}
                  strokeLinecap="butt"
                />
              );
            })}
          </svg>

          {/* Center overlay */}
          <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
            <span className="font-headline font-bold text-lg text-text-primary leading-none">
              ₱42.1k
            </span>
            <span className="text-[11px] text-text-secondary mt-0.5">
              Medicines
            </span>
          </div>
        </div>

        {/* Legend */}
        <ul className="mt-4 w-full space-y-2">
          {salesByCategory.map((seg) => (
            <li
              key={seg.label}
              className="flex items-center justify-between text-xs"
            >
              <span className="flex items-center gap-2 text-text-secondary">
                <span
                  className="w-2.5 h-2.5 rounded-full flex-shrink-0"
                  style={{ backgroundColor: seg.color }}
                />
                {seg.label}
              </span>
              <span className="font-semibold text-text-primary">
                {seg.percent}%
              </span>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
