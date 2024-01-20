interface Props {
    children: JSX.Element;
  }

const Container = ({children}: Props) => {
  return (
    <div className="flex flex-col flex-grow w-full min-h-full bg-card p-8 rounded-md drop-shadow-lg">
        {children}
    </div>
  )
}

export default Container