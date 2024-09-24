import styles from './Input.Module.css';

export default function Input({type, text, name, placeHolder}) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <input
                type={type}
                name={name}
                id={name}
                placeHolder={placeHolder}
            />
        </div>
    )
}