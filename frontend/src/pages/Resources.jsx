import { useState } from 'react';
import ResourcesHero from '../components/ResourcesHero/ResourcesHero';
import ResourcesFeatured from '../components/ResourcesFeatured/ResourcesFeatured';
import InsightCard from '../components/InsightCard/InsightCard';
import ResourcesDocsCta from '../components/ResourcesDocsCta/ResourcesDocsCta';
import NewsletterCta from '../components/NewsletterCta/NewsletterCta'; // Adjust path if needed
import '../components/InsightsFilterBar/InsightsFilterBar.css'; // Reusing your existing pill styles

// Mock data structured perfectly for your InsightCard component
const GRID_DATA = [
  {
    id: 1,
    title: 'Unlocking hidden value in supply chain operations',
    description: 'Learn how top logistics firms are using process intelligence to eliminate bottlenecks.',
    readTime: '6 min read',
    date: 'Aug 12',
    topic: 'Supply Chain',
    category: 'webinar', 
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    author: { initials: 'MB', name: 'Maya Bishop', role: 'Data Scientist' }
  },
  {
    id: 2,
    title: 'Unlocking hidden value in supply chain operations',
    description: 'Learn how top logistics firms are using process intelligence to eliminate bottlenecks.',
    readTime: '8 min read',
    date: 'Aug 10',
    topic: 'Logistics',
    category: 'report',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
    author: { initials: 'MB', name: 'Maya Bishop', role: 'Data Scientist' }
  },
  {
    id: 3,
    title: 'Unlocking hidden value in supply chain operations',
    description: 'Learn how top logistics firms are using process intelligence to eliminate bottlenecks.',
    readTime: '11 min read',
    date: 'Aug 05',
    topic: 'Operations',
    category: 'blog',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
    author: { initials: 'MB', name: 'Maya Bishop', role: 'Data Scientist' }
  },
  {
    id: 4,
    title: 'Unlocking hidden value in supply chain operations',
    description: 'Learn how top logistics firms are using process intelligence to eliminate bottlenecks.',
    readTime: '6 min read',
    date: 'Jul 28',
    topic: 'Supply Chain',
    category: 'webinar',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=600&q=80',
    author: { initials: 'MB', name: 'Maya Bishop', role: 'Data Scientist' }
  },
  {
    id: 5,
    title: 'Unlocking hidden value in supply chain operations',
    description: 'Learn how top logistics firms are using process intelligence to eliminate bottlenecks.',
    readTime: '8 min read',
    date: 'Jul 22',
    topic: 'Logistics',
    category: 'report',
    image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&q=80',
    author: { initials: 'MB', name: 'Maya Bishop', role: 'Data Scientist' }
  },
  {
    id: 6,
    title: 'Unlocking hidden value in supply chain operations',
    description: 'Learn how top logistics firms are using process intelligence to eliminate bottlenecks.',
    readTime: '11 min read',
    date: 'Jul 15',
    topic: 'Operations',
    category: 'blog',
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?w=600&q=80',
    author: { initials: 'MB', name: 'Maya Bishop', role: 'Data Scientist' }
  }
];

const TABS = ['All', 'Blog', 'Webinars', 'Reports', 'Documentation'];

export default function ResourcesPage() {
  const [activeTab, setActiveTab] = useState('All');

  return (
    <div className="page-resources">
      <ResourcesHero />
      <ResourcesFeatured />
      
      {/* Section 3: The Filtered Grid */}
      <section style={{ padding: '40px 0 100px', background: '#faf9fc' }}>
        <div className="container">
          
          {/* Custom Filter Bar mapped from Figma */}
          <div className="insights-filter-pills" style={{ marginBottom: '40px' }}>
            {TABS.map(tab => (
              <button
                key={tab}
                className={`insights-filter-pill ${activeTab === tab ? 'active' : ''}`}
                onClick={() => setActiveTab(tab)}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Grid reusing your existing InsightCard */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(340px, 1fr))', gap: '30px' }}>
            {GRID_DATA.map(item => (
              <InsightCard key={item.id} insight={item} />
            ))}
          </div>

        </div>
      </section>

      <ResourcesDocsCta />
      <NewsletterCta />
    </div>
  );
}