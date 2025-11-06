type MetricCardProps = {
  label: string;
  value: string;
  trend: string;
  highlight: string;
};

export function MetricCard({ label, value, trend, highlight }: MetricCardProps) {
  return (
    <article className="metric-card">
      <span>{label}</span>
      <strong>{value}</strong>
      <div className="metric-trend">{trend}</div>
      <small className="highlight">{highlight}</small>
    </article>
  );
}
