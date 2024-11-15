import {React, useEffect} from 'react'
import { useParams, useNavigate } from 'react-router-dom'

function DeleteRecipe() {
    const {cod_receita} = useParams();
    const navigate = useNavigate();

    useEffect(()=>{
        fetch(`http://localhost:5000/excluirReceita/${cod_receita}`, {
            method: 'DELETE',
            mode: 'cors',
            headers: {
                'Content-Type':'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            }
        }).then(
            resp => resp.json()
        ).then(
            (data)=>{
                navigate('/ListRecipe',{state:'RECEITA EXCLUÍDA COM SUCESSO!'});
            }
        ).catch(
            err => console.log(err)
        );
    })
    return(
        <>
        </>
    )
}

export default DeleteRecipe
