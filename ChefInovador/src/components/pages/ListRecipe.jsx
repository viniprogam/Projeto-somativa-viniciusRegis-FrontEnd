import React from "react";

/* IMPORTAÇÃO DA STATE */
import { useState, useEffect } from 'react'

import CardRecipes from '../CardRecipes'
import Container from '../layout/Container'
import ContainerRecipe from '../layout/ContainerRecipe'
import style from './ListRecipe.module.css'


import imgsComidas from '../../../public/logo.png'

const ListRecipe = () => {
    const [recipes, setRecipes] = useState([]);
  
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
  
    return (
      <Container>
        <section className={style.list_recipe_container}>
          <ContainerRecipe>
            {recipes.map((recipe) => (
              // console.log(recipe.nome_receita)
              <CardRecipes
                cod_receita={recipe.cod_receita}
                nome_receita={recipe.nome_receita}
                imagem={imgsComidas}
                key={recipe.cod_receita}
              />
            ))}
          </ContainerRecipe>
        </section>
      </Container>
    );
  };
  
  export default ListRecipe;