import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';
import bcrypt from 'bcryptjs';
import { pool, query } from './db.js';
import dotenv from 'dotenv';

dotenv.config();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export async function initDb() {
  try {
    console.log('⚡ Initializing Database tables...');
    const schemaPath = path.join(__dirname, 'schema.sql');
    const sql = fs.readFileSync(schemaPath, 'utf8');

    await query(sql);
    console.log('✅ Tables created/verified successfully.');

    // Check if admin user exists, if not seed default admin
    const adminEmail = process.env.ADMIN_EMAIL || 'admin@encegen.com';
    const adminPassword = process.env.ADMIN_PASSWORD || 'admin123';

    const existingAdmin = await query('SELECT * FROM admin_users WHERE email = $1', [adminEmail]);
    if (existingAdmin.rows.length === 0) {
      const hashedPassword = await bcrypt.hash(adminPassword, 10);
      await query(
        'INSERT INTO admin_users (email, password_hash) VALUES ($1, $2)',
        [adminEmail, hashedPassword]
      );
      console.log(`👤 Default admin user created (${adminEmail})`);
    } else {
      console.log(`👤 Admin user (${adminEmail}) already exists.`);
    }
    // Seed default insights if table is empty
    try {
      const insightsCount = await query('SELECT COUNT(*) FROM insights');
      if (parseInt(insightsCount.rows[0].count, 10) === 0) {
        const seedInsights = [
          {
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
            hue: 190,
            is_featured: false,
            status: "published"
          },
          {
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
            hue: 30,
            is_featured: false,
            status: "published"
          },
          {
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
            hue: 300,
            is_featured: false,
            status: "published"
          },
          {
            title: "2026 Process Intelligence Benchmark Study: Finance Edition",
            slug: "2026-process-intelligence-benchmark-finance",
            category: "Reports",
            description: "Benchmarking finance process maturity across 500+ CFOs - AP, O2C, and treasury process insights.",
            content: "This comprehensive benchmark study evaluates standard invoice reconciliation variance across Fortune 500 finance departments and provides actionable automation frameworks.",
            meta: "Q1 2026 · Finance",
            author: "Tom Müller",
            author_role: "Research Director",
            action_label: "Download →",
            media_url: "",
            art_variant: "purple",
            hue: 255,
            is_featured: true,
            status: "published"
          },
          {
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
            hue: 215,
            is_featured: false,
            status: "published"
          },
          {
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
            hue: 255,
            is_featured: false,
            status: "published"
          }
        ];

        for (const item of seedInsights) {
          await query(
            `INSERT INTO insights (title, slug, category, description, content, meta, author, author_role, action_label, media_url, art_variant, hue, is_featured, status)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12, $13, $14)`,
            [item.title, item.slug, item.category, item.description, item.content, item.meta, item.author, item.author_role, item.action_label, item.media_url, item.art_variant, item.hue, item.is_featured, item.status]
          );
        }
        console.log('💡 Seeded initial insights items.');
      }
    } catch (e) {
      console.warn('Insights table seeding skipped:', e.message);
    }

    // Seed default resources if table is empty
    try {
      const resourcesCount = await query('SELECT COUNT(*) FROM resources');
      if (parseInt(resourcesCount.rows[0].count, 10) === 0) {
        const seedResources = [
          {
            title: "The Future of AI Automation & Autonomous Workflows",
            slug: "the-future-of-ai-automation",
            category: "Blog",
            summary: "Discover how multi-agent systems and foundational models are reshaping modern business processes.",
            content: "Enterprise AI is rapidly shifting from single-turn chat interfaces to full autonomous workflows. In this article, we explore how Encegen builds secure, high-precision agent networks for enterprise operations.\n\nKey takeaways:\n1. Autonomous tool calling reduces human workload by 70%.\n2. Multi-agent coordination handles complex multi-step reasoning.\n3. Real-time observability ensures compliance and safety.",
            cover_image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1200&q=80",
            author: "Encegen AI Research",
            media_url: "",
            is_featured: true,
            status: "published"
          },
          {
            title: "Building Scalable Cloud Microservices for Enterprise AI",
            slug: "building-scalable-cloud-microservices",
            category: "Documentation",
            summary: "Best practices for architecting resilient REST & GraphQL APIs to handle high-concurrency LLM inference traffic.",
            content: "Scaling AI inference requires modular backend microservices, intelligent request queuing, and persistent caching strategies. Learn how to optimize throughput while minimizing cloud latency.\n\nTopics covered:\n- Asynchronous queueing with Redis & BullMQ\n- Model quantization techniques\n- Auto-scaling microservice clusters",
            cover_image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=1200&q=80",
            author: "Tech Lead @ Encegen",
            media_url: "",
            is_featured: false,
            status: "published"
          },
          {
            title: "Executive Webinar: Accelerating Process Automation in 2026",
            slug: "executive-webinar-process-automation",
            category: "Webinars",
            summary: "On-demand masterclass on identifying top ROI automation targets across ERP workflows.",
            content: "Join Encegen architects as we break down concrete enterprise case studies and live benchmarks on automating legacy systems.",
            cover_image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=1200&q=80",
            author: "Encegen Solutions Team",
            media_url: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
            is_featured: false,
            status: "published"
          },
          {
            title: "Global Enterprise Process Intelligence Report",
            slug: "global-enterprise-process-intelligence-report",
            category: "Reports",
            summary: "Comprehensive market benchmark on AI integration speed and business impact metrics.",
            content: "Our annual research survey capturing insights from over 800 IT leaders on agentic systems, security parameters, and measurable productivity gains.",
            cover_image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80",
            author: "Market Insights Group",
            media_url: "",
            is_featured: false,
            status: "published"
          }
        ];

        for (const resItem of seedResources) {
          await query(
            `INSERT INTO resources (title, slug, category, summary, content, cover_image, author, media_url, is_featured, status)
             VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10)`,
            [resItem.title, resItem.slug, resItem.category, resItem.summary, resItem.content, resItem.cover_image, resItem.author, resItem.media_url, resItem.is_featured, resItem.status]
          );
        }
        console.log('📚 Seeded initial resources items.');
      }
    } catch (e) {
      console.warn('Resources table seeding skipped:', e.message);
    }
  } catch (err) {
    console.warn('⚠️ Database connection warning during init:', err.message);
    console.warn('Backend will continue to start. Ensure PostgreSQL service is running when performing database queries.');
  }
}

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  initDb().then(() => pool.end());
}
