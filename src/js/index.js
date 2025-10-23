const translations = {
  "uk": {
    "hero-title1":"Збережемо екологію Харкова для майбутніх поколінь!",
    "hero-text1":"Досліджуйте важливі екологічні проблеми міста та дізнайтеся, як кожен із нас може сприяти збереженню природи.",
    "title": "Екологія Харкова",
    "hero-title": "Піклуймося про довкілля Харкова разом!",
    "hero-text": "Дізнайтеся про стан екології в місті та як ми можемо допомогти природі.",
    "features-title": "Що ми пропонуємо?",
    "feature-education": "Екологічна просвіта",
    "feature-education-desc": "Навчайтеся про екологічні проблеми та способи їх вирішення. Наші матеріали допоможуть вам дізнатися, як правильно доглядати за довкіллям.",
    "feature-recycling": "Ресурси для сортування",
    "feature-recycling-desc": "Отримайте інформацію про пункти прийому вторинної сировини в Харкові та як правильно сортувати відходи для зменшення навантаження на природу.",
    "feature-initiatives": "Екологічні ініціативи",
    "feature-initiatives-desc": "Долучайтеся до наших екологічних проектів і заходів, спрямованих на очищення міста, збереження природних ресурсів та покращення якості повітря.",
    "projects-title": "Наші проекти",
    "project-clean-air": "Чисте Повітря Харкова",
    "project-clean-air-desc": "Слідкуйте за рівнем забруднення повітря у місті. Наші моніторингові дані допоможуть вам дізнатися, наскільки чисте повітря навколо.",
    "project-zero-waste": "Місто без сміття",
    "project-zero-waste-desc": "Долучайтеся до наших акцій з прибирання парків і вулиць. Дізнайтеся про наші заходи, які допомагають утримувати місто в чистоті.",
    "project-tree-planting": "Посадка дерев",
    "project-tree-planting-desc": "Ми висаджуємо дерева по всьому місту для покращення екології. Долучайтеся до акцій із посадки дерев і допоможіть створити зелений Харків!",
    "footer-text": "2024 Екологія Харкова | Сайт розроблено як проект Малої Академії Наук України",
    "menu-item-1": "Екологічні проблеми Харкова",
    "menu-item-2": "Стан та переробка відходів",
    "menu-item-3": "Повітря та його якість",
    "menu-item-4": "Чистота водойм Харкова",
    "menu-item-5": "Стан зелених зон",
    "menu-item-6": "Поради щодо збереження довкілля",
    "menu-item-7": "Еко-волонтерство",
    "increase-font":"Збільшити текст",
    "increase-spacing":"Збільшити інтервал",
    "decrease-spacing": "Зменшити інтервал",
    "decrease-font": "Зменшити текст",
    "menu-item-8": "Зв'язатися з нами"

  },
  "en": {
    "hero-title1": "Let's Preserve Kharkiv's Ecology for Future Generations!",
    "hero-text1": "Explore the city's critical environmental issues and learn how each of us can contribute to preserving nature.",
    "title": "Ecology of Kharkiv",
    "hero-title": "Let's take care of Kharkiv's environment together!",
    "hero-text": "Learn about the ecological situation in the city and how we can help nature.",
    "features-title": "What do we offer?",
    "feature-education": "Environmental Education",
    "feature-education-desc": "Learn about ecological problems and ways to solve them. Our materials will help you understand how to take care of the environment properly.",
    "feature-recycling": "Recycling Resources",
    "feature-recycling-desc": "Get information about recycling points in Kharkiv and how to sort waste correctly to reduce the impact on nature.",
    "feature-initiatives": "Environmental Initiatives",
    "feature-initiatives-desc": "Join our ecological projects and events aimed at cleaning the city, preserving natural resources, and improving air quality.",
    "projects-title": "Our Projects",
    "project-clean-air": "Clean Air of Kharkiv",
    "project-clean-air-desc": "Monitor the air pollution levels in the city. Our monitoring data will help you understand how clean the air is around.",
    "project-zero-waste": "Zero Waste City",
    "project-zero-waste-desc": "Join our cleanup actions for parks and streets. Learn about our events that help keep the city clean.",
    "project-tree-planting": "Tree Planting",
    "project-tree-planting-desc": "We are planting trees throughout the city to improve ecology. Join our tree planting actions and help create a green Kharkiv!",
    "footer-text": "2024 Ecology of Kharkiv | Developed as part of the Small Academy of Sciences of Ukraine project",
    "menu-item-1": "Ecological Problems of Kharkiv",
    "menu-item-2": "Waste Management and Recycling",
    "menu-item-3": "Air and its Quality",
    "menu-item-4": "Water Cleanliness in Kharkiv",
    "menu-item-5": "State of Green Zones",
    "menu-item-6": "Environmental Preservation Tips",
    "menu-item-7": "Eco-volunteering",
    "increase-font":"Increase font",
    "increase-spacing":"Increase spacing",
    "decrease-font": "Decrease font size",
    "decrease-spacing": "Decrease line spacing",
    "menu-item-8": "Contact us"
  }
};
function changeLanguage() {
  let currentLanguage = document.getElementById("lang-btn").textContent.toLowerCase();
  let newLanguage = currentLanguage === "english" ? "en" : "uk";

  document.getElementById("lang-btn").textContent = newLanguage === "en" ? "Українська" : "English";

  for (let key in translations[newLanguage]) {
    const element = document.getElementById(key);
    if (element) {
      element.textContent = translations[newLanguage][key];
    }
  }

  const menuItems = document.querySelectorAll('.menu__item');
  menuItems.forEach((item, index) => {
    const translationKey = `menu-item-${index + 1}`;
    if (translations[newLanguage][translationKey]) {
      item.textContent = translations[newLanguage][translationKey];
    }
  });
}

