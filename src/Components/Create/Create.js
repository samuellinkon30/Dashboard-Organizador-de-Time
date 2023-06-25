import Campos from '../Campos/Campos'
import Select from '../Select/Select'
import './Create.css'

const Create = () => {

    const CamposItens = [
             {
                nome: 'Nome',
                placeholder: 'Digite seu nome'
             },
             {
                nome: 'Cargo',
                placeholder: 'Digite seu cargo'
             },
             {
                nome: 'Imagem',
                placeholder: 'https...'
             },
    ]

    const Times = [
        'Programação',
        'Front-end',
        'Data Science',
        'DevOps',
        'Ux / Ui',
        'Mobile',
        'P&D',
    ]

    return(
        <div className='create_item_block'>
            <h3>Preencha os dados parar cirar o card do colaborador</h3>
            <form className='form_global'>
                {CamposItens.map(
                    time => <Campos key={time} label={time.nome} placeholder={time.placeholder}></Campos>
                    )}
                <Select Times={Times} titulo='Time'></Select>
                <input type='submit' value='Enivar'></input>
            </form>
        </div>
    )
}

export default Create