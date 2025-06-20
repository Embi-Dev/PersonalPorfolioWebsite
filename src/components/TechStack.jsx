import { useState, useRef , useEffect} from "react";

export default function TechStack() {
    const [hoverIndex, setHoverIndex] = useState(null);
    const [backendIndex, setBackendIndex] = useState(null);
    const [otherIndex, setOtherIndex] = useState(null)
    const techList = [
        "React",
        "HTML",
        "CSS",
        "Javascript",
        "CSS frameworks: ( Bootstrap, Tailwind )",
        "V0 by vercel",
        "Lovable"
    ];
    const backEndList = [
        "NodeJS some backend frameworks (Express, Meteor JS)",
        "Python and some backend frameworks (FastAPI , Flask)",
        "AWS lambda",
        "MongoDB",
        "Cloudflare workers and pages",
        "Linux",
    ]
    const otherList = [
        "Text to speech",
        "Speech to text",
        "Vapi and AI agents",
        "Restful API",
        "microservices",
        "web automation and scraping (Puppeteer and selenium)",
        "LLM API's, Agents and RAG framework(embeddings, milvus database)",
        "Expo ( Mobile Applictions ) ",
        "Electron.js ( Desktop Applications )"
    ]
    const iconRefs = useRef([]);
    const iconRefs2 = useRef([]);
    const iconRefs3 = useRef([]);
    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate");
                observer.unobserve(entry.target);
            }
            });
        },
        { threshold: 0.5 }
        );

        iconRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
        });
        iconRefs2.current.forEach((ref) => {
        if (ref) observer.observe(ref);
        });
        iconRefs3.current.forEach((ref) => {
        if (ref) observer.observe(ref);
        });
        return () => observer.disconnect();
    }, []);
    return (
        <section id="tech-stack" className="section-container" style={{ scrollMarginTop: "100px"}}>
            <div className="left flex align-items-center">
                <div className="arrow-container">
                    <div className="arrow-dot"></div>
                    <div className="arrow-body"></div>
                    <div className="arrow-head"></div>
                </div>
                <div>
                    <div className="bars-wrapper top">
                        <div className="bar gradient-6 short"></div>
                        <div className="dot"></div>
                        <div className="bar gradient-7 medium"></div>
                        <div className="bar gradient-8 long"></div>
                    </div>
                    <div className="bars-wrapper bottom">
                        <div className="bar gradient-9 short"></div>
                        <div className="bar gray small"></div>
                        <div className="bar gradient-10 medium"></div>
                        <div className="dot"></div>
                        <div className="bar gradient-1 long"></div>
                    </div>
                    
                    <h1>Tech Stack</h1>
                    <div className="logo-mobile bouncing-animation logo-desktop  svg-3d">
                    <svg fill="#2e2e2e" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 360.844 360.844" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_71_"> <path id="XMLID_85_" d="M282.205,133.545l10.606,10.606c2.929,2.929,6.768,4.394,10.607,4.394c3.839,0,7.678-1.464,10.606-4.394 l42.427-42.427c2.813-2.813,4.394-6.628,4.394-10.606c0-3.979-1.58-7.794-4.394-10.607l-42.427-42.426 c-5.857-5.857-15.355-5.857-21.213,0l-42.427,42.426c-2.813,2.813-4.394,6.628-4.394,10.607c0,3.978,1.58,7.793,4.394,10.606 l10.607,10.607l-42.428,42.428l-11.437-11.438c8.505-35.427-1.776-72.486-27.898-98.607C147.817,13.302,99.789,5.056,59.717,24.198 c-4.394,2.099-7.496,6.2-8.319,10.999c-0.823,4.799,0.734,9.7,4.178,13.143l49.407,49.408L83.77,118.961L34.362,69.553 c-3.443-3.442-8.343-5.001-13.143-4.177c-4.799,0.824-8.9,3.925-10.999,8.319c-19.14,40.072-10.894,88.101,20.517,119.512 c17.296,17.297,39.388,27.634,62.624,30.186l-29.608,29.608c-21.445,21.446-21.444,56.34,0,77.784 c10.723,10.723,24.804,16.084,38.889,16.083c14.082-0.001,28.169-5.362,38.89-16.083l48.747-48.746l48.746,48.747 c10.723,10.721,24.806,16.082,38.89,16.082c14.085,0,28.17-5.362,38.892-16.084c10.388-10.387,16.108-24.199,16.108-38.89 c0.001-14.691-5.72-28.502-16.107-38.888l-59.33-59.331c-0.008-0.008-0.014-0.017-0.021-0.024 c-0.008-0.008-0.017-0.014-0.024-0.022l-17.655-17.656L282.205,133.545z M303.418,69.905l21.214,21.213l-21.214,21.213 l-21.214-21.213L303.418,69.905z M51.95,171.994c-16.961-16.961-24.467-40.703-21.218-63.644l42.432,42.431 c5.857,5.857,15.355,5.858,21.213-0.001l42.426-42.426c5.858-5.857,5.858-15.355,0-21.213L94.371,44.709 c22.938-3.25,46.685,4.259,63.646,21.219c19.479,19.479,26.615,47.473,19.036,73.774l-51.331,51.331 C99.423,198.611,71.429,191.474,51.95,171.994z M120.32,309.572c-9.747,9.747-25.606,9.747-35.353,0 c-9.749-9.748-9.749-25.609,0-35.358L190.28,168.901l35.356,35.357l-45.902,45.901c-0.021,0.02-0.043,0.037-0.064,0.058 c-0.02,0.02-0.037,0.043-0.058,0.064L120.32,309.572z M302.916,291.893c0,6.678-2.6,12.956-7.321,17.678 c-9.747,9.746-25.609,9.747-35.356,0.001l-48.745-48.746l35.356-35.355l48.747,48.748 C300.316,278.939,302.916,285.216,302.916,291.893z"></path> </g> </g></svg>
                </div>
                    <p>Here are the technologies I’m familiar with and have experience using.</p>
                    <div className="bars-wrapper top">
                        <div className="bar gradient-6 short"></div>
                        <div className="dot"></div>
                        <div className="bar gradient-7 medium"></div>
                        <div className="bar gradient-8 long"></div>
                    </div>
                    <div className="bars-wrapper bottom">
                        <div className="bar gradient-9 short"></div>
                        <div className="bar gray small"></div>
                        <div className="bar gradient-10 medium"></div>
                        <div className="dot"></div>
                        <div className="bar gradient-1 long"></div>
                    </div>
                    <h4 style={{marginBottom: 0, display: "flex", alignItems:"center",fontWeight: 800}}> 
                        Frontend
                        <div style={{marginLeft: "10px"}} className="bar gradient-2 long"></div>
                    </h4>
                    <div className="tech-stack-list">
                        <div>
                            <p><b>Technologies, tools and frameworks :</b></p>
                            {techList.map((item, index) => (
                                <span
                                    key={index}
                                    onMouseEnter={() => setHoverIndex(index)}
                                    onMouseLeave={() => setHoverIndex(null)}
                                    style={{ display: "flex", alignItems: "center" }}
                                    className="slide-in-left"
                                    ref={(el) => (iconRefs.current[index] = el)}
                                >
                                <div
                                    style={{ marginRight: "10px" }}
                                    className={`gradient-2 ${hoverIndex === index ? "bar medium" : "dot"}`}
                                ></div>
                                    <p>{item}</p>
                                </span>
                            ))}
                        </div>
                    </div>
                    <h4 style={{marginBottom: 0, display: "flex", alignItems:"center"}}> 
                        Backend
                        <div style={{marginLeft: "10px"}} className="bar gradient-9 long"></div>
                    </h4>
                    <div className="tech-stack-list">
                        <div>
                            <p><b>Technologies, tools and frameworks :</b></p>
                            {backEndList.map((item, index) => (
                                <span
                                    key={index}
                                    onMouseEnter={() => setBackendIndex(index)}
                                    onMouseLeave={() => setBackendIndex(null)}
                                    style={{ display: "flex", alignItems: "center" }}
                                    className="slide-in-left"
                                    ref={(el) => (iconRefs2.current[index] = el)}
                                >
                                <div
                                    style={{ marginRight: "10px" }}
                                    className={`gradient-9 ${backendIndex === index ? "bar short" : "dot"}`}
                                ></div>
                                    <p>{item}</p>
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    <h4 style={{marginBottom: 0, display: "flex", alignItems:"center"}}> 
                        Others
                        <div style={{marginLeft: "10px"}} className="bar gradient-10 long"></div>
                    </h4>
                     <div className="tech-stack-list" style={{marginBottom: "50px"}}>
                        <div>
                            <p><b>Technologies, tools and frameworks :</b></p>
                            {otherList.map((item, index) => (
                                <span
                                    key={index}
                                    onMouseEnter={() => setOtherIndex(index)}
                                    onMouseLeave={() => setOtherIndex(null)}
                                    style={{ display: "flex", alignItems: "center" }}
                                    className="slide-in-left"
                                    ref={(el) => (iconRefs3.current[index] = el)}
                                >
                                <div
                                    style={{ marginRight: "10px" }}
                                    className={`gradient-10 ${otherIndex === index ? "bar small" : "dot"}`}
                                ></div>
                                    <p>{item}</p>
                                </span>
                            ))}
                        </div>
                    </div>
                    
                    <div className="bars-wrapper top">
                        <div className="bar gradient-1 short"></div>
                        <div className="dot"></div>
                        <div className="bar gradient-2 medium"></div>
                        <div className="bar gradient-3 long"></div>
                    </div>
                    <div className="bars-wrapper bottom">
                        <div className="bar gradient-4 short"></div>
                        <div className="bar gray small"></div>
                        <div className="bar gradient-5 medium"></div>
                        <div className="dot"></div>
                        <div className="bar gradient-1 long"></div>
                    </div>
                </div>                
            </div>
        </section>
    );
}