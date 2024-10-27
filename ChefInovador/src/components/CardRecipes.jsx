import style from './CardRecipes.module.css'

import Button from './Button'

const CardRecipes =({nome_receita, cod_receita, imagem}) => {
    return (
        <div className={style.cardRecipe}>
            <h3 className={style.nomeReceita}>{nome_receita}</h3>
            <img src={imagem} alt={nome_receita} title={nome_receita}/>
            <div>
                <Button label='Detalhes' router='/DetailRecipe/' cod_receita={cod_receita}/>
            </div>
        </div>
    )
}

export default CardRecipes