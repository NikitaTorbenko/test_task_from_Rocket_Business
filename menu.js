export const menuFunc = () => {
  const menu = document.querySelector("#menu");
  const menuContent = document.querySelector("#menuContent");
  const routesBtn = document.querySelector('.routes__button');
  const routesList = document.querySelector('.routes-list')
  let isOpen = false;

  menu.innerHTML = `<svg width="37" height="26" viewBox="0 0 37 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="37" height="4" fill="#1FA181"/>
      <rect y="11" width="37" height="4" fill="#1FA181"/>
      <rect y="22" width="37" height="4" fill="#1FA181"/>
      </svg>`;

  menu.addEventListener("click", (e) => {
    isOpen = !isOpen;

    if (isOpen) {
      menu.innerHTML = `<svg width="29" height="30" viewBox="0 0 29 30" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect y="27.1628" width="37" height="4" transform="rotate(-45 0 27.1628)" fill="#1FA181"/>
      <rect x="2.83276" y="0.504395" width="37" height="4" transform="rotate(45 2.83276 0.504395)" fill="#1FA181"/>
      </svg>`;

      if (window.innerWidth < 1270) {
        setTimeout(() => routesBtn.style.display = 'block', 50)
        routesList.style.display='block'
        menuContent.style.height = '100vh'
        menuContent.style.paddingTop = '48px'
      }
    } else {
      menu.innerHTML = `<svg width="37" height="26" viewBox="0 0 37 26" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="37" height="4" fill="#1FA181"/>
      <rect y="11" width="37" height="4" fill="#1FA181"/>
      <rect y="22" width="37" height="4" fill="#1FA181"/>
      </svg>`;
      if (window.innerWidth < 1270) {
        setTimeout(() => routesBtn.style.display = 'none', 200)
        menuContent.style.height = '0vh'
        menuContent.style.paddingTop = '0'
        setTimeout(() => routesList.style.display='none', 350)
        
      }
      
    }
  });
};
