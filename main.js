const arrow = fill => {
  return `<svg width="34" height="34" viewBox="0 0 34 34" fill=${fill} xmlns="http://www.w3.org/2000/svg">
  <g clip-path="url(#clip0_13403_104)">
  <path d="M32.6718 15.6719H4.54493L9.20426 11.0351C9.72416 10.5177 9.72615 9.67678 9.20871 9.15689C8.69127 8.63693 7.8503 8.635 7.33041 9.15237L0.390691 16.0586C0.390226 16.059 0.389894 16.0595 0.389496 16.0599C-0.129071 16.5773 -0.130731 17.4209 0.389363 17.9401C0.389828 17.9405 0.39016 17.941 0.390558 17.9414L7.33028 24.8476C7.85011 25.3649 8.69107 25.3631 9.20858 24.8431C9.72602 24.3232 9.72402 23.4823 9.20413 22.9648L4.54493 18.3281H32.6718C33.4054 18.3281 34 17.7335 34 17C34 16.2665 33.4054 15.6719 32.6718 15.6719Z" fill=${fill}/>
  </g>
  <defs>
  <clipPath id="clip0_13403_104">
  <rect width="34" height="34" fill="white"/>
  </clipPath>
  </defs>
  </svg>`;
};
const Slides = () => {
  const nextBtn = document.querySelector('#nextBtn');
  const prevBtn = document.querySelector('#prevBtn');
  const slides = document.querySelectorAll('#sliderItem');

  nextBtn.addEventListener('click', () => nextSlide());
  prevBtn.addEventListener('click', () => prevSlide());
  const showSlide = n => {
    const slides = document.querySelectorAll('#sliderItem');
    const counter = document.querySelector('#counter');
    const items = document.querySelector('#items');
    if (n > slides.length) {
      slideIndex = 1;
    }
    if (n < 1) {
      slideIndex = slides.length;
    }

    for (let slide of slides) {
      slide.style.display = 'none';
    }
    if (window.innerWidth > 1270) {
      slides[slideIndex - 1].style.display = 'block';
    } else {
      slides[slideIndex - 1].style.display = 'flex';
    }

    counter.innerHTML = `${slideIndex}`;
    items.innerHTML = `/${slides.length}`;
    prevBtn.innerHTML = arrow('#0DBC91');
    nextBtn.innerHTML = arrow('#0DBC91');
    if (slideIndex === 1) {
      prevBtn.innerHTML = arrow('#E1E1E1');
      nextBtn.innerHTML = arrow('#0DBC91');
    } else if (slideIndex === slides.length) {
      prevBtn.innerHTML = arrow('#0DBC91');
      nextBtn.innerHTML = arrow('#E1E1E1');
    }
  };

  let slideIndex = 1;

  showSlide(slideIndex);

  const nextSlide = () => {
    slideIndex !== slides.length && showSlide((slideIndex += 1));
  };
  const prevSlide = () => {
    slideIndex !== 1 && showSlide((slideIndex -= 1));
  };
};
const menuFunc = () => {
  const menu = document.querySelector('#menu');
  const menuContent = document.querySelector('#menuContent');
  const routesBtn = document.querySelector('.routes__button');
  const routesList = document.querySelector('.routes-list');
  let isOpen = false;

  menu.innerHTML = `<svg width="37" height="26" viewBox="0 0 37 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="37" height="4" fill="#1FA181"/>
      <rect y="11" width="37" height="4" fill="#1FA181"/>
      <rect y="22" width="37" height="4" fill="#1FA181"/>
      </svg>`;

  menu.addEventListener('click', e => {
    isOpen = !isOpen;

    if (isOpen) {
      menu.innerHTML = `<svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="27.1628" width="37" height="4" transform="rotate(-45 0 27.1628)" fill="#1FA181"/>
      <rect x="2.83276" y="0.504395" width="37" height="4" transform="rotate(45 2.83276 0.504395)" fill="#1FA181"/>
      </svg>`;

      if (window.innerWidth < 1270) {
        setTimeout(() => (routesBtn.style.display = 'block'), 50);
        routesList.style.display = 'block';
        menuContent.style.height = '100vh';
        menuContent.style.paddingTop = '48px';
      }
    } else {
      menu.innerHTML = `<svg width="37" height="26" viewBox="0 0 37 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="37" height="4" fill="#1FA181"/>
      <rect y="11" width="37" height="4" fill="#1FA181"/>
      <rect y="22" width="37" height="4" fill="#1FA181"/>
      </svg>`;
      if (window.innerWidth < 1270) {
        setTimeout(() => (routesBtn.style.display = 'none'), 200);
        menuContent.style.height = '0vh';
        menuContent.style.paddingTop = '0';
        setTimeout(() => (routesList.style.display = 'none'), 350);
      }
    }
  });
};
function togglePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
}

document.getElementById('closePopup').addEventListener('click', togglePopup);
document.getElementById('openPopup').addEventListener('click', togglePopup);
document
  .getElementById('openPopupBurger')
  .addEventListener('click', togglePopup);

document
  .getElementById('emailForm')
  .addEventListener('submit', function (event) {
    event.preventDefault(); // Предотвратить отправку формы

    const formData = new FormData(event.target);

    // Отправка данных формы на сервер (наш PHP-скрипт)
    fetch('send_email.php', {
      method: 'POST',
      body: formData,
    })
      .then(response => response.text())
      .then(data => {
        console.log(data); // Логирование ответа от сервера
        event.target[0].value = ''; // Отчистка полей при отправке
        event.target[1].value = ''; // Отчистка полей при отправке
        togglePopup(); // Закрыть всплывающее окно после отправки
      })
      .catch(error => console.error('Ошибка:', error));
  });

Slides();
menuFunc();
