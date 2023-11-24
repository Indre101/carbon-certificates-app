import { ReactNode } from "react";

interface ITableColumnHeader
  extends React.ThHTMLAttributes<HTMLTableCellElement> {
  children?: ReactNode;
}

export const TableColumnHeader = ({
  children,
  ...props
}: ITableColumnHeader): JSX.Element => {
  return (
    <th scope="col" className="px-6 py-4 text-left bg-neutral-100" {...props}>
      {children}
    </th>
  );
};
