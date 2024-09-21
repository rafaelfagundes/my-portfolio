import React from "react";

function PageContainer({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return <div className={` ${className}`}>{children}</div>;
}

export default PageContainer;
