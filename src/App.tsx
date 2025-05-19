import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, NavLink } from 'react-router-dom';
import { BookOpen, Github, Linkedin, Mail, Twitter } from 'lucide-react';
import ReactMarkdown from 'react-markdown';
import { getAllPosts, Post } from './lib/posts';

// Predefined tags for AI/ML fields
const PREDEFINED_TAGS = [
  'AI', 'ML', 'Deep Learning', 'NLP', 'Computer Vision', 'Data Science', 'Reinforcement Learning', 'Robotics', 'MLOps', 'Generative AI', 'Prompt Engineering', 'LLM', 'Foundation Models', 'Self-supervised Learning', 'Transfer Learning', 'Explainable AI', 'Ethics', 'AI Safety', 'Optimization', 'Graph Neural Networks', 'Time Series', 'Recommendation', 'Speech', 'Vision-Language', 'Meta-Learning', 'Few-shot Learning', 'Zero-shot Learning', 'Active Learning', 'Bayesian', 'Causal Inference', 'Simulation', 'AI Product', 'AI Research'
];

function BlogPost({ post }: { post: Post }) {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <Link to="/" className="text-blue-600 hover:text-blue-700 mb-8 inline-block">
        ← Back to posts
      </Link>
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
      {post.tags && post.tags.length > 0 && (
        <div className="flex flex-wrap gap-2 mb-6">
          {post.tags.map((tag) => (
            <span key={tag} className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded">
              {tag}
            </span>
          ))}
        </div>
      )}
      <div className="flex items-center gap-4 text-sm text-gray-600 mb-8">
        <span>{post.date}</span>
        <span>•</span>
        <span>{post.readTime}</span>
      </div>
      <article className="prose prose-lg max-w-none">
        <ReactMarkdown>{post.content}</ReactMarkdown>
      </article>
    </div>
  );
}

function App() {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    getAllPosts().then(setPosts);
  }, []);

  return (
    <Router basename="/tech-blog-bolt">
      <div className="min-h-screen bg-white">
        {/* Header */}
        <header className="border-b">
          <div className="max-w-4xl mx-auto px-6 py-8">
            <nav className="flex items-center justify-between">
              <Link to="/" className="text-xl font-semibold text-gray-900">Mingyuan ZHONG's Builder Blog</Link>
              <div className="flex items-center gap-6">
                <NavLink
                  to="/"
                  className={({ isActive }: { isActive: boolean }) =>
                    `px-3 py-1 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:text-blue-700'}`
                  }
                  end
                >
                  Home
                </NavLink>
                <NavLink
                  to="/archive"
                  className={({ isActive }: { isActive: boolean }) =>
                    `px-3 py-1 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:text-blue-700'}`
                  }
                >
                  Archive
                </NavLink>
                <NavLink
                  to="/service"
                  className={({ isActive }: { isActive: boolean }) =>
                    `px-3 py-1 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:text-blue-700'}`
                  }
                >
                  Service
                </NavLink>
                <NavLink
                  to="/about"
                  className={({ isActive }: { isActive: boolean }) =>
                    `px-3 py-1 rounded-md text-sm font-medium transition-colors ${isActive ? 'bg-blue-100 text-blue-700' : 'text-gray-700 hover:text-blue-700'}`
                  }
                >
                  About
                </NavLink>
                <a href="https://github.com/zhongmingyuan" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Github className="w-5 h-5" />
                </a>
                {/* <a href="https://twitter.com/zhongmingyuan" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Twitter className="w-5 h-5" />
                </a> */}
                <a href="https://www.linkedin.com/in/mingyuan-zhong-1397ab2a" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Linkedin className="w-5 h-5" />
                </a>
                {/* <a href="mailto:zhongmingyuan@example.com" className="text-gray-600 hover:text-gray-900 transition-colors">
                  <Mail className="w-5 h-5" />
                </a> */}
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
                    Welcome to my digital notebook 🌱
                  </h1>
                  <p className="text-xl text-gray-600 max-w-2xl">
                    I write about experiences and thoughts on building AI products.
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
                            {post.tags && post.tags.length > 0 && (
                              <div className="flex flex-wrap gap-2 mb-1">
                                {post.tags.map((tag) => (
                                  <span key={tag} className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded">
                                    {tag}
                                  </span>
                                ))}
                              </div>
                            )}
                            <p className="text-gray-600">
                              {post.content.split('\n').find(line => line.trim().length > 0)}
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
          <Route path="/archive" element={
            <section className="py-16">
              <div className="max-w-4xl mx-auto px-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-8 flex items-center gap-2">
                  <BookOpen className="w-6 h-6" />
                  Archive
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
                          {post.tags && post.tags.length > 0 && (
                            <div className="flex flex-wrap gap-2 mb-1">
                              {post.tags.map((tag) => (
                                <span key={tag} className="inline-block bg-blue-100 text-blue-700 text-xs px-2 py-0.5 rounded">
                                  {tag}
                                </span>
                              ))}
                            </div>
                          )}
                          <p className="text-gray-600">
                            {post.content.split('\n').find(line => line.trim().length > 0)}
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
          } />
          <Route path="/service" element={
            <section className="py-32 flex flex-col items-center justify-center min-h-[40vh]">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">Service</h2>
              <p className="text-lg text-gray-600">Under construction</p>
            </section>
          } />
          <Route path="/about" element={
            <section className="py-32 flex flex-col items-center justify-center min-h-[40vh]">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">About</h2>
              <p className="text-lg text-gray-600">Under construction</p>
            </section>
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
            <p>© 2025 Mingyuan ZHONG. All rights reserved.</p>
          </div>
        </footer>
      </div>
    </Router>
  );
}

export default App;