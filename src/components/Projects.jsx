import { useEffect, useRef } from "react";

export default function Projects() {
    const icon = () => {
        return(
            <svg fill="#2e2e2e" viewBox="-32 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"></path></g></svg>
        )
    }
    const resumeBrainIcon = () => {
        return (<svg fill="#4f46e5" viewBox="0 0 256 256" id="Flat" xmlns="http://www.w3.org/2000/svg" stroke="#4f46e5"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M240,132a48.01975,48.01975,0,0,1-31.99951,45.26855L208,177.26685V184a40,40,0,0,1-80,0,40,40,0,0,1-80,0v-6.73315l-.00049.0017a48.01968,48.01968,0,0,1-.00049-90.537L48,72a40,40,0,0,1,80,0,40,40,0,0,1,80,0l.001,14.73157A48.02,48.02,0,0,1,240,132Z" opacity="0.2"></path> <path d="M248,132a56.1211,56.1211,0,0,0-31.99951-50.61035L216,72a47.98283,47.98283,0,0,0-88-26.49316A47.98283,47.98283,0,0,0,40,71.99951l-.00049,9.39014A56.00268,56.00268,0,0,0,40,182.58569V184a47.98283,47.98283,0,0,0,88,26.49316A47.98283,47.98283,0,0,0,216,184v-1.41431A56.06726,56.06726,0,0,0,248,132ZM88,216a32.0433,32.0433,0,0,1-31.812-28.55664A56.1738,56.1738,0,0,0,64,188h8a8,8,0,0,0,0-16H64A40.00827,40.00827,0,0,1,50.66553,94.27393a7.99958,7.99958,0,0,0,5.33349-7.542L56,72a32,32,0,0,1,64,0v76.26147A47.80252,47.80252,0,0,0,88,136a8,8,0,0,0,0,16,32,32,0,0,1,0,64Zm104-44h-8a8,8,0,0,0,0,16h8a56.1738,56.1738,0,0,0,7.812-.55664A31.999,31.999,0,1,1,168,152a8,8,0,0,0,0-16,47.80252,47.80252,0,0,0-32,12.26147V72a32,32,0,1,1,64,.00049l.001,14.73144a7.99958,7.99958,0,0,0,5.33349,7.542A40.00827,40.00827,0,0,1,192,172ZM60,128a8,8,0,0,1,0-16A20.0226,20.0226,0,0,0,80,92V84a8,8,0,0,1,16,0v8A36.04061,36.04061,0,0,1,60,128Zm144-8a8.00008,8.00008,0,0,1-8,8,36.04061,36.04061,0,0,1-36-36V84a8,8,0,0,1,16,0v8a20.0226,20.0226,0,0,0,20,20A8.00008,8.00008,0,0,1,204,120Z"></path> </g></svg>)
    }
    const projects = [
        {
            icon: <img src="./splash.png"/>,
            projectName: "Foodietection",
            projectDescription: "Developed as part of our college thesis, this mobile application detects Filipino food items and classifies them into 'Go', 'Grow', or 'Glow' categories using MobileNetV3. It also includes a Fuzzy Logic-based recommender system to provide users with tailored nutrition insights and promote healthy eating habits.",
            github: "https://github.com/jericholongabela/foodietection-expo.git",
            web: "https://www.canva.com/design/DAGpjCZbK3A/2vu6K3liWVBaMHrfnBGl1A/view?utm_content=DAGpjCZbK3A&utm_campaign=designshare&utm_medium=link2&utm_source=uniquelinks&utlId=h19f7706fbe#3"
        },
        {
            icon: resumeBrainIcon(),
            projectName: "ResumeBrain",
            projectDescription: "ResumeBrain is an MVP SaaS application built to eliminate the most common frustrations in resume creation. Instead of choosing overused templates or struggling with rigid, irrelevant form fields, users simply write in free-form (storytelling) style. The app then intelligently converts that input into a well-designed, ATS-optimized resume — tailored to their strengths and goals, without the hassle of formatting or dragging things.",
            web: "https://resumebrain.online"
        },
    ]
    const iconRefs = useRef([]);

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
        { threshold: 0.7 }
        );

        iconRefs.current.forEach((ref) => {
        if (ref) observer.observe(ref);
        });

        return () => observer.disconnect();
    }, []);
    return(
        <section id="projects" className="section-container" style={{marginTop: "100px", scrollMarginTop: "100px"}}>
            <div style={{display :"block"}}>
                    <div className="bars-wrapper top">
                        <div className="bar gradient-4 medium"></div>
                        <div className="bar gradient-2 small"></div>
                    </div>
                    <div className="bars-wrapper top">
                        <div className="bar gray small"></div>
                        <div className="bar gradient-1 short"></div>
                        <div className="dot"></div>
                        <div className="bar gray long"></div>
                    </div>
                    <div className="bars-wrapper top">
                        <div className="bar gradient-1 short"></div>
                        <div className="dot"></div>
                        <div className="bar gradient-2 medium"></div>
                        <div className="bar gradient-3 long"></div>
                    </div>
                    <div className="bars-wrapper top">
                        <div className="bar gradient-5 long"></div>
                    </div>
                    <h1>Projects</h1>
                    <p>Here are some personal projects I worked on:</p>
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
                    <div className="bars-wrapper top">
                        <div className="bar gray small"></div>
                        <div className="bar gradient-1 short"></div>
                        <div className="dot"></div>
                        <div className="bar gray long"></div>
                    </div>
                    {
                        projects.map((item, index) => {
                            const isEven = index % 2 === 0;
                            return (
                                <div className={`project-item-container ${isEven ? "reverse-row" : ""}`} key={index}>
                                    <div className="right flex align-items-center" >
                                        
                                        <div>    
                                            <div className="bouncing-code logo-mobile svg-3d">
                                                {item.icon}
                                            </div>                
                                            <p className="about-me-intro"><b>{item.projectName}</b></p>
                                            <div className="bars-wrapper top bar-center">
                                                <div className="bar gradient-10 short"></div>
                                                <div className="bar gradient-2 long"></div>
                                                <div className="dot"></div>
                                                <div className="bar gradient-2 medium"></div>
                                            </div>
                                             <div className="bars-wrapper top bar-center">
                                                <div className="dot"></div>
                                                <div className="bar gradient-1 short"></div>
                                                <div className="bar gradient-9 medium"></div>
                                                <div className="bar gradient-3 long"></div>
                                            </div>
                                            <p className="about-me-content">{item.projectDescription}</p>
                                            <div className="project-link-container">
                                                {
                                                    item.github?  <a href={item.github} className="project-link">
                                                    <img className="github-project-icon" src="/github.svg" alt="Github" /></a> : null
                                                }
                                                {
                                                    item.web ? <a href={item.web} className="project-link">
                                                    <img className="web-project-link" src="/web.svg" alt="" /></a> : null
                                                }
                                            </div>
                                        </div>
                                    </div>
                                    <div className="left">
                                            <div  ref={(el) => (iconRefs.current[index] = el)}
                                            className={`logo-left-container logo-desktop svg-3d ${isEven ? "slide-in-left" : "slide-in-right"}`}>
                                            {item.icon}
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
            </div>
        </section>
    )
}