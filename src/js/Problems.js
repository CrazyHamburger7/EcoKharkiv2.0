function changeLanguage() {
    const lang = document.getElementById("lang-btn").innerText;
  
    const videoUkr = document.getElementById("video-ukr");
    const videoEng = document.getElementById("video-eng");
  
    if (lang === "English") {
      document.getElementById("lang-btn").innerText = "Українська";
      document.getElementById("title").innerText = "Ecology of Kharkiv";
      document.getElementById("eco-title").innerText = "Environmental Issues of Kharkiv";
      document.getElementById("eco-content").innerText = 
        "Kharkiv, like many large cities, faces numerous environmental problems. One of the main issues is air pollution. The low air quality in Kharkiv is caused by the large number of cars, industrial enterprises, and thermal power plants. The high level of pollution poses health risks to the city's residents, especially for people suffering from asthma and cardiovascular diseases. Additionally, Kharkiv also faces the problem of water pollution, caused by industrial waste discharge and insufficient wastewater treatment. An important environmental issue is also the lack of green spaces and low levels of greenery in some parts of the city.";
      document.getElementById("war-title").innerText = "War and Its Impact on ecology Kharkiv";
      document.getElementById("war-content").innerText = 
        "The war that broke out in eastern Ukraine in 2014, as well as the military conflict that began in 2022, had a serious impact on Kharkiv. As a result of shelling and bombing, many residential and industrial buildings were damaged, and the city's infrastructure suffered extensive destruction. The city experienced periods of energy and water supply crises, creating additional difficulties for the residents. Furthermore, the war significantly affected Kharkiv's environmental condition, as numerous explosions and the destruction of industrial facilities led to the release of toxic substances into the atmosphere and soil. After the partial restoration of the city, many residents face health problems due to radiation and chemical contamination caused by the military actions.";
      document.getElementById("eco-stage").innerText = "Environmental condition";
      document.getElementById("eco-stage-content").innerText=
        "The ecological state of the city is characterized as consistently tense, although the decline in production is partially restraining the growth of negative processes of environmental degradation. In terms of the scale of environmental pollution, Kharkiv ranks 15th-17th in Ukraine. The most significant factors of anthropogenic load on the environment: a significant increase in the number of motor vehicles with extremely low environmental parameters of cars, which caused an increase in harmful emissions into the atmosphere. This led to the fact that motor vehicles became the most unfavorable factor in the state of the city's atmospheric air; the accumulation of sludge sediment, which is formed at the city's sewage treatment facilities and stored in sludge filtration fields, removes 126 hectares of urban land from circulation (sludge fields are environmentally dangerous because they lead to pollution of: atmospheric air - with dust and greenhouse gases (methane, methyl mercaptan), underground hydrosphere - with filtrate); More than 80% of the pollution entering water bodies, and primarily rivers, comes from untreated surface runoff from the city. This has led to silting of riverbeds, water pollution, disruption of the hydrological regime and technical condition of rivers; the lack of modern enterprises for the processing of household and industrial waste has led to the accumulation of a significant amount of waste in the city. No less significant are the problems of improving the condition of green and forest zones of Kharkiv, their protection from the influence of physical factors. This is especially important due to the fact that the city is growing due to the densification of urban development."
      const navLinks = document.querySelectorAll(".nav-links a");
      const englishTexts = [
        "Home",
        "Waste Status and Recycling",
        "Air and Its Quality",
        "Cleanliness of Water Bodies in Kharkiv",
        "State of Green Zones",
        "Tips for Environmental Conservation",
        "Eco-volunteering",
        "Contact us"
      ];
      navLinks.forEach((link, index) => {
        link.innerText = englishTexts[index];
      });
  
      videoUkr.style.display = "none";
      videoEng.style.display = "block";
    } else {
      document.getElementById("lang-btn").innerText = "English";
      document.getElementById("title").innerText = "Екологія Харкова";
      document.getElementById("eco-title").innerText = "Екологічні проблеми Харкова";
      document.getElementById("eco-content").innerText = 
        "Харків, як і багато великих міст, стикається з численними екологічними проблемами. Однією з основних проблем є забруднення повітря. Низька якість повітря в Харкові зумовлена великою кількістю автомобілів, промислових підприємств і теплових електростанцій. Високий рівень забруднення створює ризики для здоров'я мешканців міста, особливо для людей, що страждають від астми та серцево-судинних захворювань. Крім того, Харків також стикається з проблемою забруднення води, що спричинено скидами промислових відходів та недостатнім очищенням стічних вод. Важливою екологічною проблемою є також нестача зелених зон та низький рівень озеленення в деяких частинах міста.";
      document.getElementById("war-title").innerText = "Війна та її вплив на екологію Харкова";
      document.getElementById("war-content").innerText = 
        "Війна, що розгорнулася на сході України в 2014 році, а також військовий конфлікт, який розпочався в 2022 році, серйозно вплинули на Харків. Внаслідок обстрілів і бомбардувань було пошкоджено багато житлових і промислових будівель, інфраструктура міста зазнала великих руйнувань. Місто переживало періоди енергетичних та водопостачальних криз, що створювало додаткові труднощі для мешканців. Крім того, війна значно вплинула на екологічний стан Харкова, оскільки численні вибухи та знищення промислових об'єктів спричинили викиди токсичних речовин в атмосферу і грунти. Після відновлення частини міста багато жителів стикаються з проблемами здоров'я через радіаційне і хімічне забруднення, яке виникло внаслідок військових дій.";
      document.getElementById("eco-stage").innerText="Екологічний стан";
      document.getElementById("eco-stage-content").innerText=" Екологічний стан міста характеризується як стабільно напружений, хоча спад виробництва частково стримують наростання негативних процесів деградації навколишнього природного середовища. За масштабами забруднення навколишнього природного середовища Харків посідає 15-17 місце в Україні. Найвагоміші чинники антропогенного навантаження на довкілля: значне зростання кількості автомобільного транспорту при надзвичайно низьких екологічних параметрах автомобілів, що спричинило збільшення шкідливих викидів в атмосферу. Це обумовило те, що автомобільний транспорт став найнесприятливішим фактором стану атмосферного повітря міста; накопичення мулового осаду, що утворюється на очисних каналізаційних спорудах міста та складується на мулових полях фільтрації, виводить з обігу 126 га міських земель (мулові поля є екологічно небезпечними, тому що призводять до забруднення: атмосферного повітря — пилом та парниковими газами (метан, метилмеркаптан), підземної гідросфери — фільтратом); понад 80 % забруднень, що надходять у водні об'єкти, і перш за все річки, припадає на неочищений поверхневий стік з території міста. Це призвело до замулювання русел, забрудненню вод, порушенню гідрологічного режиму та технічного стану річок; відсутність сучасних підприємств із переробки побутових і промислових відходів призвела до накопичення на території міста значної кількості відходів. Не менш значними є проблеми покращення стану зеленої та лісової зон Харкова, їхнього захисту від впливу фізичних факторів. Це особливо важливо через те, що місто зростає за рахунок ущільнення міської забудови.";
      const navLinks = document.querySelectorAll(".nav-links a");
      const ukrainianTexts = [
        "Головна",
        "Статус та переробка відходів",
        "Повітря та його якість",
        "Чистота водойм Харкова",
        "Стан зелених зон",
        "Поради щодо збереження довкілля",
        "Ековолонтерство",
        "Зв'язатися з нами"
      ];
      navLinks.forEach((link, index) => {
        link.innerText = ukrainianTexts[index];
      });
  
      videoUkr.style.display = "block";
      videoEng.style.display = "none";
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
  
  
