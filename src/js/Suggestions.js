function changeLanguage() {
  let ukContent = document.querySelectorAll('.content-text[id$="-uk"]');
  let enContent = document.querySelectorAll('.content-text[id$="-en"]');
  let langBtn = document.getElementById('lang-btn');
  let isEnglish = langBtn.textContent === "English";

  document.querySelectorAll(".nav-links a")[0].innerHTML = isEnglish ? "Home" : "Головна";
  document.querySelectorAll(".nav-links a")[1].innerHTML = isEnglish ? "Ecological problems of Kharkiv" : "Екологічні проблеми Харкова";
  document.querySelectorAll(".nav-links a")[2].innerHTML = isEnglish ? "Waste Status and Recycling" : "Стан та переробка відходів";
  document.querySelectorAll(".nav-links a")[3].innerHTML = isEnglish ? "Air and Its Quality" : "Повітря та його якість";
  document.querySelectorAll(".nav-links a")[4].innerHTML = isEnglish ? "Cleanliness of Water Bodies in Kharkiv" : "Чистота водойм Харкова";
  document.querySelectorAll(".nav-links a")[5].innerHTML = isEnglish ? "State of Green Zones" : "Стан зелених зон";
  document.querySelectorAll(".nav-links a")[6].innerHTML = isEnglish ? "Eco-volunteering" : "Ековолонтерство";
  document.querySelectorAll(".nav-links a")[7].innerHTML = isEnglish ? "Contact us" : "Зв'язатися з нами";
  document.getElementById("title").textContent = isEnglish ? "Ecology of Kharkiv" : "Екологія Харкова";
  document.getElementById("section-title").textContent = isEnglish ? "Tips for Preserving the Environment" : "Поради щодо збереження довкілля";
  document.getElementById("forest-content-uk").style.display = isEnglish ? "none" : "block";
  document.getElementById("eco-content-en").style.display = isEnglish ? "block" : "none";
  langBtn.textContent = isEnglish ? "Українська" : "English";

  changeImage(isEnglish);
  toggleMenu();
}

function changeImage(isEnglish) {
  var image = document.getElementById("tips-image");
  if (isEnglish) {
      image.src = "./images/tips.jpg"; 
  } else {
      image.src = "./images/Sugg.jpg"; 
  }
}

function toggleMenu() {
  const toggle = document.querySelector('.menu-toggle');
  const navLinks = document.querySelector('.nav-links');
  toggle.classList.toggle('active');
  navLinks.style.display = navLinks.style.display === 'flex' ? 'none' : 'flex';


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

