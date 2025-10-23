function changeLanguage() {
    const isEnglish = document.getElementById("lang-btn").innerText === "English";
    
    document.getElementById("lang-btn").innerText = isEnglish ? "Українська" : "English";
  
    document.getElementById("title").innerText = isEnglish ? "Contact Us" : "Зв'язатися з нами";
    document.getElementById("contact-title").innerText = isEnglish ? "Write to Us" : "Напишіть нам";
  
    document.getElementById("label-name").innerText = isEnglish ? "Your Name" : "Ваше ім'я";
    document.getElementById("label-email").innerText = isEnglish ? "Email" : "Електронна пошта";
    document.getElementById("label-message").innerText = isEnglish ? "Message" : "Повідомлення";
    document.getElementById("submit-btn").innerText = isEnglish ? "Send" : "Відправити";
  
    document.getElementById("contact-info").innerHTML = isEnglish ? 
    '<a href="https://t.me/ecokharkiv" target="_blank">Our telegram</a>' : 
    '<a href="https://t.me/ecokharkiv" target="_blank">Наш телеграм</a>';
    
  
    document.getElementById("menu8").innerText = isEnglish ? "Home" : "Головна";
    document.getElementById("menu1").innerText = isEnglish ? "Ecological Problems of Kharkiv" : "Екологічні проблеми Харкова";
    document.getElementById("menu2").innerText = isEnglish ? "Waste Management and Recycling" : "Стан та переробка відходів";
    document.getElementById("menu3").innerText = isEnglish ? "Air Quality" : "Повітря та його якість";
    document.getElementById("menu4").innerText = isEnglish ? "Water Cleanliness in Kharkiv" : "Чистота водойм Харкова";
    document.getElementById("menu5").innerText = isEnglish ? "State of Green Zones" : "Стан зелених зон";
    document.getElementById("menu6").innerText = isEnglish ? "Environmental Preservation Tips" : "Поради щодо збереження довкілля";
    document.getElementById("menu7").innerText = isEnglish ? "Eco-volunteering" : "Еко-волонтерство";
  }
  function autoResize(textarea) {
    textarea.style.height = 'auto';  
    textarea.style.height = (textarea.scrollHeight) + 'px';  
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
  