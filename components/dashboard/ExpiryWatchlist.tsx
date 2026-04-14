import { expiryWatchlist } from "@/lib/mock-data/dashboard";

const actionStyles: Record<string, string> = {
  Discount: "bg-destructive/10 text-destructive",
  Return: "bg-primary/10 text-primary",
  Dispose: "bg-warning/10 text-warning",
};

export function ExpiryWatchlist() {
  return (
    <div className="bg-card border border-border rounded-xl p-6 h-full">
      <h2 className="font-headline font-bold text-sm text-text-primary mb-4">
        Expiry Watchlist
      </h2>

      <ul className="space-y-2">
        {expiryWatchlist.map((item, i) => (
          <li
            key={i}
            className={[
              "p-3 rounded-lg flex justify-between items-center",
              item.urgent ? "bg-destructive/10" : "bg-surface-muted",
            ].join(" ")}
          >
            <div className="min-w-0 mr-2">
              <p className="text-xs font-bold text-text-primary leading-snug">
                {item.name}
              </p>
              <p className="text-[10px] text-text-muted mt-0.5">
                Exp: {item.expiry}
              </p>
            </div>
            <span
              className={[
                "flex-shrink-0 text-[10px] font-semibold px-2 py-0.5 rounded-full",
                actionStyles[item.action],
              ].join(" ")}
            >
              {item.action}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}
