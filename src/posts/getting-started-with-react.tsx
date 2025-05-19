import React from 'react';

export const post = {
  title: 'Getting Started with React and TypeScript',
  date: 'March 15, 2024',
  readTime: '5 min read',
  content: `
    React and TypeScript are a powerful combination for building robust web applications. In this post, we'll explore how to set up a new project and implement best practices for type safety.

    ## Why TypeScript?

    TypeScript adds static typing to JavaScript, which helps catch errors early in development and improves code maintainability.

    ## Setting Up Your Project

    First, create a new project using Vite:

    \`\`\`bash
    npm create vite@latest my-app -- --template react-ts
    \`\`\`

    ## Key Benefits

    1. Better IDE support
    2. Catch errors before runtime
    3. Improved code documentation
    4. Enhanced refactoring capabilities

    ## Best Practices

    - Always define proper interfaces for your props
    - Use strict mode
    - Leverage type inference when possible
    - Create reusable type definitions
  `
};

export default function Post() {
  return (
    <article className="prose prose-lg max-w-none">
      <div dangerouslySetInnerHTML={{ __html: post.content }} />
    </article>
  );
}