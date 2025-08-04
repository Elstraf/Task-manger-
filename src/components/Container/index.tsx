type ContainerProps = {} & React.PropsWithChildren;

export const Container = ({ children }: ContainerProps) => {
  return <div className="max-w-4xl mx-auto mt-5 p-2">{children}</div>;
};
