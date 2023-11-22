import { ReactNode } from "react";

interface ITableRow extends React.HTMLAttributes<HTMLTableRowElement> {
  children: ReactNode;
}

export function TableRow({ children, ...props }: ITableRow) {
  return (
    <tr className="border-b dark:border-neutral-300" {...props}>
      {children}
    </tr>
  );
}
