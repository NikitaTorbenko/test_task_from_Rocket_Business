import './styles/style.scss';
import { Slides } from './sliderCounter';
import { menuFunc } from './menu';

document.querySelector('#app').innerHTML = `
  <header class="header">
    <div class='header-logoBlock'>
      <button class="header__menu" id='menu'></button>
      <img src="/assets/img/LOGO.svg" alt="logo" class="header__logo" />
    </div>
    <div class='header-content'>
    <div class="header-leftBlock">
      <div class="header-address">
        <div class="header-address-cityBlock">
          <img
            src="/assets/img/addressPoint.svg"
            alt=""
            class="address__point"
          />
          <p class="address__text">Ростов-на-Дону</p>
        </div>
        <p class="address__text header-address__street">ул. Ленина, 2Б</p>
      </div>
    </div>
    <div class="header-rightBlock">
      <div class="header-phoneBlock">
        <img alt="" src="/assets/img/whatsapp.svg" />
        <p>+7(863) 000 00 00</p>
      </div>
      <button id="openPopup" class="header__button btn">Записаться на прием</button>
    </div>
    </div>
    
  </header>
  <div class="routes" id='menuContent'>
    <ul class="routes-list">
      <li class="routes-list__item">
        <a class="routes-list__link">О клинике</a>
      </li>
      <li class="routes-list__item">
        <a class="routes-list__link">Услуги</a>
      </li>
      <li class="routes-list__item">
        <a class="routes-list__link">Специалисты</a>
      </li>
      <li class="routes-list__item">
        <a class="routes-list__link">Цены</a>
      </li>
      <li class="routes-list__item">
        <a class="routes-list__link">Контакты</a>
      </li>
    </ul>
    <button id="openPopupBurger" class='routes__button btn'>Записаться на прием</button>
  </div>
  <div class="main">
    <div class="main-leftBlock">
      <div class="main-textBlock">
        <h3 class="main-textBlock__title">
          Многопрофильная клиника для детей и взрослых
        </h3>
        <p class="main-textBlock__text">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua
        </p>
      </div>
    </div>
    <div class="main-rightBlock"></div>
  </div>
  <div class="sliderBlock">
    <div class="sliderBlock-slider">
      <div class="sliderBlock-slider-sliderItem" id='sliderItem'>
      <div class="sliderBlock-slider-sliderItem-imageBlock">
          <img src='assets/img/sliderImg.jpg' alt='' class="sliderBlock-slider-sliderItem-imageBlock__image"/>
        </div>
        <div class="sliderBlock-slider-sliderItem-textBlock">
          <p class="sliderBlock-slider-sliderItem-textBlock__title">Check-UP</p>
          <p class="sliderBlock-slider-sliderItem-textBlock__subtitle">
            для мужчин
          </p>
          <ul class="sliderBlock-slider-sliderItem-textBlock__description">
            <li>Гормональный скрининг</li>
            <li>Тестостерон</li>
            <li>Свободный тестостерон</li>
            <li>Глобулин, связывающий половые гормоны</li>
          </ul>
          <div class="sliderBlock-slider-sliderItem-textBlock-priceBlock">
            <p class="sliderBlock-slider-sliderItem-textBlock-priceBlock__price">
              Всего 2800₽
            </p>
            <p class="sliderBlock-slider-sliderItem-textBlock-priceBlock__oldPrice">
              3500₽
            </p>
          </div>
          <div class="sliderBlock-slider-sliderItem-textBlock-btnsBlock">
            <button class="sliderBlock-slider-sliderItem-textBlock-btnsBlock__firstBtn btn">Записаться</button>
            <button class="sliderBlock-slider-sliderItem-textBlock-btnsBlock__secondBtn btn">Подробнее</button>
          </div>
        </div>
        
      </div>

      <div class="sliderBlock-slider-sliderItem" id='sliderItem'>
      <div class="sliderBlock-slider-sliderItem-imageBlock">
          <img src='assets/img/sliderImg2.jpg' alt='' class="sliderBlock-slider-sliderItem-imageBlock__image"/>
        </div>
        <div class="sliderBlock-slider-sliderItem-textBlock">
          <p class="sliderBlock-slider-sliderItem-textBlock__title">Check-UP</p>
          <p class="sliderBlock-slider-sliderItem-textBlock__subtitle">
            для женщин
          </p>
          <ul class="sliderBlock-slider-sliderItem-textBlock__description">
            <li>Гормональный скрининг для женщин</li>
            <li>Тестостерон (этого у женщин мало)</li>
            <li>Свободный тестостерон (этого тоже мало)</li>
            <li>Глобулин, связывающий половые гормоны</li>
          </ul>
          <div class="sliderBlock-slider-sliderItem-textBlock-priceBlock">
            <p class="sliderBlock-slider-sliderItem-textBlock-priceBlock__price">
              Всего 3000₽
            </p>
            <p class="sliderBlock-slider-sliderItem-textBlock-priceBlock__oldPrice">
              3500₽
            </p>
          </div>
          <div class="sliderBlock-slider-sliderItem-textBlock-btnsBlock">
            <button class="sliderBlock-slider-sliderItem-textBlock-btnsBlock__firstBtn btn">Записаться</button>
            <button class="sliderBlock-slider-sliderItem-textBlock-btnsBlock__secondBtn btn">Подробнее</button>
          </div>
        </div>
        
      </div>

      <div class="sliderBlock-slider-sliderItem" id='sliderItem'>
      <div class="sliderBlock-slider-sliderItem-imageBlock">
          <img src='assets/img/sliderImg3.jpg' alt='' class="sliderBlock-slider-sliderItem-imageBlock__image"/>
        </div>
        <div class="sliderBlock-slider-sliderItem-textBlock">
          <p class="sliderBlock-slider-sliderItem-textBlock__title">Check-UP</p>
          <p class="sliderBlock-slider-sliderItem-textBlock__subtitle">
            для детей
          </p>
          <ul class="sliderBlock-slider-sliderItem-textBlock__description">
            <li>Что-то для детей</li>
            <li>Тестостерон (только детский)</li>
            <li>Свободный и детский тестостерон</li>
            <li>Гематоген</li>
          </ul>
          <div class="sliderBlock-slider-sliderItem-textBlock-priceBlock">
            <p class="sliderBlock-slider-sliderItem-textBlock-priceBlock__price">
              Всего 5000₽
            </p>
            <p class="sliderBlock-slider-sliderItem-textBlock-priceBlock__oldPrice">
              7000₽
            </p>
          </div>
          <div class="sliderBlock-slider-sliderItem-textBlock-btnsBlock">
            <button class="sliderBlock-slider-sliderItem-textBlock-btnsBlock__firstBtn btn">Записаться</button>
            <button class="sliderBlock-slider-sliderItem-textBlock-btnsBlock__secondBtn btn">Подробнее</button>
          </div>
        </div>
        
      </div>

      <div class="sliderBlock-slider-sliderItem" id='sliderItem'>
      <div class="sliderBlock-slider-sliderItem-imageBlock">
          <img src='/assets/img/sliderImg4.jpg' alt='' class="sliderBlock-slider-sliderItem-imageBlock__image"/>
        </div>
        <div class="sliderBlock-slider-sliderItem-textBlock">
          <p class="sliderBlock-slider-sliderItem-textBlock__title">Check-UP</p>
          <p class="sliderBlock-slider-sliderItem-textBlock__subtitle">
            для пожилых
          </p>
          <ul class="sliderBlock-slider-sliderItem-textBlock__description">
            <li>Гормональный скрининг уже не поможет</li>
            <li>Тестостерон иссекает</li>
            <li>Уже не свободный тестостерон</li>
            <li>Глобулин, когда-то связывающий половые гормоны</li>
          </ul>
          <div class="sliderBlock-slider-sliderItem-textBlock-priceBlock">
            <p class="sliderBlock-slider-sliderItem-textBlock-priceBlock__price">
              Всего 1000₽
            </p>
            <p class="sliderBlock-slider-sliderItem-textBlock-priceBlock__oldPrice">
              3000₽
            </p>
          </div>
          <div class="sliderBlock-slider-sliderItem-textBlock-btnsBlock">
            <button class="sliderBlock-slider-sliderItem-textBlock-btnsBlock__firstBtn btn">Записаться</button>
            <button class="sliderBlock-slider-sliderItem-textBlock-btnsBlock__secondBtn btn">Подробнее</button>
          </div>
        </div>
        
      </div>

      
  </div>
  <div class='sliderBlock-slider-arrowBlock'>
          <div class='sliderBlock-slider-arrowBlock__leftArrow' id='prevBtn'></div>
          <div class="sliderBlock-slider-arrowBlock-counterBlock">
            <p class="sliderBlock-slider-arrowBlock-counterBlock__counter" id='counter'></p>
            <p class="sliderBlock-slider-arrowBlock-counterBlock__items" id='items'></p>
          </div>
          <div class='sliderBlock-slider-arrowBlock__rightArrow' id='nextBtn'></div>
        </div>
    </div>
  </div>
  <footer class='footer'>
    <div class='footer-content'>
        <img src="/assets/img/logoFooter.svg" alt="logo" class="footer-content__logo" />
        <ul class="footer-content-list">
          <li class="footer-content-list__item">
            <a class="footer-content-list__link">О клинике</a>
          </li>
          <li class="footer-content-list__item">
            <a class="footer-content-list__link">Услуги</a>
          </li>
          <li class="footer-content-list__item">
            <a class="footer-content-list__link">Специалисты</a>
          </li>
          <li class="footer-content-list__item">
            <a class="footer-content-list__link">Цены</a>
          </li>
          <li class="footer-content-list__item">
            <a class="footer-content-list__link">Контакты</a>
          </li>
        </ul>
    
      <div class='footer-content-contacts'>
      <img src='assets/img/instagram.png' alt='' class='footer-content-contacts__item' />
      <img src='assets/img/whatsapp.png' alt='' class='footer-content-contacts__item' />
      <img src='assets/img/telegram.png' alt='' class='footer-content-contacts__item' />
    </div>
    </div>
  </footer>

  <div class="popup" id="popup">
    <div class="popup-content">
        <span class="close" id="closePopup">&times;</span>
        <form id="emailForm">
            <label for="name">Имя:</label><br>
            <input type="text" id="name" name="name"><br>
            <label for="body">Сообщение:</label><br>
            <textarea class="popup-body" id="body" name="body"></textarea><br><br>
            <input type="submit" value="Отправить">
        </form>
    </div>
  </div>
  `;

// Определение функции togglePopup и обработчика события для кнопки
function togglePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = popup.style.display === 'block' ? 'none' : 'block';
}

document.getElementById('closePopup').addEventListener('click', togglePopup);
document.getElementById('openPopup').addEventListener('click', togglePopup);
document
  .getElementById('openPopupBurger')
  .addEventListener('click', togglePopup);

// Обработчик события для формы
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
