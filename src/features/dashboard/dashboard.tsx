import { Activity, CheckCircle2, ShieldAlert } from "lucide-react";
import { useEffect, useRef } from "react";
import { renderTrend } from "../chart/d3-trend";
import { useDashboard } from "./hooks";

const fallback = {
  metrics: [
    { key: "price_alerts", label: "price alerts", value: 17, unit: "items", target: 20 },
    { key: "stockout_risk", label: "stockout risk", value: 8, unit: "skus", target: 10 },
    { key: "margin_watch", label: "margin watch", value: 12, unit: "%", target: 15 }
  ],
  events: [
    { id: "prd-884", title: "Coupon price drift", status: "watching", severity: "high", updatedAt: "2026-07-08" },
    { id: "prd-552", title: "Inventory reorder point", status: "queued", severity: "medium", updatedAt: "2026-07-08" },
    { id: "prd-491", title: "Competitor price rebound", status: "reviewed", severity: "low", updatedAt: "2026-07-07" }
  ],
  trend: [{ day: "Mon", value: 42 }, { day: "Tue", value: 47 }, { day: "Wed", value: 35 }, { day: "Thu", value: 58 }, { day: "Fri", value: 63 }],
} as const;

export const Dashboard = () => {
  const query = useDashboard();
  const data = query.data ?? fallback;
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) renderTrend(svgRef.current, [...data.trend]);
  }, [data.trend]);

  return (
    <main className="shell">
      <section className="header">
        <div>
          <p>Frontend / Product Engineer project</p>
          <h1>MarketPulse</h1>
          <span>Operators need price, inventory, and product signals in one dashboard before conversion drops.</span>
        </div>
        <CheckCircle2 aria-hidden />
      </section>
      <section className="metrics">
        {data.metrics.map((metric) => (
          <article key={metric.key}>
            <Activity aria-hidden />
            <strong>{metric.value}{metric.unit}</strong>
            <span>{metric.label}</span>
          </article>
        ))}
      </section>
      <section className="workbench">
        <div>
          <h2>Live workflow</h2>
          {data.events.map((event) => (
            <button key={event.id} className={event.severity}>
              <ShieldAlert aria-hidden />
              <span>{event.title}</span>
              <small>{event.status} · {event.updatedAt}</small>
            </button>
          ))}
        </div>
        <svg ref={svgRef} role="img" aria-label="D3 trend chart" />
      </section>
    </main>
  );
};
