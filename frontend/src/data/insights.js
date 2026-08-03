export const CATEGORIES = [
  { key: 'all', label: 'All' },
  { key: 'blog', label: 'Blog', tagVar: '--tag-blog', actionLabel: 'Read' },
  { key: 'report', label: 'Reports', tagVar: '--tag-report', actionLabel: 'Download' },
  { key: 'customer-story', label: 'Customer Stories', tagVar: '--tag-customer-story', actionLabel: 'Read' },
  { key: 'webinar', label: 'Webinars', tagVar: '--tag-webinar', actionLabel: 'Watch' },
  { key: 'podcast', label: 'Podcasts', tagVar: '--tag-podcast', actionLabel: 'Listen' },
  { key: 'video', label: 'Videos', tagVar: '--tag-video', actionLabel: 'Watch' },
];

const CATEGORY_LABELS = {
  blog: 'BLOG',
  report: 'REPORT',
  'customer-story': 'CUSTOMER STORY',
  webinar: 'WEBINAR',
  podcast: 'PODCAST',
  video: 'VIDEO',
};

export function getCategoryMeta(key) {
  const category = CATEGORIES.find((c) => c.key === key);
  return {
    tag: CATEGORY_LABELS[key],
    tagVar: category?.tagVar ?? '--brand-purple',
    actionLabel: category?.actionLabel ?? 'Read',
  };
}

export const INSIGHTS = [
  {
    id: 1,
    category: 'blog',
    title: 'Why process mining is the missing layer in your AI stack',
    description:
      'Most enterprise AI initiatives skip the step that actually tells you where the value is. Here is what that costs you.',
    readTime: '6 min read',
    date: 'May 2025',
    topic: 'Process Mining',
    author: { initials: 'JC', name: 'Jordan Cole', role: 'Head of Content' },
    image: 'https://loremflickr.com/600/400/dataviz,analytics/all',
  },
  {
    id: 2,
    category: 'report',
    title: 'Benchmarking automation ROI across 300 enterprises',
    description:
      'A data-driven look at where automation investments pay off fastest, and where they quietly stall out.',
    readTime: '11 min read',
    date: 'April 2025',
    topic: 'Automation',
    author: { initials: 'PN', name: 'Priya Nair', role: 'CTO' },
    image: 'https://loremflickr.com/600/400/financedashboard,finance/all',
  },
  {
    id: 3,
    category: 'customer-story',
    title: 'How a global manufacturer cut order cycle time by 38%',
    description:
      'Inside the rollout that gave operations leaders real-time visibility into every step of the supply chain.',
    readTime: '7 min read',
    date: 'April 2025',
    topic: 'Manufacturing',
    author: { initials: 'MB', name: 'Marcus Böhm', role: 'Chief AI Officer' },
    image: 'https://loremflickr.com/600/400/airbus,aerospace/all',
  },
  {
    id: 4,
    category: 'webinar',
    title: 'Live teardown: building a finance ops control tower',
    description:
      'Watch our solutions team rebuild a finance close process live, from data ingestion to anomaly detection.',
    readTime: '42 min watch',
    date: 'March 2025',
    topic: 'Finance Ops',
    author: { initials: 'SC', name: 'Sophia Chen', role: 'Chief Revenue Officer' },
    image: 'https://loremflickr.com/600/400/controlroom,operations/all',
  },
  {
    id: 5,
    category: 'podcast',
    title: 'The operations floor is where AI strategy gets tested',
    description:
      'A conversation with three enterprise operations leaders on what separates real AI adoption from pilots.',
    readTime: '34 min listen',
    date: 'March 2025',
    topic: 'AI & Automation',
    author: { initials: 'AR', name: 'Alex Rivera', role: 'CEO & Co-Founder' },
    image: 'https://loremflickr.com/600/400/podcaststudio,microphone/all',
  },
  {
    id: 6,
    category: 'blog',
    title: 'Five signals your IT operations need process intelligence',
    description:
      'Ticket backlogs and incident sprawl are symptoms. Here is how to trace them back to the process root cause.',
    readTime: '5 min read',
    date: 'February 2025',
    topic: 'IT Operations',
    author: { initials: 'JC', name: 'Jordan Cole', role: 'Head of Content' },
    image: 'https://loremflickr.com/600/400/workflow,diagram/all',
  },
  {
    id: 7,
    category: 'video',
    title: 'Product tour: mapping a process in under ten minutes',
    description:
      'A walkthrough of how teams go from raw event logs to a live, explorable process map without writing code.',
    readTime: '9 min watch',
    date: 'February 2025',
    topic: 'Process Mining',
    author: { initials: 'PN', name: 'Priya Nair', role: 'CTO' },
    image: 'https://loremflickr.com/600/400/worldmap,globe/all',
  },
  {
    id: 8,
    category: 'customer-story',
    title: 'Cutting supply chain exceptions by half in one quarter',
    description:
      'How a logistics enterprise used real-time process visibility to catch disruptions before they cascaded.',
    readTime: '8 min read',
    date: 'January 2025',
    topic: 'Supply Chain',
    author: { initials: 'MB', name: 'Marcus Böhm', role: 'Chief AI Officer' },
    image: 'https://loremflickr.com/600/400/supplychain,logistics/all',
  },
  {
    id: 9,
    category: 'report',
    title: 'The state of enterprise AI governance in 2025',
    description:
      'Survey data from 500+ leaders on how governance, risk, and AI adoption are colliding inside large organizations.',
    readTime: '14 min read',
    date: 'January 2025',
    topic: 'AI & Automation',
    author: { initials: 'SC', name: 'Sophia Chen', role: 'Chief Revenue Officer' },
    image: 'https://loremflickr.com/600/400/boardroom,meeting/all',
  },
];
