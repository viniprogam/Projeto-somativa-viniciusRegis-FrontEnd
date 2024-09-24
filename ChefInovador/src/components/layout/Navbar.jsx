import { Outlet, Link } from 'react-router-dom';
import styles from './Navbar.module.css';
const NavBar = () => {
    return (
        <>
            <nav className={styles.navbar}>
                <ul className={styles.list}>
                    <li className={styles.item}><img src="./logo.png" className={styles.logo}/></li>
                    <Link to='/'>
                        <li className={styles.item}>HOME</li>
                    </Link>
                    <Link to='/CreateRecipe'>
                        <li className={styles.item}>CRIAR RECEITA</li>
                    </Link>
                    <Link to='/ListRecipe'>
                        <li className={styles.item}>RECEITAS</li>
                    </Link>
                </ul>
            </nav>
            <Outlet/>
        </>
    )
}

export default NavBar