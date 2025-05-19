const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');

const postsDir = path.join(__dirname, '../src/content');
const outFile = path.join(__dirname, '../src/generated/posts.json');

const posts = [];

if (!fs.existsSync(postsDir)) {
  console.error('Content directory does not exist:', postsDir);
  process.exit(1);
}

fs.readdirSync(postsDir).forEach(filename => {
  if (filename.endsWith('.md')) {
    const filePath = path.join(postsDir, filename);
    const fileContent = fs.readFileSync(filePath, 'utf-8');
    const { data, content } = matter(fileContent);
    const slug = filename.replace(/\.md$/, '');
    posts.push({
      slug,
      title: data.title || '',
      date: data.date || '',
      readTime: data.readTime || '',
      content,
    });
  }
});

// Sort posts by date (newest first)
posts.sort((a, b) => new Date(b.date) - new Date(a.date));

fs.mkdirSync(path.dirname(outFile), { recursive: true });
fs.writeFileSync(outFile, JSON.stringify(posts, null, 2));

console.log(`Generated ${posts.length} posts to ${outFile}`); 