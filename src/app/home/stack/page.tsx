import "./stack.scss"
import Image from 'next/image';

export default function HomeStack() {

    const stacks = [
        {
            img: "/stacks/react.png",
            title: "React",
            subTitle: "JavaScript UI library",
            width: 40,
            height: 40
        },
        {
            img: "/stacks/firebase.png",
            title: "Firebase",
            subTitle: "Google app platform",
            width: 40,
            height: 40
        },
        {
            img: "/stacks/notion.png",
            title: "Notion",
            subTitle: "All-in-one workspace",
            width: 40,
            height: 40
        },
        {
            img: "/stacks/figma.png",
            title: "Figma",
            subTitle: "Design platform",
            width: 40,
            height: 40
        },
        {
            img: "/stacks/vs-code.png",
            title: "VS Code",
            subTitle: "Code editor",
            width: 40,
            height: 40
        },
        {
            img: "/stacks/chat-gpt.png",
            title: "Open AI",
            subTitle: "AI-powered language",
            width: 40,
            height: 40
        },
    ];

    return (
        <div className="home-stack">
            <h1>Stack</h1>
            <p>Tools that I always use in almost all of my work</p>
            <ul>
                {stacks.map((stack, index) => (
                    <li key={index}>
                        <div className="l-content">
                            <div className="icon-content">
                                <img src={stack.img} alt="icon" />
                            </div>
                        </div>
                        <div className="r-content">
                            <h1>{stack.title}</h1>
                            <p>{stack.subTitle}</p>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}