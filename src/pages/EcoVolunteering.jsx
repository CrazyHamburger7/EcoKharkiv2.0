import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import './ContentPage.css'

const EcoVolunteering = () => {
  const { t } = useLanguage()

  return (
    <div className="content-page">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="page-header"
      >
        <div className="container">
          <h1 className="page-title">{t.nav.volunteering}</h1>
        </div>
      </motion.div>

      <div className="container">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="content-section"
        >
          <h2 className="content-title">Ековолонтерство в Харкові</h2>
          <div className="content-wrapper">
            <div className="content-image">
              <img src="/src/images/Eco-hp.jpg" alt="Eco Volunteering" />
            </div>
            <div className="content-text">
              <p>
                Приєднуйтесь до нашої спільноти екоактивістів! Разом ми можемо зробити
                Харків чистішим та зеленішим містом. Беріть участь у прибираннях,
                посадках дерев та інших екологічних ініціативах.
              </p>
              <p>
                Волонтерство - це не лише допомога природі, а й можливість познайомитися
                з однодумцями, навчитися новому та зробити реальний внесок у покращення
                екологічної ситуації нашого міста.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default EcoVolunteering
