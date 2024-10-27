import { Link } from 'react-router-dom';

import style from './Button.module.css';

const Button = ({label, router, cod_receita}) => {
    return (
        <div className={style.buttonContainerDetail}>
            <Link to={`${router}${cod_receita}`}>
                <button className={style.buttonDetail}>{label}</button>
            </Link>
        </div>
    )
}

export default Button