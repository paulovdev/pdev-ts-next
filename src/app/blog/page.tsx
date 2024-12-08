
import Link from 'next/link';
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
    <section id="blog">
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
    </section>
  );
}
