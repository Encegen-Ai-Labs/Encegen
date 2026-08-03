import { useState } from 'react'
import InsightsHero from '../components/InsightsHero/InsightsHero'
import FeaturedReport from '../components/FeaturedReport/FeaturedReport'
import InsightsFilterBar from '../components/InsightsFilterBar/InsightsFilterBar'
import InsightsGrid from '../components/InsightsGrid/InsightsGrid'
import BrowseByTopic from '../components/BrowseByTopic/BrowseByTopic'
import NewsletterCta from '../components/NewsletterCta/NewsletterCta'

export default function Insights() {
  const [activeCategory, setActiveCategory] = useState('all')
  const [sortBy, setSortBy] = useState('latest')

  return (
    <>
      <InsightsHero />
      <FeaturedReport />
      <InsightsFilterBar
        activeCategory={activeCategory}
        onCategoryChange={setActiveCategory}
        sortBy={sortBy}
        onSortChange={setSortBy}
      />
      <InsightsGrid activeCategory={activeCategory} sortBy={sortBy} />
      <BrowseByTopic />
      <NewsletterCta />
    </>
  )
}
