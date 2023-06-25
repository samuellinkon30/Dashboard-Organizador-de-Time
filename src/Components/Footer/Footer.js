import './Footer.css'

const Footer = () => {
    return(
        <footer className="footer_global">
            <div className="social-icons">
                <ul>
                    <li>
                        Whastapp
                    </li>
                    <li>
                        Facebook
                    </li>
                    <li>
                        Instagram
                    </li>
                    <li>
                        Linkedin
                    </li>
                    <li>
                        Github
                    </li>
                </ul>
            </div>
            <div className="logo-footer">
                <img src="logo.png"/>
            </div>
            <div className="copyright">
                <p>
                    @Copyright Samuel Linkon
                </p>
            </div>
        </footer>
    )
}

export default Footer