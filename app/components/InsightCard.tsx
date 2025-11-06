type InsightCardProps = {
  title: string;
  description: string;
  owner: string;
  timeline: string;
};

export function InsightCard({ title, description, owner, timeline }: InsightCardProps) {
  return (
    <article className="insight">
      <h4>{title}</h4>
      <p>{description}</p>
      <div className="insight-footer">
        <span>{owner}</span>
        <span>{timeline}</span>
      </div>
    </article>
  );
}
