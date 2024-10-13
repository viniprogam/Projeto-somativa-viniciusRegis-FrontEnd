// ListRecipe.jsx
import React, { useState, useEffect } from 'react';
import InfiniteScroll from 'react-infinite-scroll-component';
import styles from './ListRecipe.module.css';

const ListRecipe = () => {
    const [recipes, setRecipes] = useState([]);
    const [hasMore, setHasMore] = useState(true);

    useEffect(() => {
        // Inicialmente, carregar uma receita
        const initialRecipes = [
            {
                title: 'Receita 1',
                image: './backgroundHome.jpg',
                ingredients: ['Ingrediente X', 'Ingrediente Y', 'Ingrediente Z'],
                instructions: 'Modo de preparo da receita 1...'
            },

        ];
        setRecipes(initialRecipes);
    }, []);

    const fetchMoreRecipes = () => {
        // Simulação de carregamento de mais receitas
        setTimeout(() => {
            const newRecipeNumber = recipes.length + 1;
            const newRecipe = {
                title: `Receita ${newRecipeNumber}`,
                image: `https://example.com/image${newRecipeNumber}.jpg`,
                ingredients: ['Ingrediente A', 'Ingrediente B', 'Ingrediente C'],
                instructions: `Modo de preparo da receita ${newRecipeNumber}...`
            };
            setRecipes(prevRecipes => [...prevRecipes, newRecipe]);

            // Definir um limite para evitar carregamento infinito real
            if (newRecipeNumber >= 5) { // Por exemplo, parar após 5 receitas
                setHasMore(false);
            }
        }, 1500);
    };

    return (
        <div className={styles.container}>
            <InfiniteScroll
                dataLength={recipes.length}
                next={fetchMoreRecipes}
                hasMore={hasMore}
                loader={<h4>Carregando receitas...</h4>}
                endMessage={
                    <p style={{ textAlign: 'center' }}>
                        <b>Você viu todas as receitas!</b>
                    </p>
                }
                className={styles.recipeListContainer}
            >
                {recipes.length === 0 ? (
                    <p>Não há receitas cadastradas.</p>
                ) : (
                    recipes.map((recipe, index) => (
                        <div key={index} className={styles.recipeCard}>
                            <h2>{recipe.title}</h2>
                            <img src={recipe.image} alt={recipe.title} className={styles.recipeImage} />
                            <h3>Ingredientes</h3>
                            <ul>
                                {recipe.ingredients.map((ingredient, idx) => (
                                    <li key={idx}>{ingredient}</li>
                                ))}
                            </ul>
                            <h3>Modo de Preparo</h3>
                            <p>{recipe.instructions}</p>
                        </div>
                    ))
                )}
            </InfiniteScroll>
        </div>
    );
};

export default ListRecipe;
