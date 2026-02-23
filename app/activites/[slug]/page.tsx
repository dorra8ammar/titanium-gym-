import { activitesData } from '@/lib/data/activites'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'

interface Props {
  params: {
    slug: string
  }
}

export default function ActiviteDetailPage({ params }: Props) {
  // Récupérer l'activité
  const activite = activitesData[params.slug]
  
  // Si l'activité n'existe pas → 404
  if (!activite) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 sm:px-10 max-w-[1300px] py-8" style={{ backgroundColor: '#08080C', color: '#F0F0F2' }}>
      {/* Fil d'Ariane simple */}
      <div style={{ padding: '20px 0', fontSize: '0.75rem', color: '#90909A', borderBottom: '1px solid rgba(255,215,0,0.08)', marginBottom: '20px', textTransform: 'uppercase' }}>
        <Link href="/" style={{ color: '#B8B8C0', textDecoration: 'none' }}>Accueil</Link>
        <i className="fas fa-chevron-right" style={{ margin: '0 8px', color: 'rgba(255,215,0,0.4)', fontSize: '0.6rem' }}></i>
        <Link href="/activites" style={{ color: '#B8B8C0', textDecoration: 'none' }}>Activités</Link>
        <i className="fas fa-chevron-right" style={{ margin: '0 8px', color: 'rgba(255,215,0,0.4)', fontSize: '0.6rem' }}></i>
        <span style={{ color: '#FFD700' }}>{activite.titre}</span>
      </div>

      {/* Contenu principal */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '60px', padding: '60px 0' }}>
        {/* Image */}
        <div style={{ borderRadius: '24px', overflow: 'hidden', border: '1px solid rgba(255,215,0,0.08)', height: '450px' }}>
          <img 
            src={activite.image} 
            alt={activite.titre}
            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
          />
        </div>

        {/* Infos */}
        <div>
          <div style={{ color: '#FFD700', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '3px', marginBottom: '15px' }}>
            {activite.categorie}
          </div>
          <h1 style={{ fontSize: '2.8rem', fontWeight: '600', color: '#FFFFFF', marginBottom: '25px' }}>
            {activite.titre}
          </h1>

          {/* Métadonnées */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: '1fr 1fr', 
            gap: '25px', 
            background: '#121216', 
            padding: '25px', 
            borderRadius: '16px', 
            border: '1px solid rgba(255,215,0,0.08)',
            marginBottom: '35px'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <i className="fas fa-clock" style={{ color: '#FFD700', fontSize: '1.3rem', width: '30px' }}></i>
              <div>
                <div style={{ fontSize: '0.65rem', color: '#90909A', textTransform: 'uppercase' }}>Durée</div>
                <div style={{ fontSize: '1rem', color: '#FFFFFF' }}>{activite.duree}</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <i className="fas fa-dumbbell" style={{ color: '#FFD700', fontSize: '1.3rem', width: '30px' }}></i>
              <div>
                <div style={{ fontSize: '0.65rem', color: '#90909A', textTransform: 'uppercase' }}>Matériel</div>
                <div style={{ fontSize: '1rem', color: '#FFFFFF' }}>{activite.materiel}</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <i className="fas fa-chart-line" style={{ color: '#FFD700', fontSize: '1.3rem', width: '30px' }}></i>
              <div>
                <div style={{ fontSize: '0.65rem', color: '#90909A', textTransform: 'uppercase' }}>Intensité</div>
                <div style={{ fontSize: '1rem', color: '#FFFFFF' }}>{activite.intensite}</div>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
              <i className="fas fa-users" style={{ color: '#FFD700', fontSize: '1.3rem', width: '30px' }}></i>
              <div>
                <div style={{ fontSize: '0.65rem', color: '#90909A', textTransform: 'uppercase' }}>Pour qui ?</div>
                <div style={{ fontSize: '1rem', color: '#FFFFFF' }}>{activite.pourqui}</div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#FFD700', fontSize: '1.1rem', fontWeight: '500', marginBottom: '15px' }}>DESCRIPTION</h3>
            <p style={{ color: '#B8B8C0', fontSize: '0.85rem', lineHeight: '1.7' }}>{activite.description}</p>
          </div>

          {/* Bienfaits */}
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#FFD700', fontSize: '1.1rem', fontWeight: '500', marginBottom: '15px' }}>BIENFAITS</h3>
            <ul style={{ listStyle: 'none', padding: 0 }}>
              {activite.bienfaits.map((bienfait, index) => (
                <li key={index} style={{ display: 'flex', alignItems: 'center', gap: '12px', color: '#B8B8C0', fontSize: '0.85rem', marginBottom: '12px' }}>
                  <i className="fas fa-check-circle" style={{ color: '#FFD700', fontSize: '0.8rem' }}></i>
                  {bienfait}
                </li>
              ))}
            </ul>
          </div>

          {/* Recommandations */}
          <div style={{ marginBottom: '30px' }}>
            <h3 style={{ color: '#FFD700', fontSize: '1.1rem', fontWeight: '500', marginBottom: '15px' }}>RECOMMANDATIONS</h3>
            <p style={{ color: '#B8B8C0', fontSize: '0.85rem', lineHeight: '1.7' }}>{activite.recommandations}</p>
          </div>

          {/* Bouton retour */}
          <Link 
            href="/activites"
            style={{ 
              display: 'inline-flex', 
              alignItems: 'center', 
              gap: '10px', 
              color: '#FFD700', 
              fontSize: '0.75rem', 
              textTransform: 'uppercase', 
              letterSpacing: '2px', 
              padding: '12px 0', 
              borderBottom: '1px solid rgba(255,215,0,0.2)', 
              textDecoration: 'none'
            }}
          >
            <i className="fas fa-arrow-left"></i> RETOUR AUX ACTIVITÉS
          </Link>
        </div>
      </div>

      {/* Vous aimerez aussi */}
      {activite.aussi && activite.aussi.length > 0 && (
        <div style={{ padding: '60px 0', borderTop: '1px solid rgba(255,215,0,0.08)' }}>
          <h2 style={{ fontSize: '1.6rem', fontWeight: '500', color: '#FFFFFF', marginBottom: '30px' }}>VOUS AIMEREZ AUSSI...</h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '30px' }}>
            {activite.aussi.map(id => {
              const autre = activitesData[id]
              return autre ? (
                <div key={id} style={{ background: '#121216', borderRadius: '20px', padding: '25px', border: '1px solid rgba(255,215,0,0.08)' }}>
                  <h4 style={{ color: '#FFD700', fontSize: '1.2rem', fontWeight: '500', marginBottom: '10px' }}>{autre.titre}</h4>
                  <p style={{ color: '#90909A', fontSize: '0.8rem', marginBottom: '15px' }}>{autre.categorie} • {autre.duree}</p>
                  <Link 
                    href={`/activites/${autre.id}`}
                    style={{ color: '#FFD700', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '2px', borderBottom: '1px solid rgba(255,215,0,0.2)', paddingBottom: '4px', textDecoration: 'none' }}
                  >
                    DÉCOUVRIR
                  </Link>
                </div>
              ) : null
            })}
          </div>
        </div>
      )}
    </div>
  )
}