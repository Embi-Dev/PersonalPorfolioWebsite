import { useEffect, useState } from "react";

const svg = (sectionId) => {
  switch (sectionId) {
    case "home":
      return (<div className="bouncing-code svg-3d" style={{color: "#2e2e2e"}}>&lt;/&gt;</div>);
    case "about":
      return (
        <svg className="bouncingg-animation svg-3d" fill="#2e2e2e" viewBox="-32 0 512 512" xmlns="http://www.w3.org/2000/svg"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"><path d="M224 256c70.7 0 128-57.3 128-128S294.7 0 224 0 96 57.3 96 128s57.3 128 128 128zm95.8 32.6L272 480l-32-136 32-56h-96l32 56-32 136-47.8-191.4C56.9 292 0 350.3 0 422.4V464c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48v-41.6c0-72.1-56.9-130.4-128.2-133.8z"></path></g></svg>
      )
    case "experience":
      return(
        <svg className="bouncing-animation svg-3d" version="1.1" id="_x32_" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512 512" xmlSpace="preserve" fill="#2e2e2e"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <style type="text/css"> .st0 fill:#000000; </style> <g> <path className="st0" d="M451.528,129.424H60.472C27.077,129.424,0,156.494,0,189.896v40.313l212.743,41.306v-3.41 c0-11.139,9.028-20.16,20.16-20.16h45.014c11.132,0,20.159,9.021,20.159,20.16v3.41L512,229.813v-39.917 C512,156.494,484.924,129.424,451.528,129.424z"></path> <path className="st0" d="M298.076,341.563c0,11.139-9.028,20.159-20.159,20.159h-45.014c-11.132,0-20.16-9.02-20.16-20.159v-40 L0,260.258v164.25c0,33.403,27.077,60.472,60.472,60.472h391.056c33.396,0,60.472-27.069,60.472-60.472V259.854l-213.924,41.709 V341.563z"></path> <rect x="234.076" y="269.278" className="st0" width="42.667" height="71.111"></rect> <path className="st0" d="M188.798,71.826c0.007-1.833,0.688-3.305,1.875-4.535c1.222-1.187,2.702-1.861,4.528-1.874h121.597 c1.827,0.014,3.306,0.687,4.528,1.874c1.188,1.23,1.861,2.702,1.875,4.535v32h38.396v-32c0.007-12.312-5.041-23.632-13.125-31.68 c-8.041-8.076-19.36-13.132-31.674-13.125H195.202c-12.312-0.006-23.632,5.049-31.68,13.125 c-8.077,8.049-13.132,19.368-13.119,31.68v32h38.396V71.826z"></path> </g> </g></svg>
      )
    case "tech-stack":
      return (
        <svg fill="#2e2e2e" className="bouncing-animation svg-3d" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 360.844 360.844" xmlSpace="preserve"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <g id="XMLID_71_"> <path id="XMLID_85_" d="M282.205,133.545l10.606,10.606c2.929,2.929,6.768,4.394,10.607,4.394c3.839,0,7.678-1.464,10.606-4.394 l42.427-42.427c2.813-2.813,4.394-6.628,4.394-10.606c0-3.979-1.58-7.794-4.394-10.607l-42.427-42.426 c-5.857-5.857-15.355-5.857-21.213,0l-42.427,42.426c-2.813,2.813-4.394,6.628-4.394,10.607c0,3.978,1.58,7.793,4.394,10.606 l10.607,10.607l-42.428,42.428l-11.437-11.438c8.505-35.427-1.776-72.486-27.898-98.607C147.817,13.302,99.789,5.056,59.717,24.198 c-4.394,2.099-7.496,6.2-8.319,10.999c-0.823,4.799,0.734,9.7,4.178,13.143l49.407,49.408L83.77,118.961L34.362,69.553 c-3.443-3.442-8.343-5.001-13.143-4.177c-4.799,0.824-8.9,3.925-10.999,8.319c-19.14,40.072-10.894,88.101,20.517,119.512 c17.296,17.297,39.388,27.634,62.624,30.186l-29.608,29.608c-21.445,21.446-21.444,56.34,0,77.784 c10.723,10.723,24.804,16.084,38.889,16.083c14.082-0.001,28.169-5.362,38.89-16.083l48.747-48.746l48.746,48.747 c10.723,10.721,24.806,16.082,38.89,16.082c14.085,0,28.17-5.362,38.892-16.084c10.388-10.387,16.108-24.199,16.108-38.89 c0.001-14.691-5.72-28.502-16.107-38.888l-59.33-59.331c-0.008-0.008-0.014-0.017-0.021-0.024 c-0.008-0.008-0.017-0.014-0.024-0.022l-17.655-17.656L282.205,133.545z M303.418,69.905l21.214,21.213l-21.214,21.213 l-21.214-21.213L303.418,69.905z M51.95,171.994c-16.961-16.961-24.467-40.703-21.218-63.644l42.432,42.431 c5.857,5.857,15.355,5.858,21.213-0.001l42.426-42.426c5.858-5.857,5.858-15.355,0-21.213L94.371,44.709 c22.938-3.25,46.685,4.259,63.646,21.219c19.479,19.479,26.615,47.473,19.036,73.774l-51.331,51.331 C99.423,198.611,71.429,191.474,51.95,171.994z M120.32,309.572c-9.747,9.747-25.606,9.747-35.353,0 c-9.749-9.748-9.749-25.609,0-35.358L190.28,168.901l35.356,35.357l-45.902,45.901c-0.021,0.02-0.043,0.037-0.064,0.058 c-0.02,0.02-0.037,0.043-0.058,0.064L120.32,309.572z M302.916,291.893c0,6.678-2.6,12.956-7.321,17.678 c-9.747,9.746-25.609,9.747-35.356,0.001l-48.745-48.746l35.356-35.355l48.747,48.748 C300.316,278.939,302.916,285.216,302.916,291.893z"></path> </g> </g></svg>
      )
    default:
      break;
  }
}
const icons = [
  { sectionId: "home"},
  { sectionId: "about"},
  { sectionId: "experience"},
  { sectionId: "tech-stack"}
];

