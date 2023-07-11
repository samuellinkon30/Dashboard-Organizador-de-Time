import './Card.css'

const Card = (props) => {
    return(
        <div className='card_block' style={{backgroundColor:props.corCard}}>
            <img  className='img_user' src='user.png'/>
            <div className='card_info'>
                <h2>{props.nome}</h2>
                <h4>{props.cargo}</h4>
            </div>
        </div>
    )
}

export default Card