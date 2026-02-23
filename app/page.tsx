import Hero from '@/components/home/Hero'
import PassSection from '@/components/home/PassSection'
import ActivitiesSection from '@/components/home/ActivitiesSection'
import PlanningTeaser from '@/components/home/PlanningTeaser'
import ContactInfo from '@/components/home/ContactInfo'
import Breadcrumb from '@/components/ui/Breadcrumb'

export default function HomePage() {
  return (
    <div className="container mx-auto px-4 sm:px-10 max-w-[1300px]">
      <Breadcrumb 
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'SOUSSE', active: true }
        ]} 
      />
      
      <Hero />
      
      <PassSection />
      
      <ActivitiesSection />
      
      <PlanningTeaser />
      
      <ContactInfo />
    </div>
  )
}