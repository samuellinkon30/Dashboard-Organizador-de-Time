import Card from '../Card/Card'
import './Times.css'

const Times = (props) => {
    
    return(
        <div className='times'>
            <h2>{props.time}</h2>
            <div className='cards'>
                <Card nome='Samuel' cargo='Dev'></Card>
                <Card nome='Samuel' cargo='Dev'></Card>
                <Card nome='Samuel' cargo='Dev'></Card>
                <Card nome='Samuel' cargo='Dev'></Card>
            </div>
        </div>
    )
}

export default Times