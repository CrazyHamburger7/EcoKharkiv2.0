function changeLanguage() {
  const langBtn = document.getElementById("lang-btn");
  const lang = langBtn.innerText;

  if (lang === "English") {
      langBtn.innerText = "Українська";
      document.getElementById("title").innerText = "Ecology of Kharkiv";
      document.getElementById("eco-title").innerText = "Water resources of Kharkiv";
      document.getElementById("eco-content").innerText = 
        "Water pollution in Kharkiv is a serious problem that requires a comprehensive approach to its solution. Studies show that the Seversky Donets, one of the main rivers in the region, suffers from pollution from both natural and anthropogenic factors. Water pollution in rivers such as the Oskil and Uda affects the ecosystem and poses a threat to the quality of drinking water in the city and surrounding areas. The main causes of pollution include industrial waste, agricultural runoff, and inadequate wastewater treatment.";
      document.getElementById("war-title").innerText = "The war and its impact on Kharkiv's reservoirs";
      document.getElementById("war-content").innerText = 
        "The ongoing war in eastern Ukraine is having a serious impact not only on human lives but also on the environment. Kharkiv, as one of the largest cities in the region, has undergone significant changes due to hostilities, which have caused damage not only to infrastructure but also to water resources. At the same time, the environmental consequences of the war pose a real threat to the health of the population and the sustainable development of the city.";
      document.getElementById("war2-content").innerText = "As a result of the fire after the Russian attack on the oil depot in the Nemyshlyansky district of Kharkiv, oil products entered the Nemyshlya River and further downstream into the Lopan, Udy, and Kharkiv rivers. This was reported by the State Environmental Inspectorate in the Kharkiv region. In order to respond to the situation, the State Environmental Inspectorate in the Kharkiv region, within its competence, formed a group of state environmental inspectors of the Kharkiv region, which went to the scene of the incident to the water bodies to record the facts of the presence of the specified oil slick and take water samples. The State Environmental Inspectorate commented on the pollution of the Kharkiv rivers with oil products. At the time of the trip to the Udy River in the area of ​​the villages of Khorosheve and Temnivka, a significant oil slick was discovered, which continues to move downstream. In order to eliminate the emergency situation related to the pollution of water resources in the Kharkiv region and the city of Kharkiv, the inspection informed the Kharkiv Regional Military Administration and the Main Directorate of the State Emergency Service of Ukraine in the Kharkiv region. The Kharkiv Regional Prosecutor's Office was also informed about the situation. As the inspection emphasized, within the scope of its competence, \"all necessary measures continue to be taken. We are conducting laboratory tests of the selected samples, based on the results of which appropriate inspection response measures will be taken.\"";
      document.getElementById("war2-title").innerText="Pollution of Kharkiv rivers with petroleum products";

      const navLinks = document.querySelectorAll(".nav-links a");
      const englishTexts = [
          "Home",
          "Environmental problems of Kharkiv",
          "Waste Status and Recycling",
          "Air and Its Quality",
          "State of Green Zones",
          "Tips for Environmental Conservation",
          "Eco-volunteering",
          "Contact us"

      ];
      navLinks.forEach((link, index) => {
          link.innerText = englishTexts[index];
      });
  } else {
      langBtn.innerText = "English";
      document.getElementById("title").innerText = "Екологія Харкова";
      document.getElementById("eco-title").innerText = "Водні ресурси Харкова";
      document.getElementById("eco-content").innerText = 
        "Забруднення водних ресурсів у Харкові є серйозною проблемою, яка потребує комплексного підходу до вирішення. Дослідження показують, що Сіверський Донець, одна з головних річок регіону, страждає від забруднення як від природних, так і антропогенних факторів. Забруднення води у річках, таких як Оскіл і Уда, впливає на екосистему і становить загрозу для якості питної води в місті та навколишніх районах. Серед основних причин забруднення—промислові відходи, сільськогосподарські стоки та недостатня очистка стічних вод.";
      document.getElementById("war-title").innerText = "Війна та її вплив на водойми Xаркова";
      document.getElementById("war-content").innerText = 
        "Війна, що триває на сході України, має серйозний вплив не тільки на людські життя, але й на навколишнє середовище. Харків, як одне з найбільших міст регіону, зазнав значних змін через бойові дії, що спричинили шкоду не тільки інфраструктурі, але й водним ресурсам. Водночас, екологічні наслідки війни становлять реальну загрозу для здоров’я населення та сталого розвитку міста.";
      document.getElementById("war2-content").innerText="У результаті пожежі після російської атаки на нафтобазу в Немишлянському районі Харкова відбулось потрапляння нафтопродуктів в річку Немишля та далі за течією в річки Лопань, Уди, Харків. Про це повідомляє Державна екологічна інспекція у Харківській області. З метою реагування на ситуацію Державною екологічною інспекцією у Харківській області, в межах компетенції, була сформована група зі складу державних інспекторів з охорони навколишнього природного середовища Харківської області, яка виїхала на місце події до водних об’єктів для фіксації фактів наявності вказаної нафтової плями та відбору проб води. У Держекоінспекції прокоментували забруднення річок Харкова нафтопродуктами. На момент виїзду на річку Уди в районі села Хорошеве та села Темнівка виявлено нафтову пляму значних розмірів, яка продовжує рухатись за течією. З метою ліквідації надзвичайної ситуації, пов’язаної із забрудненням водних ресурсів Харківської області та міста Харкова, інспекцією проінформовано Харківську обласну військову адміністрацію та ГУ ДСНС України у Харківській області. Про вказану ситуацію також проінформовано Харківську обласну прокуратуру. Як підкреслили в інспекції, в межах компетенції, «продовжується вживання всіх необхідних заходів. Здійснюємо лабораторні дослідження відібраних проб, по результатам яких буде вжито відповідних заходів інспекційного реагування».";
      document.getElementById("war2-title").innerText="Забруднення річок Харкова нафтопродуктами";

      const navLinks = document.querySelectorAll(".nav-links a");
      const ukrainianTexts = [
          "Головна",
          "Екологічні проблеми Харкова",
          "Статус та переробка відходів",
          "Повітря та його якість",
          "Стан зелених зон",
          "Поради щодо збереження довкілля",
          "Еко-волонтерство",
          "Зв'язатися з нами"
      ];
      navLinks.forEach((link, index) => {
          link.innerText = ukrainianTexts[index];
      });
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

document.querySelector('.scrollToTop').addEventListener('click', (e) => {
e.preventDefault();
window.scrollTo({ top: 0, behavior: 'smooth' });
});