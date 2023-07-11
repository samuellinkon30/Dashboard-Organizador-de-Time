import Card from '../Card/Card'
import './Times.css'

const Times = (props) => {
    return(
        <div className='times' style={{ backgroundColor: props.corP}}>
            <h2>{props.time}</h2>
            <div className='cards'>
                <Card nome='Samuel' cargo={props.nome} corCard={props.corS} ></Card>
                <Card nome='Samuel' cargo={props.nome} corCard={props.corS} ></Card>
                <Card nome='Samuel' cargo={props.nome} corCard={props.corS} ></Card>
                <Card nome='Samuel' cargo={props.nome} corCard={props.corS} ></Card>
            </div>
        </div>
    )
}

export default Times