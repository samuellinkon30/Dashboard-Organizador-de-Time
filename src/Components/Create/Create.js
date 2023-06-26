import { useState } from 'react'
import Campos from '../Campos/Campos'
import Select from '../Select/Select'
import './Create.css'

const Create = () => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')

    const Times = [
        'Programação',
        'Front-end',
        'Data Science',
        'DevOps',
        'Ux / Ui',
        'Mobile',
        'P&D',
    ]

    const obg = [
        nome,
        cargo,
        imagem
    ]
    const submitform = (e) => {
        e.preventDefault();
       console.log(obg)
    }


    return(
        <div className='create_item_block'>
            <h3>Preencha os dados parar cirar o card do colaborador</h3>
            <form className='form_global' onSubmit={submitform}>
                <Campos 
                    label='Nome' 
                    placeholder='Digite seu nome'
                    valor={nome}
                    enviarDados={valor=>setNome(valor)} >
                </Campos>   

                <Campos 
                    label='Cargo' 
                    placeholder='Digite seu cargo'
                    valor={cargo}
                    enviarDados={valor=>setCargo(valor)} >
                </Campos>   

                <Campos 
                    label='Imagem' 
                    placeholder='https...'
                    valor={imagem}
                    enviarDados={valor=>setImagem(valor)} >
                </Campos>   
               
                <Select Times={Times} titulo='Time'></Select>
                <input type='submit' value='Enivar'></input>
            </form>
        </div>
    )
}

export default Create