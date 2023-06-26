import { useState } from 'react'
import './Select.css'

const Select = (props) => {    

    const aoSelecionar = (e) => {
        // console.log(e.target.value)
        props.enviarDados(e.target.value)

    }

    return(
        <div className='global_select'>
            <p>{props.titulo}</p>
            <select onChange={aoSelecionar} className='select' value={props.valor}>
               {
                   props.Times.map(time =>
                     <option key={time}>
                        {time}
                    </option>
                    )
               }  
            </select>
        </div>
    )
}

export default Select