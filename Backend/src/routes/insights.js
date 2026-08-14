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

// In-memory fallback dataset for Insights
let memoryInsights = [
  {
    id: 1,
    title: "How AI Is Redefining What's Possible in Supply Chain Management",
    slug: "how-ai-is-redefining-supply-chain",
    category: "Blog",
    description: "AI-powered process mining is transforming how global supply chains respond to disruption and demand shifts.",
    content: "Modern supply chain operations require immediate responsiveness. By combining neural forecasting with continuous process telemetry, enterprise supply leaders can detect bottlenecks 14 days before delivery impact. Encegen's agent network automatically surfaces route re-allocations and mitigates inventory shortfalls.",
    meta: "8 min · May 2025 · Supply Chain",
    author: "Sarah Chen",
    author_role: "Principal Analyst",
    action_label: "Read →",
    media_url: "",
    art_variant: "cyan",
    cover_image: "",
    hue: 190,
    is_featured: false,
    status: "published",
    created_at: new Date().toISOString()
  },
  {
    id: 2,
    title: "Inside Airbus: A Year of Process Transformation with Encegen",
    slug: "inside-airbus-process-transformation",
    category: "Customer Stories",
    description: "How Airbus deployed Encegen across 14 countries to achieve end-to-end visibility in their MRO processes.",
    content: "Airbus operational engineers faced siloed tracking across multi-tier aerospace suppliers. With Encegen's distributed intelligence platform, cycle times across MRO facilities dropped by 38% within the first two quarters of deployment.",
    meta: "15 min · April 2025 · Customer Story",
    author: "Marcus Brandt",
    author_role: "Senior Editor",
    action_label: "Read →",
    media_url: "",
    art_variant: "orange",
    cover_image: "",
    hue: 30,
    is_featured: false,
    status: "published",
    created_at: new Date().toISOString()
  },
  {
    id: 3,
    title: "Process Mining at Scale: Lessons from 100 Enterprise Deployments",
    slug: "process-mining-at-scale-100-deployments",
    category: "Webinars",
    description: "Key patterns from 100 real-world deployments – what works, what doesn't, and how to scale process mining.",
    content: "Watch our exclusive engineering deep dive exploring enterprise architectural anti-patterns, data ingestion pipelines, and how to scale autonomous process triggers without downtime.",
    meta: "52 min · On-Demand · Process Mining",
    author: "Lisa Park",
    author_role: "Solutions Architect",
    action_label: "Watch →",
    media_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    art_variant: "magenta",
    cover_image: "",
    hue: 300,
    is_featured: false,
    status: "published",
    created_at: new Date().toISOString()
  },
  {
    id: 4,
    title: "2026 Process Intelligence Benchmark Study: Finance Edition",
    slug: "2026-process-intelligence-benchmark-finance",
    category: "Reports",
    description: "Benchmarking finance process maturity across 500+ CFOs - AP, O2C, and treasury process insights.",
    content: "This comprehensive 40-page report evaluates standard invoice reconciliation variance across Fortune 500 finance departments and provides actionable automation frameworks.",
    meta: "38 pages · Q1 2026 · Finance",
    author: "Tom Müller",
    author_role: "Research Director",
    action_label: "Download →",
    media_url: "",
    art_variant: "purple",
    cover_image: "",
    hue: 255,
    is_featured: true,
    status: "published",
    created_at: new Date().toISOString()
  },
  {
    id: 5,
    title: "Ep. 47: Building an AI-First Operations Team from the Ground Up",
    slug: "ep-47-building-ai-first-operations-team",
    category: "Podcasts",
    description: "Our Chief AI Officer shares the playbook for building and scaling an AI-native operations team.",
    content: "In this podcast episode, Aisha Khan sits down with enterprise technology leaders to break down how to upskill engineering squads and align cross-functional teams around AI agent workflows.",
    meta: "34 min · March 2026 · AI & Ops",
    author: "Aisha Khan",
    author_role: "Chief AI Officer",
    action_label: "Listen →",
    media_url: "https://soundcloud.com",
    art_variant: "blue",
    cover_image: "",
    hue: 215,
    is_featured: false,
    status: "published",
    created_at: new Date().toISOString()
  },
  {
    id: 6,
    title: "Platform Demo: Encegen AI Recommendations in Action",
    slug: "platform-demo-encegen-ai-recommendations",
    category: "Videos",
    description: "An 18-minute walkthrough of how Encegen AI surfaces and executes recommendations in real SAP environments.",
    content: "Watch our interactive product walkthrough demonstrating live SAP integration, automated data lineage discovery, and instant execution recommendations.",
    meta: "18 min · Product · Demo",
    author: "Noah Patel",
    author_role: "Product Manager",
    action_label: "Watch →",
    media_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    art_variant: "purple",
    cover_image: "",
    hue: 255,
    is_featured: false,
    status: "published",
    created_at: new Date().toISOString()
  },
  {
    id: 7,
    title: "The Hidden Cost of Manual AP Processes - and How to Fix It",
    slug: "hidden-cost-of-manual-ap-processes",
    category: "Blog",
    description: "Manual AP processing costs enterprises 12x more than automated workflows. Here is how to close the gap.",
    content: "Finance leaders often underestimate manual review friction. Integrating agentic audit triggers catches discrepancies before ERP posting, reducing costly human remediation loops.",
    meta: "6 min · March 2026 · Finance Ops",
    author: "James Rivera",
    author_role: "Finance Lead",
    action_label: "Read →",
    media_url: "",
    art_variant: "green",
    cover_image: "",
    hue: 150,
    is_featured: false,
    status: "published",
    created_at: new Date().toISOString()
  },
  {
    id: 8,
    title: "How Vodafone Cut Procurement Cycle Time by 45% in 90 Days",
    slug: "vodafone-procurement-cycle-time-case-study",
    category: "Customer Stories",
    description: "Vodafone's 90-day transformation: process mining + automation reduced procurement cycle time by 45%.",
    content: "Vodafone deployed autonomous supplier reconciliation across international business units, standardizing purchase orders and eliminating manual PO re-entries.",
    meta: "10 min · Feb 2026 · Procurement",
    author: "Elena Vasquez",
    author_role: "Customer Success",
    action_label: "Read →",
    media_url: "",
    art_variant: "cyan",
    cover_image: "",
    hue: 190,
    is_featured: false,
    status: "published",
    created_at: new Date().toISOString()
  },
  {
    id: 9,
    title: "Gartner Recognizes Encegen as a Leader in Process Mining - 2026",
    slug: "gartner-recognizes-encegen-leader",
    category: "Reports",
    description: "What the Gartner recognition means for the market and why process intelligence is now a board-level priority.",
    content: "Download the complimentary report excerpt to see why Gartner positioned Encegen as an industry leader in enterprise process mining and automated execution systems.",
    meta: "Analyst Report · 2026 · Gartner",
    author: "Rachel Stone",
    author_role: "Analyst Relations",
    action_label: "Download →",
    media_url: "",
    art_variant: "orange",
    cover_image: "",
    hue: 30,
    is_featured: false,
    status: "published",
    created_at: new Date().toISOString()
  }
];

