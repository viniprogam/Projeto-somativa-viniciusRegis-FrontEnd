import styles from './Select.module.css';

export default function Select({name, text, options, required}) {
    return (
        <div className={styles.form_control}>
            <label htmlFor={name}>{text}</label>
            <select name={name} id={name} required={required}>
                <option value=''>Selecione uma categoria</option>
                {
                    options.map(option => {
                        return <option key={option.nome_categoria} value={option.nome_categoria}>
                                    {option.nome_categoria}
                                </option>;
                    })
                }
            </select>
        </div>
    )
}