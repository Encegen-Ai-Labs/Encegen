export interface TechStackItem {
  name: string
  role: string
}

export const ECOMMERCE_TECH_STACK: TechStackItem[] = [
  { name: 'Next.js', role: 'Frontend' },
  { name: 'React', role: 'Frontend' },
  { name: 'TypeScript', role: 'Frontend' },
  { name: 'TailwindCSS', role: 'Styling' },
  { name: 'Shopify Plus', role: 'E-commerce' },
  { name: 'WooCommerce', role: 'E-commerce' },
  { name: 'Medusa.js', role: 'E-commerce' },
  { name: 'Stripe', role: 'Payments' },
  { name: 'Vercel', role: 'Cloud' },
  { name: 'Cloudflare', role: 'CDN' },
  { name: 'AWS', role: 'Cloud' },
  { name: 'Lighthouse CI', role: 'Performance' },
  { name: 'Sanity CMS', role: 'Content' },
  { name: 'Contentful', role: 'Content' },
  { name: 'Figma', role: 'Design' },
  { name: 'Google Analytics', role: 'Analytics' },
]

export const CUSTOM_SOFTWARE_TECH_STACK: TechStackItem[] = [
  { name: 'React', role: 'Frontend' },
  { name: 'Next.js', role: 'Frontend' },
  { name: 'TypeScript', role: 'Frontend' },
  { name: 'Node.js', role: 'Backend' },
  { name: 'Python', role: 'Backend' },
  { name: 'FastAPI', role: 'Framework' },
  { name: 'PostgreSQL', role: 'Database' },
  { name: 'MongoDB', role: 'Database' },
  { name: 'Redis', role: 'Database' },
  { name: 'AWS', role: 'Cloud' },
  { name: 'Azure', role: 'Cloud' },
  { name: 'Docker', role: 'DevOps' },
  { name: 'Kubernetes', role: 'DevOps' },
  { name: 'GraphQL', role: 'API' },
  { name: 'Kafka', role: 'Streaming' },
  { name: 'Terraform', role: 'Infra' },
]
