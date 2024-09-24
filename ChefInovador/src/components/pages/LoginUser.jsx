import React from 'react';
import Input from '../Input';
import Button from '../Button';
import styles from './LoginUser.module.css'

const LoginUser = () => {
    return (
        <section>
            <h1>Login</h1>
            <form>
                <h3>Nome do usuário:</h3>
                <Input
                    type='text'
                    name='name_user'
                    placeHolder='Crie seu nome de usuário'
                />
            <h3>Senha:</h3>
                <Input
                    type='password'
                    name='password_user'
                    placeHolder='Crie sua senha'
                />
            <Button
                label='Cadastrar'
            />
        </form>
        </section>
    )
}

export default LoginUser