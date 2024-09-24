import styles from './Select.module.css';

export default function Select({name, text}) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name}>
                <option>Selecione uma categoria</option>
                <option>Ficção científica</option>
                <option>Fantasia heroica</option>
                <option>Suspense</option>
                <option>Terror</option>
            </select>
        </div>
    )
}