// PUBLIC: Get all published insights
router.get('/insights', async (req, res) => {
  const { category, includeDrafts } = req.query;
  try {
    let sql = 'SELECT * FROM insights';
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
    console.warn('DB query failed, using in-memory insights:', err.message);
    let items = memoryInsights;
    if (includeDrafts !== 'true') {
      items = items.filter(i => i.status === 'published');
    }
    if (category && category !== 'All') {
      items = items.filter(i => i.category.toLowerCase() === category.toLowerCase());
    }
    return res.json(items);
  }
});

// PUBLIC: Get single insight by slug or ID
router.get('/insights/:slug', async (req, res) => {
  const { slug } = req.params;
  try {
    const result = await query('SELECT * FROM insights WHERE slug = $1 OR id::text = $1', [slug]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Insight not found' });
    }
    return res.json(result.rows[0]);
  } catch (err) {
    const item = memoryInsights.find(i => i.slug === slug || i.id == slug);
    if (!item) return res.status(404).json({ error: 'Insight not found' });
    return res.json(item);
  }
});

// ADMIN: Add Insight
router.post('/admin/insights', authenticateAdmin, async (req, res) => {
  const {
    title,
    category,
    description,
    content,
    meta,
    author,
    author_role,
    action_label,
    media_url,
    art_variant,
    cover_image,
    hue,
    is_featured,
    status
  } = req.body;

  if (!title || !description) {
    return res.status(400).json({ error: 'Title and description are required.' });
  }

  const slug = req.body.slug ? slugify(req.body.slug) : slugify(title);
  const cat = category || 'Blog';
  const action = action_label || (cat === 'Videos' || cat === 'Webinars' ? 'Watch →' : cat === 'Podcasts' ? 'Listen →' : cat === 'Reports' ? 'Download →' : 'Read →');
  const art = art_variant || 'cyan';
  const itemStatus = status || 'published';
  const featured = Boolean(is_featured);

  try {
    const result = await query(
      `INSERT INTO insights (title, slug, category, description, content, meta, author, author_role, action_label, media_url, art_variant, cover_image, hue, is_featured, status)
       VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14, $15) RETURNING *`,
      [
        title,
        slug,
        cat,
        description,
        content || '',
        meta || `${cat} · 2026`,
        author || 'Encegen Team',
        author_role || 'Analyst',
        action,
        media_url || '',
        art,
        cover_image || '',
        hue || 190,
        featured,
        itemStatus
      ]
    );
    return res.status(201).json({ message: 'Insight created successfully', insight: result.rows[0] });
  } catch (err) {
    console.warn('DB insert failed, adding to memoryInsights store:', err.message);
    const newInsight = {
      id: memoryInsights.length ? Math.max(...memoryInsights.map(i => i.id)) + 1 : 1,
      title,
      slug,
      category: cat,
      description,
      content: content || '',
      meta: meta || `${cat} · 2026`,
      author: author || 'Encegen Team',
      author_role: author_role || 'Analyst',
      action_label: action,
      media_url: media_url || '',
      art_variant: art,
      cover_image: cover_image || '',
      hue: hue || 190,
      is_featured: featured,
      status: itemStatus,
      created_at: new Date().toISOString()
    };
    memoryInsights.unshift(newInsight);
    return res.status(201).json({ message: 'Insight created successfully', insight: newInsight });
  }
});

