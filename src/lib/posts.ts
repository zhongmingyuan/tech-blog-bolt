import matter from 'gray-matter';

export interface Post {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  content: string;
}

export async function getAllPosts(): Promise<Post[]> {
  const modules = import.meta.glob('../content/*.md', { as: 'raw' });
  const posts: Post[] = [];

  for (const path in modules) {
    const content = await modules[path]();
    const { data, content: markdown } = matter(content);
    const slug = path.replace('../content/', '').replace('.md', '');

    posts.push({
      slug,
      title: data.title,
      date: data.date,
      readTime: data.readTime,
      content: markdown,
    });
  }

  return posts.sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}