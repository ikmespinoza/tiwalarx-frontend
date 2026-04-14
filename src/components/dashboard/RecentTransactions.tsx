import { recentTransactions } from "@/lib/mock-data/dashboard";

const statusStyles: Record<string, string> = {
  Paid: "bg-green-100 text-green-700",
  Pending: "bg-blue-100 text-blue-700",
  Voided: "bg-red-100 text-red-700",
};

export function RecentTransactions() {
  return (
    <div className="bg-card border border-border rounded-xl p-6 h-full">
      <div className="flex items-center justify-between mb-4">
        <h2 className="font-headline font-bold text-sm text-text-primary">
          Recent Transactions
        </h2>
        <button className="text-xs font-medium text-primary hover:underline">
          View All
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-xs">
          <thead>
            <tr className="bg-surface-muted">
              <th className="text-left px-3 py-2 text-[10px] uppercase tracking-widest text-text-secondary font-semibold rounded-l-lg">
                Time
              </th>
              <th className="text-left px-3 py-2 text-[10px] uppercase tracking-widest text-text-secondary font-semibold">
                Receipt
              </th>
              <th className="text-right px-3 py-2 text-[10px] uppercase tracking-widest text-text-secondary font-semibold">
                Total
              </th>
              <th className="text-left px-3 py-2 text-[10px] uppercase tracking-widest text-text-secondary font-semibold rounded-r-lg">
                Status
              </th>
            </tr>
          </thead>
          <tbody>
            {recentTransactions.map((tx) => (
              <tr
                key={tx.receipt}
                className="hover:bg-surface-muted border-b border-border/50 last:border-0"
              >
                <td className="px-3 py-2.5 text-text-secondary">{tx.time}</td>
                <td className="px-3 py-2.5 font-medium text-text-primary">
                  {tx.receipt}
                </td>
                <td className="px-3 py-2.5 text-right font-semibold text-text-primary">
                  {tx.total}
                </td>
                <td className="px-3 py-2.5">
                  <span
                    className={[
                      "inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold",
                      statusStyles[tx.status],
                    ].join(" ")}
                  >
                    {tx.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