// ADMIN: Update Insight
router.put('/admin/insights/:id', authenticateAdmin, async (req, res) => {
  const { id } = req.params;
  const {
    title,
    slug,
    category,
    description,
    content,
    meta,
    author,
    author_role,
    action_label,
    media_url,
    art_variant,
    cover_image,
    hue,
    is_featured,
    status
  } = req.body;

  const itemSlug = slug ? slugify(slug) : (title ? slugify(title) : null);

  try {
    const result = await query(
      `UPDATE insights SET
         title = COALESCE($1, title),
         slug = COALESCE($2, slug),
         category = COALESCE($3, category),
         description = COALESCE($4, description),
         content = COALESCE($5, content),
         meta = COALESCE($6, meta),
         author = COALESCE($7, author),
         author_role = COALESCE($8, author_role),
         action_label = COALESCE($9, action_label),
         media_url = COALESCE($10, media_url),
         art_variant = COALESCE($11, art_variant),
         cover_image = COALESCE($12, cover_image),
         hue = COALESCE($13, hue),
         is_featured = COALESCE($14, is_featured),
         status = COALESCE($15, status),
         updated_at = CURRENT_TIMESTAMP
       WHERE id = $16 RETURNING *`,
      [
        title,
        itemSlug,
        category,
        description,
        content,
        meta,
        author,
        author_role,
        action_label,
        media_url,
        art_variant,
        cover_image,
        hue,
        is_featured !== undefined ? Boolean(is_featured) : null,
        status,
        id
      ]
    );

    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Insight not found' });
    }
    return res.json({ message: 'Insight updated successfully', insight: result.rows[0] });
  } catch (err) {
    const index = memoryInsights.findIndex(i => i.id == id);
    if (index === -1) return res.status(404).json({ error: 'Insight not found' });

    memoryInsights[index] = {
      ...memoryInsights[index],
      title: title || memoryInsights[index].title,
      slug: itemSlug || memoryInsights[index].slug,
      category: category || memoryInsights[index].category,
      description: description || memoryInsights[index].description,
      content: content !== undefined ? content : memoryInsights[index].content,
      meta: meta || memoryInsights[index].meta,
      author: author || memoryInsights[index].author,
      author_role: author_role || memoryInsights[index].author_role,
      action_label: action_label || memoryInsights[index].action_label,
      media_url: media_url !== undefined ? media_url : memoryInsights[index].media_url,
      art_variant: art_variant || memoryInsights[index].art_variant,
      cover_image: cover_image !== undefined ? cover_image : memoryInsights[index].cover_image,
      hue: hue !== undefined ? hue : memoryInsights[index].hue,
      is_featured: is_featured !== undefined ? Boolean(is_featured) : memoryInsights[index].is_featured,
      status: status || memoryInsights[index].status,
      updated_at: new Date().toISOString()
    };
    return res.json({ message: 'Insight updated successfully', insight: memoryInsights[index] });
  }
});

// ADMIN: Delete Insight
router.delete('/admin/insights/:id', authenticateAdmin, async (req, res) => {
  const { id } = req.params;
  try {
    const result = await query('DELETE FROM insights WHERE id = $1 RETURNING *', [id]);
    if (result.rows.length === 0) {
      return res.status(404).json({ error: 'Insight not found' });
    }
    return res.json({ message: 'Insight deleted successfully', id });
  } catch (err) {
    const index = memoryInsights.findIndex(i => i.id == id);
    if (index === -1) return res.status(404).json({ error: 'Insight not found' });

    memoryInsights.splice(index, 1);
    return res.json({ message: 'Insight deleted successfully', id });
  }
});

export default router;
