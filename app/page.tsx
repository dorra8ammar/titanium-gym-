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
        {/* SECTION FAQ AVEC COULEURS */}
<section className="py-12 mt-8 border-t border-gold-dim/30">
  <h2 className="text-2xl md:text-3xl font-semibold text-white mb-3 text-center md:text-left">
    Questions fréquentes sur <span className="text-gold">Titanium Gym Sousse</span>
  </h2>
  <p className="text-text-gray mb-8 text-sm text-center md:text-left">
    Tout ce que vous devez savoir avant de rejoindre notre salle de sport
  </p>
  
  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
    {/* Question 1 - Horaires */}
    <div className="group bg-white/3 hover:bg-gold-min/10 p-5 rounded-xl border border-white/10 hover:border-gold-dim/50 transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-gold-min flex items-center justify-center flex-shrink-0 mt-0.5">
          <i className="fas fa-clock text-gold text-sm"></i>
        </div>
        <div>
          <h3 className="text-gold font-semibold mb-2 text-base">Quels sont les horaires d'ouverture ?</h3>
          <p className="text-text-gray text-sm leading-relaxed">Titanium Gym est ouvert du lundi au vendredi de <span className="text-gold">6h à 22h</span>, le samedi et dimanche de <span className="text-gold">7h à 18h</span>. Accès 24/7 avec la formule <span className="text-blue-400">BLUE PASS</span>.</p>
        </div>
      </div>
    </div>
    
    {/* Question 2 - Localisation */}
    <div className="group bg-white/3 hover:bg-gold-min/10 p-5 rounded-xl border border-white/10 hover:border-gold-dim/50 transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-gold-min flex items-center justify-center flex-shrink-0 mt-0.5">
          <i className="fas fa-map-marker-alt text-gold text-sm"></i>
        </div>
        <div>
          <h3 className="text-gold font-semibold mb-2 text-base">Où se trouve Titanium Gym à Sousse ?</h3>
          <p className="text-text-gray text-sm leading-relaxed">Notre salle est située sur l'<span className="text-gold">Avenue de Yasser Arafat</span>, à Sousse, en face de la Banque Zitouna. Stationnement facile disponible.</p>
        </div>
      </div>
    </div>
    
    {/* Question 3 - Cours collectifs */}
    <div className="group bg-white/3 hover:bg-gold-min/10 p-5 rounded-xl border border-white/10 hover:border-gold-dim/50 transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-gold-min flex items-center justify-center flex-shrink-0 mt-0.5">
          <i className="fas fa-fitness-center text-gold text-sm"></i>
        </div>
        <div>
          <h3 className="text-gold font-semibold mb-2 text-base">Quels cours collectifs sont proposés ?</h3>
          <p className="text-text-gray text-sm leading-relaxed">Nous proposons <span className="text-gold">Bodypump, RPM, Bodycombat, Yoga, Zumba, Cross training, TRX et HBX-Boxing</span>. Tous les cours sont inclus dans l'abonnement.</p>
        </div>
      </div>
    </div>
    
    {/* Question 4 - Sauna inclus */}
    <div className="group bg-white/3 hover:bg-gold-min/10 p-5 rounded-xl border border-white/10 hover:border-gold-dim/50 transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-gold-min flex items-center justify-center flex-shrink-0 mt-0.5">
          <i className="fas fa-hot-tub text-gold text-sm"></i>
        </div>
        <div>
          <h3 className="text-gold font-semibold mb-2 text-base">Le sauna et le Vaporium sont-ils inclus ?</h3>
          <p className="text-text-gray text-sm leading-relaxed">Oui, le <span className="text-gold">Vaporium et le Sauna sont inclus</span> dans toutes nos formules, sans supplément.</p>
        </div>
      </div>
    </div>
    
    {/* Question 5 - Prix */}
    <div className="group bg-white/3 hover:bg-gold-min/10 p-5 rounded-xl border border-white/10 hover:border-gold-dim/50 transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-gold-min flex items-center justify-center flex-shrink-0 mt-0.5">
          <i className="fas fa-tag text-gold text-sm"></i>
        </div>
        <div>
          <h3 className="text-gold font-semibold mb-2 text-base">Quel est le prix de l'abonnement ?</h3>
          <p className="text-text-gray text-sm leading-relaxed">Nous proposons deux formules : <span className="text-blue-400 font-medium">BLUE PASS</span> (accès 24/7 illimité) et <span className="text-yellow-400 font-medium">YELLOW PASS</span> (accès heures creuses). <span className="text-gold">Contactez-nous pour les tarifs actuels</span>.</p>
        </div>
      </div>
    </div>
    
    {/* Question 6 - Parking */}
    <div className="group bg-white/3 hover:bg-gold-min/10 p-5 rounded-xl border border-white/10 hover:border-gold-dim/50 transition-all duration-300 hover:-translate-y-1">
      <div className="flex items-start gap-3">
        <div className="w-8 h-8 rounded-full bg-gold-min flex items-center justify-center flex-shrink-0 mt-0.5">
          <i className="fas fa-parking text-gold text-sm"></i>
        </div>
        <div>
          <h3 className="text-gold font-semibold mb-2 text-base">Y a-t-il un parking ?</h3>
          <p className="text-text-gray text-sm leading-relaxed">Oui, un <span className="text-gold">parking est disponible</span> pour les membres Titanium Gym.</p>
        </div>
      </div>
    </div>
  </div>
</section>
      </div>
    </>
  )
}