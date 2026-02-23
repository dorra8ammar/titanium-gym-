export default function ContactInfo() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 gap-8 py-12 border-t border-b border-border-subtle my-8">
      {/* Contact details */}
      <div className="bg-black-card p-8 rounded-xl border border-border-subtle">
        <h3 className="text-gold text-2xl font-medium mb-6">CONTACT</h3>
        
        <div className="space-y-4">
          <div className="flex items-start gap-4">
            <i className="fas fa-map-pin text-gold text-lg w-6 mt-1"></i>
            <span className="text-text-gray text-sm">
              RHRX+G7W Arafet en Face Banque Zitouna, Av. de Yasser Arafat, Sousse
            </span>
          </div>
          
          <div className="flex items-center gap-4">
            <i className="fas fa-envelope text-gold text-lg w-6"></i>
            <span className="text-text-gray text-sm">info@titanium-gym.com</span>
          </div>
          
          <div className="flex items-center gap-4">
            <i className="fas fa-phone-alt text-gold text-lg w-6"></i>
            <span className="text-text-gray text-sm">36 013 060</span>
          </div>
          
          <div className="flex items-center gap-4">
            <i className="fas fa-user text-gold text-lg w-6"></i>
            <span className="text-text-gray text-sm">Accueil sur place</span>
          </div>
        </div>
      </div>

      {/* Hours */}
      <div className="bg-black-card p-8 rounded-xl border border-border-subtle">
        <h3 className="text-gold text-2xl font-medium mb-6">HORAIRES</h3>
        
        <div className="space-y-4">
          <div className="flex justify-between items-center pb-3 border-b border-gold-dim/10">
            <span className="text-text-offwhite font-medium">Lundi – Vendredi</span>
            <span className="text-gold">6h – 22h</span>
          </div>
          
          <div className="flex justify-between items-center pb-3 border-b border-gold-dim/10">
            <span className="text-text-offwhite font-medium">Samedi</span>
            <span className="text-gold">7h – 18h</span>
          </div>
          
          <div className="flex justify-between items-center">
            <span className="text-text-offwhite font-medium">Dimanche</span>
            <span className="text-gold">7h – 18h</span>
          </div>
        </div>
      </div>
    </section>
  )
}