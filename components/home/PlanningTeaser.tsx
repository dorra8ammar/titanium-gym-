import Link from 'next/link'

export default function PlanningTeaser() {
  return (
    <div className="bg-black-card p-10 rounded-2xl my-8 flex flex-col md:flex-row justify-between items-center border border-border-subtle">
      <div className="text-center md:text-left mb-6 md:mb-0">
        <h3 className="text-2xl font-medium text-white mb-2">PLANNING DES COURS</h3>
        <p className="text-text-gray text-sm">Bodypump, RPM, Bodycombat, Yoga, Zumba, Cross training, TRX, HBX-Boxing...</p>
      </div>
      <Link 
        href="/planning"
        className="bg-transparent text-gold px-8 py-3 rounded-full text-xs uppercase tracking-wider border border-border-gold-light hover:bg-gold-soft transition-all"
      >
        VOIR LE PLANNING
      </Link>
    </div>
  )
}