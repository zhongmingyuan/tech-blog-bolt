# Tech Blog

A modern blog built with React, TypeScript, and Tailwind CSS.

## Local Development Setup (macOS)

### Prerequisites

1. Install Node.js and npm
   ```bash
   brew install node
   ```

2. Verify installation
   ```bash
   node --version
   npm --version
   ```

### Running the Project

1. Clone the repository
   ```bash
   git clone https://github.com/zhongmingyuan/tech-blog-bolt.git
   cd tech-blog-bolt
   ```

2. Install dependencies
   ```bash
   npm install
   ```

3. Start the development server
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173/tech-blog-bolt`

### Building for Production

To create a production build:
```bash
npm run build
```

### Testing GitHub Pages Deployment Locally

1. Build the project
   ```bash
   npm run build
   ```

2. Preview the build
   ```bash
   npm run preview
   ```

3. Open your browser and visit `http://localhost:4173/tech-blog-bolt`

## Live Site

Visit the live site at: https://zhongmingyuan.github.io/tech-blog-bolt/

## Adjusting Navigation Tabs

Tabs (Home, Archive, Service, About) are defined in `src/App.tsx` using React Router's `<NavLink>`. To add, remove, or rename tabs, edit the navigation section in the header and add or remove corresponding `<Route>` elements.

Example:
```tsx
<NavLink to="/about">About</NavLink>
<Route path="/about" element={<AboutPage />} />
```

## Tag System for Posts

Each post can have a list of tags from a predefined set of AI/ML-related tags. Tags are displayed as badges under each post title.

### Predefined Tags
- AI
- ML
- Deep Learning
- NLP
- Computer Vision
- Data Science
- Reinforcement Learning
- Robotics
- MLOps
- Generative AI
- Prompt Engineering
- LLM
- Foundation Models
- Self-supervised Learning
- Transfer Learning
- Explainable AI
- Ethics
- AI Safety
- Optimization
- Graph Neural Networks
- Time Series
- Recommendation
- Speech
- Vision-Language
- Meta-Learning
- Few-shot Learning
- Zero-shot Learning
- Active Learning
- Bayesian
- Causal Inference
- Simulation
- AI Product
- AI Research

### Adding Tags to a Post

Add a `tags` field to the frontmatter of your markdown file, for example:

```yaml
---
title: My Post
date: 2025-05-18
readTime: 2 min read
tags:
  - AI
  - Deep Learning
---
```

If you update the markdown, make sure your build process updates `src/generated/posts.json` accordingly.

## Listing All Tags Used in the Blog

Tags are defined in the frontmatter of each markdown file (see above). To get a list of all tags currently used in your blog, you can scan the frontmatter of all markdown files in `src/content/`, or simply inspect the generated `src/generated/posts.json` file.

### Example: Extract All Unique Tags from posts.json

You can run the following Node.js script in your project root to print all unique tags:

```js
const posts = require('./src/generated/posts.json');
const allTags = Array.from(new Set(posts.flatMap(post => post.tags || [])));
console.log(allTags);
```

This will output an array of all tags used in your posts.