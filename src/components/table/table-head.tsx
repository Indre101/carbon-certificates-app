import { ReactNode } from "react";

interface ITableHead extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
}

export const TableHead = ({ children, ...props }: ITableHead): JSX.Element => {
  return (
    <thead className="border-b font-medium dark:border-neutral-500" {...props}>
      {children}
    </thead>
  );
};
