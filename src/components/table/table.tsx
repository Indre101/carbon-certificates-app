import { ReactNode } from "react";

interface ITable extends React.TableHTMLAttributes<HTMLTableElement> {
  children: ReactNode;
}

export const Table = ({ children, ...props }: ITable): JSX.Element => {
  return <table {...props}>{children}</table>;
};
