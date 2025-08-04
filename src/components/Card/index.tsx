type CardProps = {
  title: string;
  body: string;
};

export const Card = ({ title, body }: CardProps) => {
  return (
    <div className="flex flex-col gap-2 items-center bg-white text-black p-4 rounded shadow">
      <p>{title}</p>
      <p>{body}</p>
    </div>
  );
};
