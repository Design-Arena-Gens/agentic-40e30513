type TimelineItemProps = {
  title: string;
  description: string;
  status: string;
  tags: string[];
};

export function TimelineItem({ title, description, status, tags }: TimelineItemProps) {
  return (
    <article className="timeline-item">
      <div className="status-chip">{status}</div>
      <h3>{title}</h3>
      <p>{description}</p>
      <div className="tag-group">
        {tags.map((tag) => (
          <span key={tag} className="tag">
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
