import style from './Button.module.css';

const Button = ({label}) => {
    return (
        <div className={style.form_control}>
            <button className={style.button}>{label}</button>
        </div>
    )
}

export default Button