import { ReactNode } from "react";

interface ITableBody extends React.HTMLAttributes<HTMLTableSectionElement> {
  children: ReactNode;
}

export const TableBody = ({ children, ...props }: ITableBody): JSX.Element => {
  return <tbody {...props}>{children}</tbody>;
};
