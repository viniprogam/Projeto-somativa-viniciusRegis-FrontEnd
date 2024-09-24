import React from "react";
import styles from './Home.module.css'
const Home = () => {
    return (
        <section className={styles.home_container}>
            <h1>Bem vindo(a) ao Chef Inova</h1>
            <p>Uma plataforma desenvolvida para armazenar  suas receitas culinárias</p>
        </section>
    )
}

export default Home