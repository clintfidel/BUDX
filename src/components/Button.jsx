const Button = ({children, btnClassName}) => {
    return <button className={`btn ${btnClassName}`}>{children}</button>
}

export default Button;