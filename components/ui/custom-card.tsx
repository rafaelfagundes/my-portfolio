import { Card } from "./card";

function CustomCard({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <Card
      className={`p-2 dark:bg-[#212121] bg-white rounded-lg shadow-md shadow-gray-200 dark:shadow-gray-900 ${className}}`}
    >
      {children}
    </Card>
  );
}

export default CustomCard;
