import './Campos.css'

const Campos = (props) => {
    return(
        <div className='item-form'>
            <p>{props.label}</p>
            <input type='text' placeholder={props.placeholder}></input>
        </div>
    )
}

export default Campos