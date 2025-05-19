import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { BookOpen, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import * as GettingStarted from './posts/getting-started-with-react';
import * as BuildingTailwind from './posts/building-with-tailwind';
import * as ModernJavaScript from './posts/modern-javascript';

const posts = [
  {
    ...GettingStarted.post,
    component: GettingStarted.default,
    slug: 'getting-started-with-react',
  },
  {
    ...BuildingTailwind.post,
    component: BuildingTailwind.default,
    slug: 'building-with-tailwind',
  },
  {
    ...ModernJavaScript.post,
    component: ModernJavaScript.default,
    slug: 'modern-javascript',
  },
];

function BlogPost({ post }: { post: typeof posts[0] }) {
  const PostComponent = post.component;
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <Link to="/" className="text-blue-600 hover:text-blue-700 mb-8 inline-block">
        ← Back to posts
      </Link>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
      <div className="flex items-center gap-4 text-sm text-gray-600 mb-8">
        <span>{post.date}</span>
        <span>•</span>
        <span>{post.readTime}</span>
      </div>
      <PostComponent />
    </div>
  );
}

function App() {
  return (
    <Router basename="/tech-blog-bolt">
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="border-b">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <nav className="flex items-center justify-between">
              <Link to="/" className="text-xl font-semibold text-gray-900">Mingyuan ZHONG's Builder Blog</Link>
              <div className="flex items-center gap-6">
                <a href="https://github.com/zhongmingyuan" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                <a href="https://twitter.com/zhongmingyuan" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a>
                <a href="https://linkedin.com/in/zhongmingyuan" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                <a href="mailto:zhongmingyuan@example.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Mail className="w-5 h-5" />
                </a>
              </div>
            </nav>
          </div>
        </header>

        <Routes>
          <Route path="/" element={
            <>
              {/* Hero Section */}
              <section className="py-20 bg-gray-50">
                <div className="max-w-4xl mx-auto px-6">
                  <h1 className="text-4xl font-bold text-gray-900 mb-4">
                    Welcome to my digital garden 🌱
                  </h1>
                  <p className="text-xl text-gray-600 max-w-2xl">
                    I write about web development, design, and the intersection of technology and creativity.
                    Join me on this journey of continuous learning and exploration.
                  </p>
                </div>
              </section>

              {/* Blog Posts */}
              <section className="py-16">
                <div className="max-w-4xl mx-auto px-6">
                  <h2 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-2">
                    <BookOpen className="w-6 h-6" />
                    Latest Posts
                  </h2>
                  <div className="space-y-12">
                    {posts.map((post, index) => (
                      <article
                        key={index}
                        className="group"
                      >
                        <Link to={`/${post.slug}`} className="block">
                          <div className="space-y-3">
                            <div className="flex items-center gap-4 text-sm text-gray-600">
                              <span>{post.date}</span>
                              <span>•</span>
                              <span>{post.readTime}</span>
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 group-hover:text-blue-600 transition-colors">
                              {post.title}
                            </h3>
                            <p className="text-gray-600">
                              {post.content.split('\n')[1].trim()}
                            </p>
                            <div className="pt-2">
                              <span className="text-blue-600 group-hover:text-blue-700 transition-colors">
                                Read more →
                              </span>
                            </div>
                          </div>
                        </Link>
                      </article>
                    ))}
                  </div>
                </div>
              </section>
            </>
          } />
          
          {posts.map((post, index) => (
            <Route
              key={index}
              path={`/${post.slug}`}
              element={<BlogPost post={post} />}
            />
          ))}
        </Routes>

        {/* Footer */}
        <footer className="border-t py-8">
          <div className="max-w-4xl mx-auto px-6 text-center text-gray-600">
            <p>© 2024 Mingyuan ZHONG. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;