export type MetricKey = "dashboard_p95_ms" | "event_ingest_rate" | "chart_render_ms";

export type DashboardMetric = { key: MetricKey; label: string; value: number; unit: string; target: number };
export type WorkflowEvent = { id: string; title: string; status: string; severity: "low" | "medium" | "high"; updatedAt: string };
export type TrendPoint = { day: string; value: number };
