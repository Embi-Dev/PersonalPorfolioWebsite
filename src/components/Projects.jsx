import { useEffect, useRef } from "react";

export default function Projects() {
    const icon = () => {
        return(
            <svg fill="#2e2e2e" viewBox="-32 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"></path></g></svg>
        )
    }
    const projects = [
        {
            icon: icon(),
            projectName: "ProjectName",
            projectDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit eligendi eius ullam, voluptates possimus sint officia nulla ratione dolorem tempore velit corrupti dolorum eum pariatur molestiae laboriosam quod voluptate sed.",
            github: "https://github.com/jericholongabela/foodietection-expo.git",
            web: "https://github.com/jericholongabela/foodietection-expo.git"
        },
        {
            icon: icon(),
            projectName: "ProjectName",
            projectDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit eligendi eius ullam, voluptates possimus sint officia nulla ratione dolorem tempore velit corrupti dolorum eum pariatur molestiae laboriosam quod voluptate sed.",
            web: "https://github.com/jericholongabela/foodietection-expo.git"
        },
        {
            icon: icon(),
            projectName: "ProjectName",
            projectDescription: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Reprehenderit eligendi eius ullam, voluptates possimus sint officia nulla ratione dolorem tempore velit corrupti dolorum eum pariatur molestiae laboriosam quod voluptate sed."
        }
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
                                            {icon()}
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