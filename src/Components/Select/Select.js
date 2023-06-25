import { useState } from 'react'
import './Select.css'

const Select = (props) => {    
    return(
        <div className='global_select'>
            <p>{props.titulo}</p>
            <select className='select'>
               {
                   props.Times.map(time =>
                     <option key={time} >{time}</option>
                    )
               }  
            </select>
        </div>
    )
}

export default Select