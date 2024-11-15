import {React, useState, useEffect} from 'react'
import { useParams } from 'react-router-dom'

import style from './DetailRecipe.module.css'
import Button from '../Button'

import imgsComidas from '../../../public/backgroundHome.jpg'

const DetailRecipe = () => {

    /* RECUPERANDO O ID DA URL */
    const {cod_receita} = useParams();
    console.log('ID:' + cod_receita);

    /* CRIA O STATE DE DADOS QUE VAI ARMAZENAR O DEALHE DO LIVRO ESCOLHIDO */
    const[recipe, setRecipe] = useState({});

    /* RECUPERANDO OS DADOS DE LIVRO PARA A EDIÇAO */
    useEffect(()=>{

        fetch(`http://localhost:5000/listagemReceita/${cod_receita}`, {
            method: 'GET',
            mode:'cors',
            headers: {
            'Content-Type':'application/json',
            'Access-Control-Allow-Origin':'*',
            'Access-Control-Allow-Headers':'*',
        },
        })
            .then((resp)=>resp.json())
            .then((data)=>{
            setRecipe(data.data);
            console.log("Receita:", data.data);
        })
        .catch((err)=>{console.log(err)});

        },[cod_receita]);

    return (
        <div className={style.recipeContainer}>
            <div className={style.imageWrapper}>
                <img className={style.recipeImage} src={imgsComidas} alt="Recipe Image" />
            </div>
            <div className={style.recipeInfo}>
                <h1 className={style.recipeName}>{recipe.nome_receita}</h1>
                <div className={style.ingredientsSection}>
                    <h2>Ingredientes</h2>
                    <p>{recipe.ingredientes}</p>
                </div>
                <div className={style.preparationSection}>
                    <h2>Modo de Preparo</h2>
                    <p>{recipe.modo_de_preparo}</p>
                </div>
            </div>
            
            <div className={style.buttonArea}>
                <div className={style.buttonDelete}>
                    <Button
                        label='Editar'
                        router='/UpdateRecipe/'
                        cod_receita={cod_receita}
                    />
                </div>
                <div className={style.buttonDelete}>
                    <Button
                        label='Deletar'
                        router='/DeleteRecipe/'
                        cod_receita={cod_receita}
                    />
                </div>
            </div>
        </div>
    )

}

export default DetailRecipe
