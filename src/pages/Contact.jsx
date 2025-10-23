import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import './ContentPage.css'

const Contact = () => {
  const { t } = useLanguage()

  return (
    <div className="content-page">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="page-header"
      >
        <div className="container">
          <h1 className="page-title">{t.nav.contact}</h1>
        </div>
      </motion.div>

      <div className="container">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="content-section"
        >
          <h2 className="content-title">Зв'яжіться з нами</h2>
          <div className="content-text" style={{ textAlign: 'center', padding: '2rem 0' }}>
            <p style={{ fontSize: '1.25rem', marginBottom: '2rem' }}>
              Маєте питання або пропозиції? Зв'яжіться з нами через соціальні мережі!
            </p>
            <div style={{ display: 'flex', gap: '2rem', justifyContent: 'center', alignItems: 'center', flexWrap: 'wrap' }}>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem 2rem',
                  background: 'linear-gradient(135deg, #f09433 0%,#e6683c 25%,#dc2743 50%,#cc2366 75%,#bc1888 100%)',
                  color: 'white',
                  borderRadius: 'var(--radius-lg)',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  transition: 'transform 0.2s ease',
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/>
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
                </svg>
                Instagram
              </a>
              <a
                href="https://t.me/ecokharkiv"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  padding: '1rem 2rem',
                  background: 'linear-gradient(135deg, #0088cc 0%, #006699 100%)',
                  color: 'white',
                  borderRadius: 'var(--radius-lg)',
                  fontSize: '1.1rem',
                  fontWeight: '600',
                  transition: 'transform 0.2s ease',
                }}
                onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M21.198 4.614c.53-.223 1.046.244.86.778l-3.908 11.126c-.14.402-.552.635-.97.559a31.75 31.75 0 01-2.553-.591l-1.413 1.696a.667.667 0 01-1.147-.413l-.377-3.773-7.524-2.097c-.477-.134-.477-.841 0-.975L21.198 4.614z"/>
                </svg>
                Telegram
              </a>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default Contact
