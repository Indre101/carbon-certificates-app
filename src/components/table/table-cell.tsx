import { ReactNode } from "react";

interface ITableCell extends React.TdHTMLAttributes<HTMLTableCellElement> {
  children: ReactNode;
}

export const TableCell = ({ children, ...props }: ITableCell): JSX.Element => {
  return (
    <td
      className="px-6 py-4 whitespace-no-wrap overflow-ellipsis w-[50px] truncate"
      {...props}>
      {children}
    </td>
  );
};
