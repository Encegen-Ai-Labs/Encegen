import express from 'express';
import { query } from '../db.js';
import { authenticateAdmin } from '../middleware/auth.js';

const router = express.Router();

function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .trim()
    .replace(/[\s\W-]+/g, '-');
}

// In-memory fallback dataset for Resources
let memoryResources = [
  {
    id: 1,
    title: "The Future of AI Automation & Autonomous Workflows",
    slug: "the-future-of-ai-automation",
    category: "Blog",
    summary: "Discover how multi-agent systems and foundational models are reshaping modern business processes.",
    content: "Enterprise AI is rapidly shifting from single-turn chat interfaces to full autonomous workflows. In this article, we explore how Encegen builds secure, high-precision agent networks for enterprise operations.\n\nKey takeaways:\n1. Autonomous tool calling reduces human workload by 70%.\n2. Multi-agent coordination handles complex multi-step reasoning.\n3. Real-time observability ensures compliance and safety.",
    cover_image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
    author: "Encegen AI Research",
    media_url: "",
    is_featured: true,
    status: "published",
    created_at: new Date().toISOString()
  },
  {
    id: 2,
    title: "Building Scalable Cloud Microservices for Enterprise AI",
    slug: "building-scalable-cloud-microservices",
    category: "Documentation",
    summary: "Best practices for architecting resilient REST & GraphQL APIs to handle high-concurrency LLM inference traffic.",
    content: "Scaling AI inference requires modular backend microservices, intelligent request queuing, and persistent caching strategies. Learn how to optimize throughput while minimizing cloud latency.\n\nTopics covered:\n- Asynchronous queueing with Redis & BullMQ\n- Model quantization techniques\n- Auto-scaling microservice clusters",
    cover_image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
    author: "Tech Lead @ Encegen",
    media_url: "",
    is_featured: false,
    status: "published",
    created_at: new Date().toISOString()
  },
  {
    id: 3,
    title: "Executive Webinar: Accelerating Process Automation in 2026",
    slug: "executive-webinar-process-automation",
    category: "Webinars",
    summary: "On-demand masterclass on identifying top ROI automation targets across ERP workflows.",
    content: "Join Encegen architects as we break down concrete enterprise case studies and live benchmarks on automating legacy systems with multi-agent intelligence.",
    cover_image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
    author: "Encegen Solutions Team",
    media_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    is_featured: false,
    status: "published",
    created_at: new Date().toISOString()
  },
  {
    id: 4,
    title: "Global Enterprise Process Intelligence Report",
    slug: "global-enterprise-process-intelligence-report",
    category: "Reports",
    summary: "Comprehensive market benchmark on AI integration speed and business impact metrics.",
    content: "Our annual research survey capturing insights from over 800 IT leaders on agentic systems, security parameters, and measurable productivity gains across financial operations.",
    cover_image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
    author: "Market Insights Group",
    media_url: "",
    is_featured: false,
    status: "published",
    created_at: new Date().toISOString()
  }
];

// PUBLIC: Get all resources
router.get('/resources', async (req, res) => {
  const { category, includeDrafts } = req.query;
  try {
    let sql = 'SELECT * FROM resources';
    const params = [];

    if (includeDrafts !== 'true') {
      sql += ' WHERE status = $1';
      params.push('published');
    }

    if (category && category !== 'All') {
      sql += params.length ? ' AND category = $' + (params.length + 1) : ' WHERE category = $1';
      params.push(category);
    }

    sql += ' ORDER BY is_featured DESC, created_at DESC';
    const result = await query(sql, params);
    return res.json(result.rows);
  } catch (err) {
    console.warn('DB query failed, using in-memory resources:', err.message);
    let items = memoryResources;
    if (includeDrafts !== 'true') {
      items = items.filter(r => r.status === 'published');
    }
    if (category && category !== 'All') {
      items = items.filter(r => r.category.toLowerCase() === category.toLowerCase());
    }
    return res.json(items);
  }
});

// PUBLIC: Get single resource by slug or ID
router.get('/resources/:slug', async (req, res) => {
  const { slug } = req.params;
  try {
    const result = await query('SELECT * FROM resources WHERE slug = $1 OR id::text = $1', [slug]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Resource not found' });
    }
    return res.json(result.rows[0]);
  } catch (err) {
    const item = memoryResources.find(r => r.slug === slug || r.id == slug);
    if (!item) return res.status(404).json({ error: 'Resource not found' });
    return res.json(item);
  }
});

