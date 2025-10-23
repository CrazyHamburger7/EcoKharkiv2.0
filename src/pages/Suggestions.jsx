import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import './ContentPage.css'

const Suggestions = () => {
  const { t } = useLanguage()

  const tips = [
    '♻️ Сортуйте сміття та здавайте вторинну сировину',
    '🚴 Користуйтеся громадським транспортом або велосипедом',
    '💡 Економте електроенергію та воду',
    '🌱 Висаджуйте дерева та квіти',
    '🛍️ Використовуйте багаторазові сумки',
    '🚰 Пийте воду з багаторазових пляшок'
  ]

  return (
    <div className="content-page">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="page-header"
      >
        <div className="container">
          <h1 className="page-title">{t.nav.suggestions}</h1>
        </div>
      </motion.div>

      <div className="container">
        <motion.section
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className="content-section"
        >
          <h2 className="content-title">Поради щодо збереження довкілля</h2>
          <div className="content-wrapper">
            <div className="content-image">
              <img src="/src/images/Sugg.jpg" alt="Suggestions" />
            </div>
            <div className="content-text">
              <p style={{ marginBottom: '2rem' }}>
                Кожен із нас може зробити внесок у збереження довкілля. Навіть маленькі
                зміни в повсякденному житті можуть мати значний вплив на екологію міста.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                {tips.map((tip, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    style={{
                      padding: '1rem 1.5rem',
                      background: 'var(--color-bg-light)',
                      borderRadius: 'var(--radius-lg)',
                      fontSize: '1.1rem',
                      fontWeight: '500'
                    }}
                  >
                    {tip}
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </motion.section>
      </div>
    </div>
  )
}

export default Suggestions
