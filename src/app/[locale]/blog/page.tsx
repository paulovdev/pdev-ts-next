import { MotionSection } from "@/components/motion";
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/routing';
import "./blog.scss"

interface Blog {
  id: number;
  title: string;
  date: string;
}

export default function Blog() {
  const t = useTranslations('Blog');

  const miniBlogs: Blog[] = [
    {
      id: 1,
      title: t('articles.1.title'),
      date: t('articles.1.date'),
    },
    {
      id: 2,
      title: t('articles.2.title'),
      date: t('articles.2.date'),
    },
    {
      id: 3,
      title: t('articles.3.title'),
      date: t('articles.3.date'),
    }
  ];

  return (
    <MotionSection id="blog"
      initial={{ opacity: 0, filter: "blur(15px)" }}
      animate={{ opacity: 1, filter: "blur(0px)" }}
      exit={{ opacity: 0, filter: "blur(15px)" }}
      transition={{ duration: 0.5, ease: "easeInOut" }}>
      <h1>{t('title')}</h1>
      <p>{t('description')}</p>

      <div className="blog-container">
        {miniBlogs.map(blog => (
          <Link href={`/blog/${blog.id}`} key={blog.id} className="blog">
            <h2>{blog.title}</h2>
            <p>{blog.date}</p>
          </Link>
        ))}
      </div>
    </MotionSection>
  );
}
