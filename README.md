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