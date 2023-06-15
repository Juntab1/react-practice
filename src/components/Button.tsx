
interface Props{
    onClick: () => void;
    children: string
}

const Button = ({children, onClick}: Props) => {
  return (
    <button type="button" className="btn btn-outline-warning" onClick={onClick}>{children}</button>
  )
}

export default Button