import Hero from '../components/sections/Hero'
import CredibilityBar from '../components/sections/CredibilityBar'
import WhatIDo from '../components/sections/WhatIDo'
import FeaturedAchievement from '../components/sections/FeaturedAchievement'
import CurrentFocus from '../components/sections/CurrentFocus'
import BlogPreview from '../components/sections/BlogPreview'
import ContactCTA from '../components/sections/ContactCTA'

export default function HomePage() {
  return (
    <>
      <Hero />
      <CredibilityBar />
      <WhatIDo />
      <FeaturedAchievement />
      <CurrentFocus />
      <BlogPreview />
      <ContactCTA />
    </>
  )
}
