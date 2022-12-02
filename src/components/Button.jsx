const Button = ({children, btnClassName, onClick, style}) => {
    return <button onClick={onClick} style={style} className={`btn ${btnClassName}`}>{children}</button>
}

export default Button;