import { ReactNode } from "react";

interface ITableRowHeader extends React.ThHTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
}

export const TableRowHeader = ({
  children,
  ...props
}: ITableRowHeader): JSX.Element => {
  return (
    <th
      scope="row"
      className="px-6 text-left truncate max-w-[200px]"
      {...props}>
      {children}
    </th>
  );
};
