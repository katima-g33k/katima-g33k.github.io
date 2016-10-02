function isPhone() {
  return window.phone;
}

function isTablet() {
  return window.tablet;
}

function isMobile() {
  return window.Slideout || isPhone() || isTablet();
}

function isDesktop() {
  return !isMobile();
}

function isLandscape() {
  return isDesktop() || window.orientation == 0;
}

function isPortrait() {
  return window.orientation == 90;
}

function removeBr() {
  const nodes = [].slice.call(document.getElementsByTagName('br'));
  nodes.forEach((br) => {
		br.parentNode.removeChild(br);
  });
}

function createMenuButton() {
  const e = document.createElement('span');

  e.setAttribute('id', 'menuButton');
  e.classList.add('oi');
  e.classList.add('clickable');
  e.setAttribute('data-glyph', 'menu');
  e.setAttribute('aria-hidden', 'true');

  return e;
}

function goMobile() {
  const body = document.body;
  const header = document.getElementsByTagName('header')[0];
  const main = document.getElementsByTagName('main')[0];
  const panel = document.getElementById('wrapper');

  const slideout = new Slideout({
    panel,
    menu: nav,
    padding: 256,
    tolerance: 70,
  });

  menuButton.addEventListener('click', () => {
    slideout.toggle();
  });

  main.addEventListener('click', () => {
    slideout.close();
  });

  header.removeChild(nav);
  header.appendChild(menuButton);
  body.insertBefore(nav, body.childNodes[0]);
}

function goDesktop() {
  const body = document.body;
  const main = document.getElementsByTagName('main')[0];

  body.removeChild(nav);
  header.removeChild(menuButton);
  header.appendChild(nav);
}

function scrollHeader() {
  header.style.top = window.pageYOffset + 'px';
}

function headerProperties() {
  if (window.innerWidth < minWidth) {
    header.style.position = 'absolute';
    scrollHeader();
    $(window).scroll(scrollHeader);
  } else {
    header.style.position = 'fixed';
    header.style.top = 0;
    $(window).off('scroll', scrollHeader);
  }
}

/*=============================================================================|
| Execution                                                                    |
|=============================================================================*/
const minWidth = 880;
let header = document.getElementsByTagName('header')[0];
let menuButton;
let nav;

if (isMobile()) {
  menuButton = createMenuButton();
  nav = document.getElementsByTagName('nav')[0];

  if (isPhone()) {
    goMobile();
  } else {
    // Is tablet
    if (isPortrait()) {
      goMobile();
    }

    $(window).on('orientationchange', () => {
      if (isPortrait()) {
        goMobile();
      } else {
        goDesktop();
      }
    });
  }

  removeBr();
} else {              // Is desktop
  headerProperties();
  $(window).resize(headerProperties);
}
