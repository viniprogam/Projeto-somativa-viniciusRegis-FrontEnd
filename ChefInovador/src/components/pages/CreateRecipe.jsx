import React, { useState, useEffect } from 'react';

import styles from './CreateRecipe.module.css';

import Input from '../forms/Input';
import Select from '../forms/Select';
import Button from '../forms/Button';
import TextArea from '../forms/TextArea';

const CreateRecipe = () => {

    /* DEFINE O STATE DE DADOS DAS CATEGORIAS */
    const [categorias, setCategorias] = useState([]);

    /*VARIÁVEIS ONDE TRABALHO A LISTA DE INGREDIENTES */
    const [ingredients, setIngredients] = useState([]);
    const [currentIngredient, setCurrentIngredient] = useState(['']);

    /*DEFINE O STATE INICIAL DE RECIPE */
    const initialRecipeState = {
        nome_receita: '',
        ingredientes: [],
        modo_de_preparo: '',
    };

    /* STATE DE DADOS QUE VAI ARMAZENAR O OBJETO JSON DA RECEITA */
    const [recipe, setRecipe] = useState({initialRecipeState});


    /*FUNÇÃO PARA ATUALIZAR O INGREDIENTE ATUAL */
    function handleIngredientChange(value) {
        setCurrentIngredient(value); // Atualiza o ingrediente atual
    }

    /*FUNÇÃO PARA ADICIONAR O INGREDIENTE AO ARRAY DE INGREDIENTES */
    function addIngredient(event) {
        event.preventDefault();
        if (currentIngredient.trim()) { /* ADICIONA INGREDIENTE APENAS SE NÃO ESTIVER VAZIO*/
            const newIngredients = [...ingredients, currentIngredient.trim()]; /* ADICIONA AO ARRAY DE INGREDIENTES*/
            setIngredients(newIngredients); /*ATUALIZA O ESTADO DE INGREDIENTES */
            setCurrentIngredient(''); /* LIMPA O CAMPO DE ENTRADA */
            setRecipe(prevRecipe => ({
                ...prevRecipe,
                ingredientes: newIngredients.join(', ') /* ATUALIZA O ESTADO DA RECEITA COM A STRING DE INGREDIENTES*/
            }));
        }
    }


    /* HANDLER DE CAPTURA DE DADOS QUE VAI ARMAZENAR DADOS DE INPUT(NOME DA RECEITA, INGREDIENTES, MODO DE PREPARO E CATEGORIA) */
    function handleChangeRecipe(event) {
        const { name, value } = event.target;
        setRecipe(prevRecipe => {
            const updatedRecipe = { ...prevRecipe, [name]: value };
            // console.log(updatedRecipe); /*EXIBE AS ATUALIZAÇÕES ATRAVES DE CONSOLE.LOG */
            return updatedRecipe;
        });
    };

    /* RECUPERA OS DADOS DE CATEGORIA DA API */
    useEffect(() => {
        fetch('http://localhost:5000/listagemCategorias', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*',
            }
        }).then(
            (resp) => resp.json()
        )
        .then(
            (data) => {
                setCategorias(data.data);
            }
        ).catch((error) => {
            setMessage('Erro ao carregar categorias.')
            console.log(error);
        });
    }, []);

    /* INSERÇÃO DOS DADOS DA RECEITA */
    function createRecipe(recipe) {

        console.log(JSON.stringify(recipe));

        fetch('http://localhost:5000/inserirReceita', {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            },
            body: JSON.stringify(recipe)
        })
        .then(
            (resp) => resp.json()
        )
        .then(
            (data) => {
                setRecipe(initialRecipeState);
                setIngredients(['']);
                alert('Receita cadastrada com sucesso!');
            }
        )
        .catch(
            (err) => {console.log(err);}
        );
    };

    /* FUNÇÃO DE SUBMIT */
    function submit(event) {
        event.preventDefault();
        createRecipe(recipe);
    };

    return (
        <>
            <section className={styles.createRecipeContainer}>
                <form onSubmit={submit}>
                    
                    <div className={styles.inputGroup}>
                        <Input
                            type="text"
                            name="nome_receita"
                            placeHolder='Digite o nome de sua receita'
                            text='Título da receita'
                            handleChange={handleChangeRecipe}
                            required
                        />
                    </div>

                    <div className={styles.inputGroup}>
                        <div className={styles.ingredientInput}>
                            <Input
                                type="text"
                                name="currentIngredient"
                                placeHolder="Digite um ingrediente"
                                text='Ingredientes'
                                value={currentIngredient} /**VALOR DO INPUT É CONTROLADO PELO ESTADO */
                                handleChange={(e) => handleIngredientChange(e.target.value)} /*PASSA O VALOR PARA O ESTADO */
                            />
                            <button onClick={addIngredient}>ADICIONAR</button>
                        </div>
                    </div>

                    <div className={styles.inputGroup}>
                        <TextArea
                            name="modo_de_preparo"
                            placeHolder="Descreva o modo de preparo"
                            text="Modo de Preparo"
                            handleChange={handleChangeRecipe}
                            required
                        />
                    </div>

                    <div className={styles.selectCategory}>
                        <Select
                            name='categoria'
                            text='Escolha a categoria de sua receita'
                            options={categorias}
                            required
                        />
                    </div>

                    <Button
                        label='Cadastrar'
                    />
                </form>
            </section>

            <section className={styles.previewContainer}>
                <h1>RECEITA</h1>
                <p><strong>Título:</strong> {recipe.nome_receita}</p>
                <p><strong>Ingredientes:</strong> {recipe.ingredientes}</p>
                <p><strong>Modo de Preparo:</strong> {recipe.modo_de_preparo}</p>
            </section>
        </>
    
    );
};

export default CreateRecipe;
