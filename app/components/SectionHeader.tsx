type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  description: string;
};

export function SectionHeader({ eyebrow, title, description }: SectionHeaderProps) {
  return (
    <div className="section-header">
      <span>{eyebrow}</span>
      <h2 className="section-title">{title}</h2>
      <p className="section-subtitle">{description}</p>
    </div>
  );
}
