import posts from '../generated/posts.json';

export interface Post {
  slug: string;
  title: string;
  date: string;
  readTime: string;
  content: string;
  tags: string[];
}

export async function getAllPosts(): Promise<Post[]> {
  return posts.map((post: any) => ({
    ...post,
    tags: post.tags ?? [],
  }));
}