import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import './ContentPage.css'

const Air = () => {
  const { t } = useLanguage()

  return (
    <div className="content-page">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="page-header"
      >
        <div className="container">
          <h1 className="page-title">{t.nav.air}</h1>
        </div>
      </motion.div>

      <div className="container">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="content-section"
        >
          <h2 className="content-title">Якість повітря в Харкові</h2>
          <div className="content-wrapper">
            <div className="content-images-grid">
              <div className="content-image-item">
                <img src="/src/images/Air Pollution.jpg" alt="Air Pollution" />
              </div>
              <div className="content-image-item">
                <img src="/src/images/Air Pollution1.jpg" alt="Air Pollution" />
              </div>
              <div className="content-image-item">
                <img src="/src/images/Air Pollution2.jpg" alt="Air Pollution" />
              </div>
            </div>
            <div className="content-text">
              <p>
                Моніторинг якості повітря є критично важливим для здоров'я мешканців Харкова.
                Місто працює над зменшенням викидів забруднюючих речовин та покращенням
                екологічної ситуації через впровадження сучасних технологій та зелених ініціатив.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default Air
