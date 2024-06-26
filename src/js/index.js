// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

/* const rootStyles = document.documentElement.style;

rootStyles.setProperty('--primary-color', 'green'); */

//Crea un div de color rojo y colócalo en la parte superior izquierda de tu web. Haz que tu web tenga un min-height de 500vh para generar scroll. El div deberá sincronizarse con el scroll, si estás arriba del todo medirá 0 de ancho y si está abajo del todo medirá el 100%, según vayas haciendo scroll el div deberá ir creciendo o encogiendo en función de si subes o bajas.

//Añade un h1 al ejercicio anterior que te diga cuantos px te has desplazado.

const rootStyles = document.documentElement.style;
const scrollCountElement = document.getElementById('scroll-count');

const BoxScroll = event => {
  const totalHeight = document.body.scrollHeight - window.innerHeight;
  //console.log(totalHeight);
  const scroll = window.scrollY;

  scrollCountElement.textContent = Math.round(scroll);

  const boxWidth = (scroll * 100) / totalHeight;
  //console.log(boxWidth)

  rootStyles.setProperty('--box-width', boxWidth + '%');
};

window - addEventListener('scroll', BoxScroll);

//Crea dos botones en tu web para que al pulsarlos generen un color aleatorio para el body y se aplique. Haz una función para generarlo en RGB y otra para generarlo en hexadecimal y ejecuta cada una desde un botón

const ButtonRGBElement = document.getElementById('button-rgb');
const ButtonHexaElement = document.getElementById('button-hexa');

const ColorRBG = () => {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  const randomColor = `rgb (${red}, ${green}, ${blue}) `;

  rootStyles.setProperty('--bg-color', randomColor);
};

const ColorHexa = () => {
  const values = '0123456789ABCDEF';
  let color = '#';
  for (let i = 0; i < 6; i++) {
    const randomPosition = Math.floor(Math.random() * values.length - 1);
    const randomCharacter = values.charAt(randomPosition);
    color += randomCharacter;
  }

  rootStyles.setProperty('--bg-color', color);
};

ButtonRGBElement.addEventListener('click', ColorRBG);
ButtonHexaElement.addEventListener('click', ColorHexa);

//Crea un div de 20px x 20px y sincronizalo con el movimiento del ratón, el div deberá quedarse pegado a la flecha de tu ratón y moverse junto a él.
const boxPosition = event => {
  rootStyles.setProperty('--top', event.y + 'px');
  rootStyles.setProperty('--left', event.x + 'px');
};
window.addEventListener('mousemove', boxPosition);
