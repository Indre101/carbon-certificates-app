import { ReactNode } from "react";
import { Spinner } from "..";

interface ILoadingWrapper {
  children: ReactNode;
  isLoading: boolean;
}

export const LoadingWrapper = ({ children, isLoading }: ILoadingWrapper) =>
  isLoading ? (
    <div className="flex h-[calc(100vh-100px)] items-center justify-center relative">
      <Spinner />
    </div>
  ) : (
    children
  );
