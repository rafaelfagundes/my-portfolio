function Headline({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span className={`text-6xl font-bold text-gray-800 ${className}`}>
      {children}
    </span>
  );
}

function Title({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <h1
      className={`text-2xl font-semibold text-gray-600 dark:text-gray-300 ${className}`}
    >
      {children}
    </h1>
  );
}

export { Headline, Title };
