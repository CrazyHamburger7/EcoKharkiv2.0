import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import './ContentPage.css'

const WaterResources = () => {
  const { t } = useLanguage()

  const sections = [
    {
      title: t.water.resourcesTitle,
      content: t.water.resourcesContent,
      image: '/src/images/Water-Pollution.jpg'
    },
    {
      title: t.water.warTitle,
      content: t.water.warContent,
      image: '/src/images/Water-Pollution.png'
    },
    {
      title: t.water.pollutionTitle,
      content: t.water.pollutionContent,
      images: [
        '/src/images/Water-Pollution3.png',
        '/src/images/Water-Pollution5.png',
        '/src/images/Water-Pollution6.png',
        '/src/images/Water-Pollution7.png'
      ]
    }
  ]

  return (
    <div className="content-page">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        className="page-header"
      >
        <div className="container">
          <h1 className="page-title">{t.water.title}</h1>
        </div>
      </motion.div>

      <div className="container">
        {sections.map((section, index) => (
          <motion.section
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="content-section"
          >
            <h2 className="content-title">{section.title}</h2>
            <div className={`content-wrapper ${section.images ? 'multi-image' : ''}`}>
              {section.image && (
                <div className="content-image">
                  <img src={section.image} alt={section.title} />
                </div>
              )}
              {section.images && (
                <div className="content-images-grid four-cols">
                  {section.images.map((img, i) => (
                    <div key={i} className="content-image-item">
                      <img src={img} alt={`${section.title} ${i + 1}`} />
                    </div>
                  ))}
                </div>
              )}
              <div className="content-text">
                <p>{section.content}</p>
              </div>
            </div>
          </motion.section>
        ))}
      </div>
    </div>
  )
}

export default WaterResources
