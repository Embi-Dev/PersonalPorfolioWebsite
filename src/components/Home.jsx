import "../styles/home.css";

export default function Home() {
  return (
    <section id="home" className="section-container">
        <div className="right flex align-items-center">
            <div className="arrow-container">
                <div className="arrow-dot"></div>
                <div className="arrow-body"></div>
                <div className="arrow-head"></div>
            </div>
            <div>
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

                <div className="intro">
                    <h1>Mark Vincent Divida</h1>
                    <p>Full-Stack Developer</p>
                </div>
                
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
        <div className="bouncing-code left  svg-3d">&lt;/&gt;</div>
    </section>
  );
}