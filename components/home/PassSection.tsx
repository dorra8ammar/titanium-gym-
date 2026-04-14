export default function PassSection() {
  return (
    <section className="bg-black-soft py-16 rounded-t-[40px] border-t border-border-subtle -mx-4 sm:-mx-10 px-4 sm:px-10">
      <div className="max-w-325 mx-auto">
        <h2 className="section-title text-2xl font-medium text-white relative inline-block mb-8 after:content-[''] after:absolute after:bottom-[-8px] after:left-0 after:w-[60px] after:h-[2px] after:bg-gold after:opacity-50">
          NOS FORMULES
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* BLUE PASS */}
          <div className="bg-black-card p-10 rounded-2xl border border-border-subtle hover:border-border-gold-light transition-all relative">
            <span className="absolute top-6 right-6 text-gold text-xs tracking-wider border border-gold-dim px-3 py-1 rounded-full">
              PREMIUM
            </span>
            <h3 className="text-gold text-3xl font-medium mb-6">BLUE PASS</h3>
            <ul className="space-y-4">
              {[
                "Accès illimité 24/7",
                "Cours collectifs illimités",
                "Vaporium & Sauna",
                "Coaching personnalisé",
                "Sans engagement"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-text-gray text-sm">
                  <i className="fas fa-check-circle text-gold text-sm"></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* YELLOW PASS */}
          <div className="bg-black-card p-10 rounded-2xl border border-border-subtle hover:border-border-gold-light transition-all">
            <h3 className="text-gold text-3xl font-medium mb-6">YELLOW PASS</h3>
            <ul className="space-y-4">
              {[
                "Accès heures creuses",
                "Cours collectifs",
                "Vaporium & Sauna",
                "1 séance coaching/mois",
                "Tarif préférentiel"
              ].map((item, index) => (
                <li key={index} className="flex items-center gap-3 text-text-gray text-sm">
                  <i className="fas fa-check-circle text-gold text-sm"></i>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}