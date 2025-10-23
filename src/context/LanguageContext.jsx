import { createContext, useContext, useState } from 'react'

const LanguageContext = createContext()

export const translations = {
  uk: {
    nav: {
      home: 'Головна',
      problems: 'Екологічні проблеми',
      trash: 'Переробка відходів',
      air: 'Якість повітря',
      water: 'Водойми Харкова',
      greenZones: 'Зелені зони',
      suggestions: 'Поради',
      volunteering: 'Ековолонтерство',
      contact: 'Контакти'
    },
    home: {
      heroTitle: 'Піклуймося про довкілля Харкова разом!',
      heroSubtitle: 'Дізнайтеся про стан екології в місті та як ми можемо допомогти природі',
      featuresTitle: 'Що ми пропонуємо?',
      feature1Title: 'Екологічна просвіта',
      feature1Desc: 'Дізнавайтеся про екологічні проблеми та способи їх вирішення',
      feature2Title: 'Ресурси для сортування',
      feature2Desc: 'Інформація про пункти прийому вторинної сировини в Харкові',
      feature3Title: 'Екологічні ініціативи',
      feature3Desc: 'Долучайтеся до наших екологічних проектів і заходів',
      projectsTitle: 'Наші проекти',
      project1Title: 'Чисте Повітря Харкова',
      project1Desc: 'Моніторинг забруднення повітря у місті',
      project2Title: 'Місто без сміття',
      project2Desc: 'Акції з прибирання парків і вулиць',
      project3Title: 'Посадка дерев',
      project3Desc: 'Висаджуємо дерева для покращення екології',
      visitSite: 'Перейти на сайт'
    },
    problems: {
      title: 'Екологічні проблеми Харкова',
      ecoTitle: 'Екологічні проблеми Харкова',
      ecoContent: 'Харків, як і багато великих міст, стикається з численними екологічними проблемами. Однією з основних проблем є забруднення повітря. Низька якість повітря в Харкові зумовлена великою кількістю автомобілів, промислових підприємств і теплових електростанцій.',
      warTitle: 'Війна та її вплив на екологію',
      warContent: 'Війна серйозно вплинула на Харків. Внаслідок обстрілів і бомбардувань було пошкоджено багато житлових і промислових будівель, інфраструктура міста зазнала великих руйнувань.',
      stateTitle: 'Екологічний стан',
      stateContent: 'Екологічний стан міста характеризується як стабільно напружений. За масштабами забруднення навколишнього природного середовища Харків посідає 15-17 місце в Україні.'
    },
    water: {
      title: 'Водні ресурси Харкова',
      resourcesTitle: 'Водні ресурси Харкова',
      resourcesContent: 'Забруднення водних ресурсів у Харкові є серйозною проблемою, яка потребує комплексного підходу до вирішення.',
      warTitle: 'Війна та її вплив на водойми',
      warContent: 'Війна має серйозний вплив не тільки на людські життя, але й на навколишнє середовище.',
      pollutionTitle: 'Забруднення річок нафтопродуктами',
      pollutionContent: 'У результаті пожежі після російської атаки на нафтобазу відбулось потрапляння нафтопродуктів в річку Немишля.'
    },
    footer: {
      credits: '2025 Екологія Харкова | Проект Малої Академії Наук України',
      developer: 'Розробник: Бойко Андрій Сергійович'
    }
  },
  en: {
    nav: {
      home: 'Home',
      problems: 'Ecological Problems',
      trash: 'Waste Management',
      air: 'Air Quality',
      water: 'Water Bodies',
      greenZones: 'Green Zones',
      suggestions: 'Tips',
      volunteering: 'Eco-volunteering',
      contact: 'Contact'
    },
    home: {
      heroTitle: "Let's take care of Kharkiv's environment together!",
      heroSubtitle: 'Learn about the ecological situation in the city and how we can help nature',
      featuresTitle: 'What do we offer?',
      feature1Title: 'Environmental Education',
      feature1Desc: 'Learn about ecological problems and ways to solve them',
      feature2Title: 'Recycling Resources',
      feature2Desc: 'Information about recycling points in Kharkiv',
      feature3Title: 'Environmental Initiatives',
      feature3Desc: 'Join our ecological projects and events',
      projectsTitle: 'Our Projects',
      project1Title: 'Clean Air of Kharkiv',
      project1Desc: 'Monitoring air pollution in the city',
      project2Title: 'Zero Waste City',
      project2Desc: 'Cleanup actions for parks and streets',
      project3Title: 'Tree Planting',
      project3Desc: 'Planting trees to improve ecology',
      visitSite: 'Visit Website'
    },
    problems: {
      title: 'Ecological Problems of Kharkiv',
      ecoTitle: 'Ecological Problems of Kharkiv',
      ecoContent: 'Kharkiv, like many large cities, faces numerous ecological problems. One of the main problems is air pollution caused by automobiles, industrial enterprises and thermal power plants.',
      warTitle: 'War and its impact on ecology',
      warContent: 'The war has seriously affected Kharkiv. As a result of shelling and bombing, many residential and industrial buildings were damaged.',
      stateTitle: 'Ecological State',
      stateContent: 'The ecological state of the city is characterized as consistently tense. In terms of environmental pollution, Kharkiv ranks 15-17th in Ukraine.'
    },
    water: {
      title: 'Water Resources of Kharkiv',
      resourcesTitle: 'Water Resources of Kharkiv',
      resourcesContent: 'Water pollution in Kharkiv is a serious problem that requires a comprehensive solution.',
      warTitle: 'War and its impact on water bodies',
      warContent: 'The war has a serious impact not only on human lives, but also on the environment.',
      pollutionTitle: 'River pollution with oil products',
      pollutionContent: 'As a result of a fire after a Russian attack on an oil depot, oil products entered the Nemyshlya river.'
    },
    footer: {
      credits: '2025 Ecology of Kharkiv | Small Academy of Sciences of Ukraine Project',
      developer: 'Developer: Andrii Boiko'
    }
  }
}

export const LanguageProvider = ({ children }) => {
  const [language, setLanguage] = useState('uk')

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'uk' ? 'en' : 'uk')
  }

  const t = translations[language]

  return (
    <LanguageContext.Provider value={{ language, toggleLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  )
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (!context) {
    throw new Error('useLanguage must be used within LanguageProvider')
  }
  return context
}
