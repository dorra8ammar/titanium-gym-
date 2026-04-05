import Hero from '@/components/home/Hero'
import PassSection from '@/components/home/PassSection'
import ActivitiesSection from '@/components/home/ActivitiesSection'
import PlanningTeaser from '@/components/home/PlanningTeaser'
import ContactInfo from '@/components/home/ContactInfo'
import Breadcrumb from '@/components/ui/Breadcrumb'

// ✅ MÉTADONNÉES SEO AJOUTÉES
export const metadata = {
  title: 'Titanium Gym Sousse | La plus grande salle de sport 2500m² avec Sauna',
  description: 'Titanium Gym à Sousse : plateau musculation 500m², cardio, cours collectifs Bodypump RPM Yoga, Vaporium et Sauna inclus. BLUE PASS 24/7. Ouvert de 6h à 22h.',
  keywords: 'Titanium Gym, salle de sport Sousse, musculation Sousse, cours collectifs Sousse, Bodypump Sousse, salle de sport Tunisie, BLUE PASS, YELLOW PASS',
  openGraph: {
    title: 'Titanium Gym Sousse | Salle de sport haut de gamme',
    description: 'Rejoignez la plus grande salle de sport à Sousse : 2500m², équipements dernier cri, sauna inclus. Formules sans engagement.',
    siteName: 'Titanium Gym',
    locale: 'fr_TN',
    type: 'website',
  },
  alternates: {
    canonical: 'https://titanium-gym-xi.vercel.app/',
  },
}

export default function HomePage() {
  return (
    <>
      {/* Données structurées JSON-LD pour le référencement local */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Titanium Gym",
            "image": "https://titanium-gym-xi.vercel.app/marsa.avif",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "Av. de Yasser Arafat",
              "addressLocality": "Sousse",
              "addressCountry": "TN"
            },
            "geo": {
              "@type": "GeoCoordinates",
              "latitude": 35.8256,
              "longitude": 10.6367
            },
            "openingHours": [
              "Mo-Fr 06:00-22:00",
              "Sa 07:00-18:00",
              "Su 07:00-18:00"
            ],
            "telephone": "+216 36 013 060",
            "priceRange": "$$",
            "sameAs": [
              "https://www.facebook.com/titaniumgym",
              "https://www.instagram.com/titaniumgym"
            ]
          })
        }}
      />
      
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
        
        {/* SECTION FAQ AJOUTÉE POUR LE SEO */}
        <section className="py-12 mt-8 border-t border-white/10">
          <h2 className="text-2xl font-semibold text-white mb-6">Questions fréquentes sur Titanium Gym Sousse</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white/5 p-5 rounded-xl border border-white/10">
              <h3 className="text-gold font-semibold mb-2">Quels sont les horaires d'ouverture ?</h3>
              <p className="text-text-gray text-sm">Titanium Gym est ouvert du lundi au vendredi de 6h à 22h, le samedi et dimanche de 7h à 18h. Accès 24/7 avec la formule BLUE PASS.</p>
            </div>
            
            <div className="bg-white/5 p-5 rounded-xl border border-white/10">
              <h3 className="text-gold font-semibold mb-2">Où se trouve Titanium Gym à Sousse ?</h3>
              <p className="text-text-gray text-sm">Notre salle est située sur l'Avenue de Yasser Arafat, à Sousse, en face de la Banque Zitouna. Stationnement facile disponible.</p>
            </div>
            
            <div className="bg-white/5 p-5 rounded-xl border border-white/10">
              <h3 className="text-gold font-semibold mb-2">Quels cours collectifs sont proposés ?</h3>
              <p className="text-text-gray text-sm">Nous proposons Bodypump, RPM, Bodycombat, Yoga, Zumba, Cross training, TRX et HBX-Boxing. Tous les cours sont inclus dans l'abonnement.</p>
            </div>
            
            <div className="bg-white/5 p-5 rounded-xl border border-white/10">
              <h3 className="text-gold font-semibold mb-2">Le sauna et le Vaporium sont-ils inclus ?</h3>
              <p className="text-text-gray text-sm">Oui, le Vaporium et le Sauna sont inclus dans toutes nos formules, sans supplément.</p>
            </div>
            
            <div className="bg-white/5 p-5 rounded-xl border border-white/10">
              <h3 className="text-gold font-semibold mb-2">Quel est le prix de l'abonnement ?</h3>
              <p className="text-text-gray text-sm">Nous proposons deux formules : BLUE PASS (accès 24/7 illimité) et YELLOW PASS (accès heures creuses). Contactez-nous pour les tarifs actuels.</p>
            </div>
            
            <div className="bg-white/5 p-5 rounded-xl border border-white/10">
              <h3 className="text-gold font-semibold mb-2">Y a-t-il un parking ?</h3>
              <p className="text-text-gray text-sm">Oui, un parking est disponible pour les membres Titanium Gym.</p>
            </div>
          </div>
        </section>
      </div>
    </>
  )
}