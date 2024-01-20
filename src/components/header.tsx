interface Props {
  children?: JSX.Element;
  title: string;
}

const Header = ({ children, title }: Props) => {
  return (
    <header className="flex justify-between w-full min-h-20 bg-card rounded-md items-center px-6 drop-shadow-lg mb-8">
      <h1 className="text-2xl font-bold text-card-foreground">{title}</h1>
      {children}
    </header>
  );
};

export default Header;
