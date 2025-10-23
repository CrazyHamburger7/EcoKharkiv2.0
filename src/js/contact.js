function changeLanguage() {
    const langButton = document.getElementById("lang-btn");
    const title = document.getElementById("title");
    const sectionTitle = document.getElementById("section-title");
    const historyContent = document.getElementById("history-content");
    const homeLink = document.getElementById("home-link");
    const newsLink = document.getElementById("news-link");
    
    // Toggle between English and Ukrainian
    if (langButton.innerText === "English") {
      langButton.innerText = "Українська";
      title.innerText = "Ecology of Kharkiv";
      sectionTitle.innerText = "History of Kharkiv";
      historyContent.innerHTML = `
        The history of Kharkiv, one of Ukraine's oldest cities, has a rich and diverse development path. The city was founded in 1654 as a military fortress and got its name from the Kharkiv River. Initially, the city was part of the "Slobozhanshchyna," where a Cossack settlement developed that played a significant role in the further development of Kharkiv. The first written mention of Kharkiv dates back to 1656, when the governor of Chuhuiv, Sukhotin, received a royal decree. In the 18th century, the city became an important economic, cultural, and scientific center, particularly with the establishment of the first universities and research institutions. As the city's population and territory grew, Kharkiv became a key player in Ukraine's development, acquiring a significant place in the country's industrial, scientific, and cultural life.
      `;
      document.getElementById("lang-btn").innerHTML = "Українська";
      document.querySelectorAll(".nav-links a")[0].innerHTML = "Our telegram";
      document.querySelectorAll(".nav-links a")[1].innerHTML = "Home";
      document.querySelectorAll(".nav-links a")[2].innerHTML = "Pages";
      document.querySelectorAll(".nav-links a")[3].innerHTML = "Ecological problems of Kharkiv";
      document.querySelectorAll(".nav-links a")[4].innerHTML = "Waste Status and Recycling";
      document.querySelectorAll(".nav-links a")[5].innerHTML = "Air and Its Quality";
      document.querySelectorAll(".nav-links a")[6].innerHTML = "Cleanliness of Water Bodies in Kharkiv";
      document.querySelectorAll(".nav-links a")[7].innerHTML = "State of Green Zones";
      document.querySelectorAll(".nav-links a")[8].innerHTML = "Volunteering";
      document.querySelectorAll(".nav-links a")[9].innerHTML = "Tips for preserving the environment";
      document.querySelectorAll(".nav-links a")[10].innerHTML = "Eco-volunteering";
      homeLink.innerText = "Home";
      newsLink.innerText = "Ecological Issues of Kharkiv";
    } else {
      langButton.innerText = "English";
      title.innerText = "Екологія Харкова";
      sectionTitle.innerText = "Історія Харкова";
      historyContent.innerHTML = `
        Історія Харкова, одного з найстаріших міст України, має багатий і різноманітний шлях розвитку. Місто було засноване в 1654 році як військова фортеця і отримало свою назву від річки Харків. Спочатку місто входило до складу "Слобідської України", де виникло козацьке поселення, яке відіграло важливу роль у подальшому розвитку Харкова. Перша письмова згадка про Харків датується 1656 роком, коли воєвода Чугуєва, Сухотін, отримав царську грамоту. У 18 столітті місто стало важливим економічним, культурним і науковим центром, зокрема з появою перших університетів і наукових установ. Зі збільшенням міського населення та території Харків перетворюється на ключову ланку в українському розвитку, здобувши важливе місце в індустріальному, науковому та культурному житті країни.
      `;
      document.getElementById("lang-btn").innerHTML = "English";
      document.querySelectorAll(".nav-links a")[0].innerHTML = "Наш телеграм";
      document.querySelectorAll(".nav-links a")[1].innerHTML = "Головна";
      document.querySelectorAll(".nav-links a")[2].innerHTML = "Сторінки";
      document.querySelectorAll(".nav-links a")[3].innerHTML = "Екологічні проблеми Харкова";
      document.querySelectorAll(".nav-links a")[4].innerHTML = "Статус та переробка відходів";
      document.querySelectorAll(".nav-links a")[5].innerHTML = "Повітря та його якість";
      document.querySelectorAll(".nav-links a")[6].innerHTML = "Чистота водойм Харкова";
      document.querySelectorAll(".nav-links a")[7].innerHTML = "Стан зелених зон";
      document.querySelectorAll(".nav-links a")[8].innerHTML = "Допомога";
      document.querySelectorAll(".nav-links a")[9].innerHTML = "Поради щодо збереження довкілля";
      document.querySelectorAll(".nav-links a")[10].innerHTML = "Еко-волонтерство";
    }
  }
  window.addEventListener('scroll', () => {
const scrollToTop = document.querySelector('.scrollToTop');
if (window.scrollY > 200) {
  scrollToTop.style.display = 'inline';
} else {
  scrollToTop.style.display = 'none';
}
});

// Плавний перехід до початку
document.querySelector('.scrollToTop').addEventListener('click', (e) => {
e.preventDefault();
window.scrollTo({ top: 0, behavior: 'smooth' });
});