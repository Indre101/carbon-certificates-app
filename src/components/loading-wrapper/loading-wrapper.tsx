import { ReactNode } from "react";
import { Spinner } from "..";

interface ILoadingWrapper {
  children: ReactNode;
  isLoading: boolean;
}

export const LoadingWrapper = ({ children, isLoading }: ILoadingWrapper) =>
  isLoading ? (
    <div className="flex h-full items-center justify-center">
      <Spinner />
    </div>
  ) : (
    children
  );
