type ButtonProps = {} & React.PropsWithChildren &
  React.ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = ({ children, className, ...props }: ButtonProps) => {
  return (
    <button
      className={`cursor-pointer p-2 text-sm px-4 rounded ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
