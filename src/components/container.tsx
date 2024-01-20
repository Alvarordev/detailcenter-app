import { cn } from "@/lib/utils";

interface Props {
  children: JSX.Element;
  classname?: string;
}

const Container = ({ children, classname }: Props) => {
  return (
    <div
      className={cn(
        "flex flex-col flex-grow w-full bg-card p-8 rounded-md drop-shadow-lg",
        classname
      )}
    >
      {children}
    </div>
  );
};

export default Container;
