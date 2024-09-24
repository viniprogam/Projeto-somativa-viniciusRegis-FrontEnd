import React, { useState } from 'react';
import styles from './CreateRecipe.module.css';

const CreateRecipe = () => {
    const [recipe, setRecipe] = useState({
        title: '',
        image: '',
        ingredients: [],
        instructions: ''
    });

    const [ingredient, setIngredient] = useState('');

    const handleChange = (e) => {
        const { name, value } = e.target;
        setRecipe({
            ...recipe,
            [name]: value
        });
    };

    const handleIngredientChange = (e) => {
        setIngredient(e.target.value);
    };

    const addIngredient = () => {
        if (ingredient.trim()) {
            setRecipe((prevRecipe) => ({
                ...prevRecipe,
                ingredients: [...prevRecipe.ingredients, ingredient.trim()]
            }));
            setIngredient('');
        }
    };

    const removeIngredient = (indexToRemove) => {
        setRecipe((prevRecipe) => ({
            ...prevRecipe,
            ingredients: prevRecipe.ingredients.filter((_, index) => index !== indexToRemove)
        }));
    };
// ainda não funciona futura função para enviar os dados da receita
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(recipe);
    };

    return (
        <section className={styles.createRecipeContainer}>
            <form onSubmit={handleSubmit}>
                <div className={styles.inputGroup}>
                    <label>Título da Receita</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        value={recipe.title}
                        onChange={handleChange}
                        placeholder="Digite o título da receita"
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label>URL da Imagem</label>
                    <input
                        type="text"
                        id="image"
                        name="image"
                        value={recipe.image}
                        onChange={handleChange}
                        placeholder="Digite a URL da imagem"
                    />
                </div>
                <div className={styles.inputGroup}>
                    <label>Ingredientes</label>
                    <div className={styles.ingredientInput}>
                        <input
                            type="text"
                            id="ingredient"
                            value={ingredient}
                            onChange={handleIngredientChange}
                            placeholder="Digite um ingrediente"
                        />
                        <button type="button" onClick={addIngredient}>Adicionar</button>
                    </div>
                    <ul className={styles.ingredientList}>
                        {recipe.ingredients.map((ing, index) => (
                            <li key={index} className={styles.ingredientItem}>
                                {ing}
                                <button 
                                    type="button" 
                                    onClick={() => removeIngredient(index)}
                                    className={styles.removeButton}
                                >
                                    X
                                </button>
                            </li>
                        ))}
                    </ul>
                </div>
                <div className={styles.inputGroup}>
                    <label>Modo de Preparo</label>
                    <textarea
                        id="instructions"
                        name="instructions"
                        value={recipe.instructions}
                        onChange={handleChange}
                        placeholder="Descreva o modo de preparo"
                    />
                </div>
                <button type="submit">Adicionar Receita</button>
            </form>
        </section>
    );
};

export default CreateRecipe;