window.addEventListener('scroll', () => {
const scrollToTop = document.querySelector('.scrollToTop');
if (window.scrollY > 200) {
  scrollToTop.style.display = 'inline';
} else {
  scrollToTop.style.display = 'none';
}
});

document.querySelector('.scrollToTop').addEventListener('click', (e) => {
e.preventDefault();
window.scrollTo({ top: 0, behavior: 'smooth' });
});


function toggleAccessibilityMode() {
  const accessibilityTools = document.getElementById("accessibility-tools");
  
  if (accessibilityTools.style.display === "none" || accessibilityTools.style.display === "") {
    accessibilityTools.style.display = "block"; 
  } else {
    accessibilityTools.style.display = "none"; 
  }
}

function toggleFontSize() {
  const fontButton = document.getElementById("increase-font");
  const currentText = fontButton.textContent; 

  if (currentText === translations["uk"]["increase-font"] || currentText === translations["en"]["increase-font"]) {
    fontButton.textContent = translations["en"]["decrease-font"];  
    document.body.style.fontSize = "1.2em"; 
    if (document.getElementById("lang-btn").textContent.toLowerCase() === "english") {
      fontButton.textContent = translations["uk"]["decrease-font"];  

    }
  } else {
    fontButton.textContent = translations["en"]["increase-font"];  

    document.body.style.fontSize = "1em"; 
    if (document.getElementById("lang-btn").textContent.toLowerCase() === "english") {
      fontButton.textContent = translations["uk"]["increase-font"]; 

    }
  }
}

function toggleLineSpacing() {
  const spacingButton = document.getElementById("increase-spacing");
  const currentText = spacingButton.textContent; 

  if (currentText === translations["uk"]["increase-spacing"] || currentText === translations["en"]["increase-spacing"]) {
    document.body.style.lineHeight = "1.6"; 
    spacingButton.textContent = translations["en"]["decrease-spacing"];  

    if (document.getElementById("lang-btn").textContent.toLowerCase() === "english") {
      spacingButton.textContent = translations["uk"]["decrease-spacing"];

    }
  } else {
    spacingButton.textContent = translations["en"]["increase-spacing"];  

    document.body.style.lineHeight = "1.4"; 
    if (document.getElementById("lang-btn").textContent.toLowerCase() === "english") {
      spacingButton.textContent = translations["uk"]["increase-spacing"]; 

    }
  }
}

document.getElementById("increase-font").addEventListener("click", toggleFontSize);
document.getElementById("increase-spacing").addEventListener("click", toggleLineSpacing);
