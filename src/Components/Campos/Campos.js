import './Campos.css'

const Campos = (props) => {

    const aoDigitado = (e) => {
        // console.log(e)
        props.enviarDados(e.target.value)
    }
    return(
        <div className='item-form'>
            <p>{props.label}</p>
            <input type='text' value={props.valor} onChange={aoDigitado} placeholder={props.placeholder}></input>
        </div>
    )
}

export default Campos