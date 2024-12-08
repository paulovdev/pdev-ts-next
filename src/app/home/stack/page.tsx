import "./stack.scss"
export default function HomeStack() {

    const stacks = [
        {
            img: "/stacks/react.png",
            title: "React",
            subTitle: "JavaScript UI library"
        },
        {
            img: "/stacks/firebase.png",
            title: "Firebase",
            subTitle: "Google app platform"
        },
        {
            img: "/stacks/notion.png",
            title: "Notion",
            subTitle: "All-in-one workspace"
        },
        {
            img: "/stacks/figma.png",
            title: "Figma",
            subTitle: "Design platform"
        },
        {
            img: "/stacks/vs-code.png",
            title: "VS Code",
            subTitle: "Code editor"
        },
        {
            img: "/stacks/chat-gpt.png",
            title: "Open AI",
            subTitle: "AI-powered language"
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