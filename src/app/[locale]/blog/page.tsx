import { MotionSection } from "@/components/motion";
import {Link} from '@/i18n/routing';
import "./blog.scss"

interface Blog {
  id: number,
  title: string;
  date: string;

}

const miniBlogs: Blog[] = [
  {
    id: 1,
    title: "The Art of User-Centric Design",
    date: "Mar 8, 2024",
  },
  {
    id: 2,
    title: "Maximizing Efficiency with Automation",
    date: "Mar 12, 2024",
  },
  {
    id: 3,
    title: "Building a Strong Brand Identity",
    date: "Mar 18, 2024",
  }
];

export default function Blog() {
  return (
    <MotionSection id="blog"
    initial={{ opacity: 0, filter: "blur(15px)" }}
    animate={{ opacity: 1, filter: "blur(0px)" }}
    exit={{ opacity: 0, filter: "blur(15px)" }}
    transition={{ duration: 0.5, ease: "easeInOut" }}>
      <h1>Blog</h1>
      <p>Unlocking the secrets of success: Stories, strategies, and motivation.</p>

      <div className="blog-container">
        {miniBlogs.map(blog => (
          <Link href={`/blog/${blog.id}`} key={blog.id} className="blog" >
            <h2>{blog.title}</h2>
            <p>{blog.date}</p>
          </Link>
        ))}
      </div>
    </MotionSection>
  );
}
