import './Header.css'

const HeaderNav = () => {
    return(
        <header>
            <div className='logo'>
                <img src='logo.png'/>
            </div>
            <div className="header">
                <div className='info'>
                    <h1>Pessoas e Times</h1>
                    <h3>Organizados em só lugar</h3>
                </div>
                <div className='img'>
                    <img src='banner_header.png'/>
                </div>
                
            </div>
        </header>
    )
}

export default HeaderNav