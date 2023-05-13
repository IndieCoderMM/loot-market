type SummaryProps = {
  title: string;
  value: string;
  className?: string;
  colored?: boolean;
};

function Summary({ title, value, className, colored }: SummaryProps) {
  return (
    <div className={`d-flex justify-content-between p-1 fs-6 ${className}`}>
      <span className="text-muted text-uppercase">{title}</span>
      <span className={`fw-bold ${colored && 'text-primary'}`}>{value}</span>
    </div>
  );
}

export default Summary;
