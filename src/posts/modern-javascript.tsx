import React from 'react';
import ReactMarkdown from 'react-markdown';

export const post = {
  title: 'Modern JavaScript Features You Should Know',
  date: 'March 5, 2024',
  readTime: '6 min read',
  content: `
    JavaScript has evolved significantly in recent years. Let's explore the modern features that make development more enjoyable.

    ## Latest Features

    ES2022 and beyond have introduced powerful new capabilities that every developer should know.

    ## Key Features

    1. Optional Chaining
    2. Nullish Coalescing
    3. Private Class Fields
    4. Top-level await

    ## Practical Examples

    \`\`\`javascript
    // Optional Chaining
    const value = user?.address?.street;

    // Nullish Coalescing
    const count = data ?? 0;
    \`\`\`

    ## Best Practices

    - Use modern syntax when possible
    - Consider browser compatibility
    - Leverage bundlers and transpilers
    - Write clean, maintainable code
  `
};

export default function Post() {
  return (
    <article className="prose prose-lg max-w-none">
      <ReactMarkdown>{post.content}</ReactMarkdown>
    </article>
  );
}