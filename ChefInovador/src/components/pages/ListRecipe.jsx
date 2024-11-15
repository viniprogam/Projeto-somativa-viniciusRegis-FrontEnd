import React from "react";

/* IMPORTAÇÃO DA STATE */
import { useState, useEffect } from 'react'

import CardRecipes from '../CardRecipes'
import Container from '../layout/Container'
import Select from '../forms/Select';
import ContainerRecipe from '../layout/ContainerRecipe'
import style from './ListRecipe.module.css'


import imgsComidas from '../../../public/logo.png'

const ListRecipe = () => {
  /*DEFINE AS RECITAS LISTADAS */
    const [recipes, setRecipes] = useState([]);

    /* DEFINE O STATE DE DADOS DAS CATEGORIAS */
    const [categorias, setCategorias] = useState([]);

    /*DEFINE O ID DA CATEGORIA SELECIONADA */
    const [codCategoria, setCodCategoria] = useState();
  
    useEffect(() => {
      fetch("http://localhost:5000/listagemReceitas", {
        method: "GET",
        mode: "cors",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
        },
      })
        .then((resp) => resp.json())
        .then((data) => {
          console.log("RECEITAS: " + data.data);
          setRecipes(data.data);
          console.log("STATE: " + recipes);
        })
        .catch((err) => {
          console.log(err);
        });
    }, []);

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

    /*FUNÇÃO PARA BUSACAR AS RECEITAS ATRAVÉS DE SUA CATEGORIA */
    const searchRecipesCategorie = (cod_categoria) =>{
      fetch(`http://localhost:5000/listagemReceitasCategoria`, {
        method: "POST",
        mode: 'cors',
        headers: {
          "Content-Type": "application/json",
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Headers': '*',
        },
        body: JSON.stringify({ cod_categoria: cod_categoria }),
      })
        .then((response) => response.json())
        .then((data) => {
          setRecipes(data.data);
        })
        .catch((error) => {
          console.log("Erro ao buscar receitas por categoria:", error);
        });
    }

    /*FUNÇÃO PARA PEGAR O CÓDIGO DA CATEGORIA SELECIONADA*/
    function handlerChangeCategory(event) {
      const categoriaSelecionada = event.target.value;
      setCodCategoria(categoriaSelecionada);
      searchRecipesCategorie(categoriaSelecionada);
  }
    
  
    return (
      <Container>
        <section className={style.list_recipe_container}>
          <div className={style.Select}>
            <Select
              name='categoria'
              text='Busque sua receita pela categoria'
              options={categorias}
              required
              handlerChangeCategory={handlerChangeCategory}
              
            />
          </div>
          <ContainerRecipe>
          {recipes.length === 0 ? (
              <p>Nenhuma receita encontrada.</p>
            ) : (
              recipes.map((recipe) => (
                <CardRecipes
                  cod_receita={recipe.cod_receita}
                  nome_receita={recipe.nome_receita}
                  imagem={imgsComidas}
                  key={recipe.cod_receita}
                />
              ))
            )}
          </ContainerRecipe>
        </section>
      </Container>
    );
  };
  
  export default ListRecipe;