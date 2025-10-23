import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import './ContentPage.css'

const GreenZones = () => {
  const { t } = useLanguage()

  return (
    <div className="content-page">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="page-header"
      >
        <div className="container">
          <h1 className="page-title">{t.nav.greenZones}</h1>
        </div>
      </motion.div>

      <div className="container">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="content-section"
        >
          <h2 className="content-title">Зелені зони Харкова</h2>
          <div className="content-wrapper">
            <div className="content-images-grid">
              <div className="content-image-item">
                <img src="/src/images/Forest.jpeg" alt="Forest" />
              </div>
              <div className="content-image-item">
                <img src="/src/images/Forest1.jpeg" alt="Forest" />
              </div>
              <div className="content-image-item">
                <img src="/src/images/Forest2.jpg" alt="Forest" />
              </div>
              <div className="content-image-item">
                <img src="/src/images/Forest3.jpeg" alt="Forest" />
              </div>
            </div>
            <div className="content-text">
              <p>
                Парки та лісопаркові зони Харкова відіграють важливу роль у підтриманні
                екологічного балансу міста. Вони забезпечують чисте повітря, місця для
                відпочинку та є домівкою для багатьох видів рослин і тварин.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default GreenZones
