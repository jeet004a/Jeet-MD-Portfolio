// import { Link } from 'lucide-react';
import styles from './bloglist.module.css'
import Link from 'next/link';

const posts = [
  {
    date: 'June 19, 2026',
    read: '8 min read',
    views: '706 views',
    title:
      'Memory in AI Agents',
    excerpt:
      'The difference between an AI demo and an AI product is memory....',
    ref: "https://techeng-omega.vercel.app/post/memory-in-ai-agents"
  },
  {
    date: 'July 22, 2026',
    read: '9 min read',
    views: '50 views',
    title:
      'TCP/IP Model',
    excerpt:
      'TL;DR Four layers move every byte on the internet. Here is what each one actually does...',
    ref: "https://techeng-omega.vercel.app/post/tcp-ip-model-explained"
  },
  // {
  //   date: 'Feb 27, 2023',
  //   read: '3 min read',
  //   views: '4.4k views',
  //   title:
  //     'A Step-by-Step Guide to Share images from Your Expo React Native App',
  //   excerpt:
  //     "Let's get started with this step-by-step guide to share images...",
  //   ref: "https://techeng-omega.vercel.app/post/memory-in-ai-agents"
  // },
];

const Bloglist = () => {
  return (
    <div className={styles.list}>
      {posts.map((post, i) => (
        <article key={i} className={styles.card}>
          <div className={styles.meta}>
            {post.date} · {post.read} · {post.views}
          </div>

          <h2 className={styles.title}>{post.title}</h2>
          <p className={styles.excerpt}>{post.excerpt}</p>

          <p className={styles.readMore}>
            <Link href={post.ref} target='_blank'>Read article</Link> <span>→</span>
          </p>
        </article>
      ))}
    </div>
  );
};

export default Bloglist;
