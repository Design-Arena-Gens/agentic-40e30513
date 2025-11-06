type TestimonialCardProps = {
  quote: string;
  author: string;
  role: string;
};

export function TestimonialCard({ quote, author, role }: TestimonialCardProps) {
  return (
    <article className="card">
      <p>{quote}</p>
      <div>
        <strong>{author}</strong>
        <p>{role}</p>
      </div>
    </article>
  );
}
