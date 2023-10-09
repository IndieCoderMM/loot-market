type SummaryProps = {
  title: string;
  value: string;
  className?: string;
  colored?: boolean;
};

function Summary({ title, value, className, colored }: SummaryProps) {
  return (
    <div className={`d-flex justify-content-between p-1 fs-5 ${className}`}>
      <span className="text-muted text-uppercase fs-6">{title}</span>
      <span className={`fw-semibold ${colored ? 'text-success' : 'text-dark'}`}>
        {value}
      </span>
    </div>
  );
}

export default Summary;