export default function FixedIconLayer() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [scale, setScale] = useState(0.5);

  // useEffect(() => {
  //   const handleScroll = () => {
  //     const center = window.innerHeight / 2;
  //     let closestIndex = 0;
  //     let minDistance = Infinity;
  //     icons.forEach((icon, i) => {
  //       const section = document.getElementById(icon.sectionId);
  //       if (!section) return;
  //       const rect = section.getBoundingClientRect();
  //       const sectionCenter = rect.top + rect.height / 2;
  //       const distance = Math.abs(center - sectionCenter);
  //       if (distance < minDistance) {
  //         minDistance = distance;
  //         closestIndex = i;
  //       }
  //       if (i === closestIndex) {
  //         const progress = 1 - Math.min(distance / center, 1);
  //         setScale(0.5 + progress * 0.5);
  //       }
  //     });
  //     setActiveIndex(closestIndex);
  //   };

  //   handleScroll();
  //   window.addEventListener("scroll", handleScroll);
  //   return () => window.removeEventListener("scroll", handleScroll);
  // }, []);
  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      let closestIndex = 0;
      let minDistance = Infinity;

      icons.forEach((icon, i) => {
        const section = document.getElementById(icon.sectionId);
        if (!section) return;

        const rect = section.getBoundingClientRect();
        const sectionCenter = rect.top + rect.height / 2;
        const viewCenter = windowHeight / 2;
        const distance = Math.abs(viewCenter - sectionCenter);

        // Track closest section
        if (distance < minDistance) {
          minDistance = distance;
          closestIndex = i;
        }

        // Only calculate scale for the active section
        if (i === closestIndex) {
          const viewProgress = sectionCenter / windowHeight;

          let scale = 0.5; // default minimum
          if (viewProgress < 0.3) {
            scale = 0.5 + (viewProgress / 0.3) * 0.5; // grow up to full at 30%
          } else if (viewProgress >= 0.3 && viewProgress <= 0.7) {
            scale = 1; // full size between 30%–70%
          } else if (viewProgress > 0.7) {
            scale = 1 - ((viewProgress - 0.7) / 0.3) * 0.5; // shrink down to 0.5
          }

          // Clamp scale just in case
          scale = Math.max(0.5, Math.min(scale, 1));
          setScale(scale);
        }
      });

      setActiveIndex(closestIndex);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="fixed-icon-layer">
      {icons.map((icon, i) => (
        <div
          key={icon.sectionId}
          className="fixed-icon"
          style={{
            transform: `scale(${i === activeIndex ? scale : 0.1})`,
            opacity: i === activeIndex && scale > 0.51 ? 1 : 0,
          }}
        >
          {svg(icon.sectionId)}
        </div>
      ))}
    </div>
  );
}
