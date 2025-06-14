



export default function Contacts () {
    return (
        <section id="contacts" className="footer-main-container">
            <div className="contact-container">
                <a  href="mailto:dividamarkvincent@email.com" className="contact-item">
                    <img src="./gmail.png" alt="gmail logo" />
                    <p>dividamarkvincent@gmail.com</p>
                </a>
                {/* <p>|</p> */}
                <a href="https://github.com/Embi-Dev" className="contact-item">
                    <img src="./github.svg" alt="github logo" />
                    <p>Gihub</p>
                </a>
                {/* <p>|</p> */}
                <a className="contact-item">
                    <img src="./linkedin.webp" alt="linked logo" />
                    <p>Linkedin</p>
                </a>
            </div>
            <p className="reserved">© 2025 Vincent. All rights reserved. </p>
            <div className="bars-wrapper top" style={{justifyContent: "center"}}>
                <div className="bar gradient-1 short"></div>
                <div className="dot"></div>
                <div className="bar gradient-2 medium"></div>
                <div className="bar gradient-3 long"></div>
            </div>
             <div className="bars-wrapper top" style={{justifyContent: "center"}}>
                <div className="bar gray small"></div>
                <div className="bar gradient-1 short"></div>
                <div className="dot"></div>
                <div className="bar gray long"></div>
            </div>
             <div className="bars-wrapper top" style={{justifyContent: "center"}}>
                <div className="bar gradient-4 medium"></div>
                <div className="bar gradient-2 small"></div>
            </div>
        </section>
    )
}