export default function About() {
    return(
        <section id="about" className="section-container">
            <div className="right flex align-items-center">
                <div className="arrow-container">
                    <div className="arrow-dot"></div>
                    <div className="arrow-body"></div>
                    <div className="arrow-head"></div>
                </div>
                <div>    
                    <div className="bouncing-code logo-mobile">
                            <svg fill="#2e2e2e" viewBox="-32 0 512 512" xmlns="http://www.w3.org/2000/svg" width={300} height={300}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"></path></g></svg>
                    </div>                
                    <p className="about-me-intro"><b>Hi, I am Mark Vincent.</b></p>
                    
                    <div className="bars-wrapper top bar-center">
                        <div className="bar gradient-1 short"></div>
                        <div className="dot"></div>
                        <div className="bar gradient-2 medium"></div>
                        <div className="bar gradient-3 long"></div>
                    </div>
                    <div className="bars-wrapper bottom bar-center">
                        <div className="bar gradient-4 short"></div>
                        <div className="bar gray small"></div>
                        <div className="bar gradient-5 medium"></div>
                        <div className="dot"></div>
                        <div className="bar gradient-1 long"></div>
                    </div>
                    <p className="about-me-content">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ratione eius ducimus illo accusamus laborum iusto dicta dolorem perspiciatis praesentium itaque facilis, corporis quod reiciendis excepturi doloremque. Iure recusandae reprehenderit dolore!</p>
                    <div className="bars-wrapper top bar-center">
                        <div className="bar gradient-4 medium"></div>
                        <div className="bar gradient-2 small"></div>
                    </div>
                    <div className="bars-wrapper top bar-center">
                        <div className="bar gray small"></div>
                        <div className="bar gradient-1 short"></div>
                        <div className="dot"></div>
                        <div className="bar gray long"></div>
                    </div>
                    <div className="bars-wrapper top bar-center">
                        <div className="bar gradient-1 short"></div>
                        <div className="dot"></div>
                        <div className="bar gradient-2 medium"></div>
                        <div className="bar gradient-3 long"></div>
                    </div>
                    <div className="bars-wrapper top bar-center">
                        <div className="bar gradient-5 long"></div>
                    </div>
                     <div className="bars-wrapper top bar-center">
                        <div className="bar gray small"></div>
                        <div className="bar gradient-1 short"></div>
                        <div className="dot"></div>
                        <div className="bar gray long"></div>
                    </div>
                    <div className="bars-wrapper top bar-center">
                        <div className="bar gradient-1 medium"></div>
                        <div className="bar gradient-5 short"></div>
                    </div>
                </div>
            </div>
            <div className="bouncing-code left">
                <div className="logo-left-container logo-desktop">
                    <svg fill="#2e2e2e" viewBox="-32 0 512 512" xmlns="http://www.w3.org/2000/svg" width={300} height={300}><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"></path></g></svg>
                </div>
            </div>
        </section>
    )
}