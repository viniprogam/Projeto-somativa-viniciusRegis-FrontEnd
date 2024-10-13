import styles from './TextArea.module.css';

export default function TextArea({text, name, placeHolder, handleChange, required}) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <textarea className={styles.texteArea}
                name={name}
                placeholder={placeHolder}
                onChange={handleChange}
                required={required}
            />
        </div>
    )
}