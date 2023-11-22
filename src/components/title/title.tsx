interface ITitle {
  children: string;
}

export const Title = ({ children }: ITitle) => {
  return <h1 className="text-2xl font-semibold">{children}</h1>;
};
