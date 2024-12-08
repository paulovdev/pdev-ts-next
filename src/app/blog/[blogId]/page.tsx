
import { GoArrowLeft } from "react-icons/go";
import Link from "next/link";

import "./blogPost.scss";
import { MotionSection } from "@/components/motion";

interface Blog {
    id: number
    title: string;
    date: string;
    content: string[];
}

interface BlogIdQuery {
    params: Promise<{
        blogId: string
    }>
}


const miniBlogs: Blog[] = [
    {
        id: 1,
        title: "User-Centric Design",
        date: "Mar 8, 2024",
        content: [
            "User-centric design focuses on meeting user needs by prioritizing usability, accessibility, and emotional experience over aesthetics. The process begins with research, such as surveys and usability tests, to gather insights for creating user personas—realistic representations of the target audience.",
            "With personas, you can map the user journey, identifying friction points and opportunities for improvement. Accessibility is key, ensuring compatibility with screen readers, providing text alternatives for images, and optimizing navigation for different devices.",
            "The iterative process is essential. After launch, continuous user feedback guides refinements, ensuring the design evolves to meet their needs."
        ]
    },
    {
        id: 2,
        title: "Maximizing Efficiency",
        date: "Mar 12, 2024",
        content: [
            "Automation increases efficiency by reducing time spent on repetitive tasks, allowing more focus on strategic and creative work. In marketing, tools like Mailchimp and HubSpot automate campaigns and personalize content, delivering the right message at the right time with minimal effort.",
            "Customer support also benefits from automation with chatbots and ticketing systems resolving common issues quickly. Project management tools like Trello and Asana automate task assignments and deadline reminders, helping teams stay organized.",
            "Personal automation tools like Zapier and IFTTT streamline daily tasks such as email organization and backups. Identifying repetitive tasks and choosing the right tools for automation can maximize efficiency both at work and in personal life."
        ]
    },
    {
        id: 3,
        title: "Building Brand Identity",
        date: "Mar 18, 2024",
        content: [
            "Brand identity is the combination of visual, verbal, and emotional elements that shape how your business is perceived. To build a strong identity, start with a clear purpose—understanding what your brand stands for and how you want customers to feel when interacting with it.",
            "Visual identity includes your logo, color palette, typography, and imagery. These elements should evoke emotions and build recognition, creating a cohesive and timeless look.",
            "Your brand voice should align with your visual identity, maintaining consistency across all communication channels, from social media to customer service. Consistency fosters trust with your audience.",
            "Finally, the user experience plays a crucial role. How customers feel when interacting with your product or service strengthens the emotional connection, fostering brand loyalty and long-term growth."
        ]
    }
];


export default async function BlogServer({ params }: BlogIdQuery) {
    const { blogId } = await params

    if (!blogId) {
        return <p>Id not found.</p>
    }

    const blog = miniBlogs.find(blog => blog.id === parseInt(blogId));

    if (!blog) {
        return console.log("Nenhum blog encontrado");
    }

    return (
        <MotionSection
            id="blog-post"
            initial={{ opacity: 0, filter: "blur(15px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(15px)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}>

            <div className="back-to-blogs">
                <Link href="/blog"><GoArrowLeft />Blogs</Link>
            </div>
            <h1>{blog.title} <span>{blog.date}</span></h1>
            <div className="border-left"></div>
            {blog.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}

        </MotionSection>
    );
};
