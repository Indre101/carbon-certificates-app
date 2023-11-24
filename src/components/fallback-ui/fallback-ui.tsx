import { ReactNode } from "react";

interface IFallbackUI {
  children: ReactNode;
}

export const FallbackUI = ({ children }: IFallbackUI) => {
  return (
    <div className="flex px-4 bg-white">
      <h1 className="tracking-widest text-gray-500 uppercase">{children}</h1>
    </div>
  );
};