// ADMIN: Add Resource
router.post('/admin/resources', authenticateAdmin, async (req, res) => {
  const { title, category, summary, content, cover_image, author, media_url, is_featured, status } = req.body;

  if (!title || !summary) {
    return res.status(400).json({ error: 'Title and summary are required fields.' });
  }

  const slug = req.body.slug ? slugify(req.body.slug) : slugify(title);
  const cat = category || 'Blog';
  const itemStatus = status || 'published';
  const featured = Boolean(is_featured);

  try {
    const result = await query(
      `INSERT INTO resources (title, slug, category, summary, content, cover_image, author, media_url, is_featured, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10) RETURNING *`,
      [title, slug, cat, summary, content || '', cover_image || '', author || 'Encegen Team', media_url || '', featured, itemStatus]
    );
    return res.status(201).json({ message: 'Resource created successfully', resource: result.rows[0] });
  } catch (err) {
    console.warn('DB insert failed, adding to memoryResources store:', err.message);
    const newResource = {
      id: memoryResources.length ? Math.max(...memoryResources.map(r => r.id)) + 1 : 1,
      title,
      slug,
      category: cat,
      summary,
      content: content || '',
      cover_image: cover_image || '',
      author: author || 'Encegen Team',
      media_url: media_url || '',
      is_featured: featured,
      status: itemStatus,
      created_at: new Date().toISOString()
    };
    memoryResources.unshift(newResource);
    return res.status(201).json({ message: 'Resource created successfully', resource: newResource });
  }
});

// ADMIN: Update Resource
router.put('/admin/resources/:id', authenticateAdmin, async (req, res) => {
  const { id } = req.params;
  const { title, slug, category, summary, content, cover_image, author, media_url, is_featured, status } = req.body;

  const itemSlug = slug ? slugify(slug) : (title ? slugify(title) : null);

  try {
    const result = await query(
      `UPDATE resources SET
         title = COALESCE($1, title),
         slug = COALESCE($2, slug),
         category = COALESCE($3, category),
         summary = COALESCE($4, summary),
         content = COALESCE($5, content),
         cover_image = COALESCE($6, cover_image),
         author = COALESCE($7, author),
         media_url = COALESCE($8, media_url),
         is_featured = COALESCE($9, is_featured),
         status = COALESCE($10, status),
         updated_at = CURRENT_TIMESTAMP
       WHERE id = $11 RETURNING *`,
      [title, itemSlug, category, summary, content, cover_image, author, media_url, is_featured !== undefined ? Boolean(is_featured) : null, status, id]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Resource not found' });
    }
    return res.json({ message: 'Resource updated successfully', resource: result.rows[0] });
  } catch (err) {
    const index = memoryResources.findIndex(r => r.id == id);
    if (index === -1) return res.status(404).json({ error: 'Resource not found' });

    memoryResources[index] = {
      ...memoryResources[index],
      title: title || memoryResources[index].title,
      slug: itemSlug || memoryResources[index].slug,
      category: category || memoryResources[index].category,
      summary: summary || memoryResources[index].summary,
      content: content !== undefined ? content : memoryResources[index].content,
      cover_image: cover_image !== undefined ? cover_image : memoryResources[index].cover_image,
      author: author || memoryResources[index].author,
      media_url: media_url !== undefined ? media_url : memoryResources[index].media_url,
      is_featured: is_featured !== undefined ? Boolean(is_featured) : memoryResources[index].is_featured,
      status: status || memoryResources[index].status,
      updated_at: new Date().toISOString()
    };
    return res.json({ message: 'Resource updated successfully', resource: memoryResources[index] });
  }
});

// ADMIN: Delete Resource
router.delete('/admin/resources/:id', authenticateAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    const result = await query('DELETE FROM resources WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Resource not found' });
    }
    return res.json({ message: 'Resource deleted successfully', id });
  } catch (err) {
    const index = memoryResources.findIndex(r => r.id == id);
    if (index === -1) return res.status(404).json({ error: 'Resource not found' });

    memoryResources.splice(index, 1);
    return res.json({ message: 'Resource deleted successfully', id });
  }
});

export default router;
