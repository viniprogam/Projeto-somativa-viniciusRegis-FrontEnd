import React, { useState, useEffect } from 'react';
import styles from './ListRecipe.module.css';

const ListRecipe = () => {
    const [recipes, setRecipes] = useState([]);
    useEffect(() => {
        const exampleRecipes = [
            {
                title: 'Receita 1',
                image: 'https://example.com/image1.jpg',
                ingredients: ['Ingrediente 1', 'Ingrediente 2', 'Ingrediente 3'],
                instructions: 'Modo de preparo da receita 1...'
            },
            {
                title: 'Receita 2',
                image: 'https://example.com/image2.jpg',
                ingredients: ['Ingrediente A', 'Ingrediente B', 'Ingrediente C'],
                instructions: 'Modo de preparo da receita 2...'
            },
        ];
        setRecipes(exampleRecipes);
    }, []);

    return (
        <section className={styles.recipeListContainer}>
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
        </section>
    );
};

export default ListRecipe;
