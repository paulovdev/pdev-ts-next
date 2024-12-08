
import { GoLinkExternal } from "react-icons/go";

import "./works.scss";


export default function HomeWorks () {
    const works = [
        {
            id: 1,
            imgSrc: "/works/work-1.webp",
            title: "Quimplo",
            description: "Quimplo is a marketplace website for selling templates.",
            src: "https://quimplo.online"
        },
        {
            id: 2,
            imgSrc: "/works/work-2.webp",
            title: "Paulin",
            description: "Paulin is a simple minimal portfolio website.",
            src: "https://post-and-publish.netlify.app/"
        },
        {
            id: 3,
            imgSrc: "/works/work-3.webp",
            title: "paulovdev",
            description: "paulovdev is a full portfolio website.",
            src: "https://paulovdev.framer.website/"
        }
    ];

    return (
        <div className="home-works"
        >
            <h1>Recent works</h1>
            <p>Explore my recent works, and the ones I'm still working on</p>
            <div className="works-container">
                {works.map(work => (
                    <a href={work.src} target="_blank" className="w-content" key={work.id}>
                        <div className="img-content">
                            <img src={work.imgSrc} alt={work.title} />
                        </div>
                        <h1>{work.title}</h1>
                        <p>{work.description}</p>
                        <div className="see-work">
                            <GoLinkExternal />
                        </div>
                    </a>
                ))}
            </div>
        </div >

    )
}
