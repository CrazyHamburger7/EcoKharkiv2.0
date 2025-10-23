import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import './ContentPage.css'

const Trash = () => {
  const { t } = useLanguage()

  return (
    <div className="content-page">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="page-header"
      >
        <div className="container">
          <h1 className="page-title">{t.nav.trash}</h1>
        </div>
      </motion.div>

      <div className="container">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="content-section"
        >
          <h2 className="content-title">Управління відходами в Харкові</h2>
          <div className="content-wrapper">
            <div className="content-image">
              <img src="/src/images/waste.jpg" alt="Waste Management" />
            </div>
            <div className="content-text">
              <p>
                Переробка відходів є важливою складовою екологічної політики міста.
                Харків активно розвиває систему роздільного збору сміття та переробки
                вторинної сировини для зменшення навантаження на довкілля.
              </p>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default Trash
