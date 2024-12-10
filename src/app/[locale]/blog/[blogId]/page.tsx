import { GoArrowLeft } from "react-icons/go";
import { Link } from '@/i18n/routing';
import { getTranslations } from 'next-intl/server';

import "./blogPost.scss";
import { MotionSection } from "@/components/motion";

interface Blog {
    id: number;
    title: string;
    date: string;
    content: string[];
}

interface BlogIdQuery {
    params: Promise<{
        blogId: string;
    }>;
}

export default async function BlogServer({ params }: BlogIdQuery) {
    const { blogId } = await params;

    const t = await getTranslations('');

    if (!blogId) {
        return <p>Id not found.</p>;
    }

    const miniBlogs: Blog[] = [
        {
            id: 1,
            title: t('BlogPost.content.1.title'),
            date: t('BlogPost.content.1.date'),
            content: [
                t('BlogPost.content.1.content.0'),
                t('BlogPost.content.1.content.1'),
                t('BlogPost.content.1.content.2')
            ]
        },
        {
            id: 2,
            title: t('BlogPost.content.2.title'),
            date: t('BlogPost.content.2.date'),
            content: [
                t('BlogPost.content.2.content.0'),
                t('BlogPost.content.2.content.1'),
                t('BlogPost.content.2.content.2')
            ]
        },
        {
            id: 3,
            title: t('BlogPost.content.3.title'),
            date: t('BlogPost.content.3.date'),
            content: [
                t('BlogPost.content.3.content.0'),
                t('BlogPost.content.3.content.1'),
                t('BlogPost.content.3.content.2'),
                t('BlogPost.content.3.content.3')
            ]
        }
    ];

    const blog = miniBlogs.find(blog => blog.id === parseInt(blogId));

    if (!blog) {
        return <p>Blog not found.</p>;
    }

    return (
        <MotionSection
            id="blog-post"
            initial={{ opacity: 0, filter: "blur(15px)" }}
            animate={{ opacity: 1, filter: "blur(0px)" }}
            exit={{ opacity: 0, filter: "blur(15px)" }}
            transition={{ duration: 0.5, ease: "easeInOut" }}>

            <div className="back-to-blogs">
                <Link href="/blog"><GoArrowLeft /> {t('BlogPost.backToBlogs')}</Link>
            </div>
            <h1>{blog.title} <span>{blog.date}</span></h1>
            <div className="border-left"></div>
            {blog.content.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
            ))}
        </MotionSection>
    );
}
