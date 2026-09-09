import express from 'express';
import { query } from '../db.js';
import { authenticateAdmin } from '../middleware/auth.js';

const router = express.Router();

// Helper to auto-generate URL slug from title
function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, '-');
}

// Fallback in-memory blogs store
let memoryBlogs = [
  {
    id: 1,
    title: 'The Future of AI Automation & Autonomous Workflows',
    slug: 'the-future-of-ai-automation-autonomous-workflows',
    summary: 'Discover how multi-agent systems and foundational models are reshaping modern business processes.',
    content: 'Enterprise AI is rapidly shifting from single-turn chat interfaces to full autonomous workflows. In this article, we explore how Encegen builds secure, high-precision agent networks for enterprise operations.',
    cover_image: 'https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80',
    category: 'AI Trends',
    author: 'Encegen AI Research',
    status: 'published',
    created_at: new Date().toISOString()
  },
  {
    id: 2,
    title: 'Building Scalable Cloud Microservices for Enterprise AI',
    slug: 'building-scalable-cloud-microservices-for-enterprise-ai',
    summary: 'Best practices for architecting resilient REST & GraphQL APIs to handle high-concurrency LLM inference traffic.',
    content: 'Scaling AI inference requires modular backend microservices, intelligent request queuing, and persistent caching strategies. Learn how to optimize throughput while minimizing cloud latency.',
    cover_image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80',
    category: 'Engineering',
    author: 'Tech Lead @ Encegen',
    status: 'published',
    created_at: new Date().toISOString()
  }
];

// PUBLIC: Get all blog posts
router.get('/blogs', async (req, res) => {
  try {
    const result = await query('SELECT * FROM blogs ORDER BY created_at DESC');
    return res.json(result.rows);
  } catch (err) {
    console.warn('DB query failed, using in-memory blogs:', err.message);
    return res.json(memoryBlogs);
  }
});

// PUBLIC: Get single blog by slug or ID
router.get('/blogs/:slug', async (req, res) => {
  const { slug } = req.params;
  try {
    const result = await query('SELECT * FROM blogs WHERE slug = $1 OR id::text = $1', [slug]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Blog post not found' });
    }
    return res.json(result.rows[0]);
  } catch (err) {
    const blog = memoryBlogs.find(b => b.slug === slug || b.id == slug);
    if (!blog) return res.status(404).json({ error: 'Blog post not found' });
    return res.json(blog);
  }
});

// ADMIN: Add Blog Post
router.post('/admin/blogs', authenticateAdmin, async (req, res) => {
  const { title, summary, content, cover_image, category, author, status } = req.body;

  if (!title || !content || !summary) {
    return res.status(400).json({ error: 'Title, summary, and content are required fields.' });
  }

  const blogSlug = req.body.slug ? slugify(req.body.slug) : slugify(title);
  const blogStatus = status || 'published';
  const blogCategory = category || 'General';
  const blogAuthor = author || 'Encegen Team';

  try {
    const result = await query(
      `INSERT INTO blogs (title, slug, summary, content, cover_image, category, author, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8) RETURNING *`,
      [title, blogSlug, summary, content, cover_image || '', blogCategory, blogAuthor, blogStatus]
    );
    return res.status(201).json({ message: 'Blog post created successfully', blog: result.rows[0] });
  } catch (err) {
    console.warn('DB insert failed, adding to memoryBlogs store:', err.message);
    const newBlog = {
      id: memoryBlogs.length ? Math.max(...memoryBlogs.map(b => b.id)) + 1 : 1,
      title, slug: blogSlug, summary, content,
      cover_image: cover_image || '', category: blogCategory, author: blogAuthor,
      status: blogStatus, created_at: new Date().toISOString()
    };
    memoryBlogs.unshift(newBlog);
    return res.status(201).json({ message: 'Blog post created successfully', blog: newBlog });
  }
});

// ADMIN: Update Blog Post
router.put('/admin/blogs/:id', authenticateAdmin, async (req, res) => {
  const { id } = req.params;
  const { title, summary, content, cover_image, category, author, status, slug } = req.body;

  const blogSlug = slug ? slugify(slug) : (title ? slugify(title) : null);

  try {
    const result = await query(
      `UPDATE blogs SET
         title = COALESCE($1, title),
         slug = COALESCE($2, slug),
         summary = COALESCE($3, summary),
         content = COALESCE($4, content),
         cover_image = COALESCE($5, cover_image),
         category = COALESCE($6, category),
         author = COALESCE($7, author),
         status = COALESCE($8, status),
         updated_at = CURRENT_TIMESTAMP
       WHERE id = $9 RETURNING *`,
      [title, blogSlug, summary, content, cover_image, category, author, status, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Blog post not found' });
    }
    return res.json({ message: 'Blog post updated successfully', blog: result.rows[0] });
  } catch (err) {
    const index = memoryBlogs.findIndex(b => b.id == id);
    if (index === -1) return res.status(404).json({ error: 'Blog post not found' });

    memoryBlogs[index] = {
      ...memoryBlogs[index],
      title: title || memoryBlogs[index].title,
      slug: blogSlug || memoryBlogs[index].slug,
      summary: summary || memoryBlogs[index].summary,
      content: content || memoryBlogs[index].content,
      cover_image: cover_image !== undefined ? cover_image : memoryBlogs[index].cover_image,
      category: category || memoryBlogs[index].category,
      author: author || memoryBlogs[index].author,
      status: status || memoryBlogs[index].status
    };
    return res.json({ message: 'Blog post updated successfully', blog: memoryBlogs[index] });
  }
});

// ADMIN: Delete Blog Post
router.delete('/admin/blogs/:id', authenticateAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    const result = await query('DELETE FROM blogs WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Blog post not found' });
    }
    return res.json({ message: 'Blog post deleted successfully', id });
  } catch (err) {
    const index = memoryBlogs.findIndex(b => b.id == id);
    if (index === -1) return res.status(404).json({ error: 'Blog post not found' });

    memoryBlogs.splice(index, 1);
    return res.json({ message: 'Blog post deleted successfully', id });
  }
});

export default router;
