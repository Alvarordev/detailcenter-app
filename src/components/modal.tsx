"use client";

interface Props {
  title: string;
  children: JSX.Element;
  show: boolean;
  handleClose: () => void;
  className: string;
}

export function Modal({
  title,
  children,
  show,
  handleClose,
  className,
}: Props) {
  return (
    <div
      className={`
      fixed inset-0 m-auto 
      flex items-end justify-center 
      z-10
      ${!show && "hidden"}
      ${className}
      md:items-center 
      `}
    >
      <section className="max-w-lg w-full flex-1 absolute z-50 md:rounded-[1rem]">
        <div className="p-4">{children}</div>
      </section>
      <span
        className="backdrop-blur-sm w-full h-full bg-foreground/50 cursor-pointer"
        onClick={handleClose}
      ></span>
    </div>
  );
}
