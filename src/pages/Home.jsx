import { motion } from 'framer-motion'
import { useLanguage } from '../context/LanguageContext'
import './Home.css'

const Home = () => {
  const { t } = useLanguage()

  const features = [
    {
      icon: '📚',
      title: t.home.feature1Title,
      description: t.home.feature1Desc
    },
    {
      icon: '♻️',
      title: t.home.feature2Title,
      description: t.home.feature2Desc
    },
    {
      icon: '🌿',
      title: t.home.feature3Title,
      description: t.home.feature3Desc
    }
  ]

  const projects = [
    {
      icon: '💨',
      title: t.home.project1Title,
      description: t.home.project1Desc,
      link: 'https://www.saveecobot.com/maps/kharkiv',
      gradient: 'linear-gradient(135deg, #0ea5e9 0%, #0284c7 100%)'
    },
    {
      icon: '🗑️',
      title: t.home.project2Title,
      description: t.home.project2Desc,
      link: 'https://suspilne.media/kharkiv/707300-u-harkovi-vlastuvali-pribiranna-lopanskoi-nabereznoi-fotoreportaz/',
      gradient: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)'
    },
    {
      icon: '🌳',
      title: t.home.project3Title,
      description: t.home.project3Desc,
      link: 'https://www.mamaplantatree.com/ua/',
      gradient: 'linear-gradient(135deg, #16a34a 0%, #15803d 100%)'
    }
  ]

  return (
    <div className="home">
      <section className="hero">
        <div className="hero-background">
          <div className="hero-gradient"></div>
          <div className="hero-pattern"></div>
        </div>

        <div className="hero-content container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="hero-text"
          >
            <h1 className="hero-title">{t.home.heroTitle}</h1>
            <p className="hero-subtitle">{t.home.heroSubtitle}</p>
            <div className="hero-buttons">
              <a href="/problems" className="btn btn-primary">
                {t.nav.problems}
              </a>
              <a href="/volunteering" className="btn btn-secondary">
                {t.nav.volunteering}
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-image"
          >
            <div className="hero-image-wrapper">
              <img src="/src/images/Kharkiv.jpg" alt="Kharkiv" className="hero-img hero-img-1" />
              <img src="/src/images/Kharkiv1.jpg" alt="Kharkiv" className="hero-img hero-img-2" />
              <img src="/src/images/Kharkiv2.jpg" alt="Kharkiv" className="hero-img hero-img-3" />
            </div>
          </motion.div>
        </div>
      </section>

      <section className="section features-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            {t.home.featuresTitle}
          </motion.h2>

          <div className="features-grid">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="feature-card card"
              >
                <div className="feature-icon">{feature.icon}</div>
                <h3 className="feature-title">{feature.title}</h3>
                <p className="feature-description">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="section projects-section">
        <div className="container">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-title"
          >
            {t.home.projectsTitle}
          </motion.h2>

          <div className="projects-grid">
            {projects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="project-card"
                style={{ background: project.gradient }}
              >
                <div className="project-icon">{project.icon}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  {t.home.visitSite}
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                    <path d="M5 12h14M12 5l7 7-7 7"/>
                  </svg>
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
