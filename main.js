function pt() {
  const elementos = document.querySelectorAll('[class*="k2-pt-"]');

  elementos.forEach((elemento) => {
    const clases = elemento.classList;
    clases.forEach((clase) => {
      const match = clase.match(/k2-pt-\[\s*([^\]]*)\s*\]/);
      if (match) {
        const paddingSize = match[1];
        elemento.style.paddingTop = paddingSize;
      }
    });
  });
}
function pb() {
  const elementos = document.querySelectorAll('[class*="k2-pb-"]');

  elementos.forEach((elemento) => {
    console.log(1);
    const clases = elemento.classList;
    clases.forEach((clase) => {
      const match = clase.match(/k2-pb-\[\s*([^\]]*)\s*\]/);
      if (match) {
        const paddingSize = match[1];
        elemento.style.paddingBottom = paddingSize;
      }
    });
  });
}
function pl() {
  const elementos = document.querySelectorAll('[class*="k2-pt-"]');
  elementos.forEach((elemento) => {
    const clases = elemento.classList;
    clases.forEach((clase) => {
      const match = clase.match(/k2-pl-\[\s*([^\]]*)\s*\]/);
      if (match) {
        const paddingSize = match[1];
        elemento.style.paddingLeft = paddingSize;
      }
    });
  });
}
function pr() {
  const elementos = document.querySelectorAll('[class*="k2-pt-"]');

  elementos.forEach((elemento) => {
    const clases = elemento.classList;
    clases.forEach((clase) => {
      const match = clase.match(/k2-pr-\[\s*([^\]]*)\s*\]/);
      if (match) {
        const paddingSize = match[1];
        elemento.style.paddingRight = paddingSize;
      }
    });
  });
}

function width() {
  const elementos = document.querySelectorAll('[class*="k2-w-"]');

  elementos.forEach((elemento) => {
    const clases = elemento.classList;
    clases.forEach((clase) => {
      const match = clase.match(/k2-w-\[\s*([^\]]*)\s*\]/);
      if (match) {
        const width = match[1];
        elemento.style.width = width;
      }
    });
  });
}

function height() {
  const elementos = document.querySelectorAll('[class*="k2-w-"]');

  elementos.forEach((elemento) => {
    const clases = elemento.classList;
    clases.forEach((clase) => {
      const match = clase.match(/k2-h-\[\s*([^\]]*)\s*\]/);
      if (match) {
        const height = match[1];
        elemento.style.height = height;
      }
    });
  });
}
function color() {
  const elementos = document.querySelectorAll('[class*="k2-color-"]');

  elementos.forEach((elemento) => {
    const clases = elemento.classList;
    clases.forEach((clase) => {
      const match = clase.match(/k2-color-\[\s*([^\]]*)\s*\]/);
      if (match) {
        const color = match[1];
        elemento.style.color = color;
      }
    });
  });
}
function fontFamily() {
  const elementos = document.querySelectorAll('[class*="k2-ff-"]');

  elementos.forEach((elemento) => {
    const clases = elemento.classList;
    clases.forEach((clase) => {
      const match = clase.match(/k2-ff-\[\s*([^\]]*)\s*\]/);
      if (match) {
        const fontFamily = match[1];
        elemento.style.fontFamily = fontFamily;
      }
    });
  });
}

function border() {
  const elementos = document.querySelectorAll('[class*="k2-b"]');
  elementos.forEach((elemento) => {
    const clases = elemento.classList;
    clases.forEach((clase) => {
      const match = clase.match(/k2-b\d*-\[\s*([a-zA-Z0-9#]+|[a-zA-Z]+)\s*\]/);
      if (match) {
        const pixels = match[0].split("b")[1].split("-")[0];
        const color = match[1];
        console.log(pixels, color);
        elemento.style.border = `${pixels}px solid ${color}`;
      }
    });
  });
}
function borderSides() {
  const elementos = document.querySelectorAll('[class*="k2-b"]');
  elementos.forEach((elemento) => {
    const clases = elemento.classList;
    clases.forEach((clase) => {
      const match = clase.match(
        /k2-(b[lr]?[tb]?)(\d+)-\[\s*([a-zA-Z0-9#]+|[a-zA-Z]+)\s*\]/
      );
      if (match) {
        const direccion = match[1]; // 'b', 'bl', 'br', 'bt' o 'bb'
        const pixels = match[2];
        const color = match[3];

        switch (direccion) {
          case "b":
            elemento.style.borderBottom = `${pixels}px solid ${color}`;
            break;
          case "bl":
            elemento.style.borderLeft = `${pixels}px solid ${color}`;
            break;
          case "br":
            elemento.style.borderRight = `${pixels}px solid ${color}`;
            break;
          case "bt":
            elemento.style.borderTop = `${pixels}px solid ${color}`;
            break;
          case "bb":
            elemento.style.borderBottom = `${pixels}px solid ${color}`;
            break;
          // Puedes agregar más casos según sea necesario
        }
      }
    });
  });
}
function bg() {
  const elementos = document.querySelectorAll('[class*="k2-bg-"]');
  elementos.forEach((elemento) => {
    const clases = elemento.classList;
    clases.forEach((clase) => {
      const match = clase.match(/k2-bg-\[\s*([^\]]*)\s*\]/);
      if (match) {
        const background = match[1];
        elemento.style.background = background;
      }
    });
  });
}

const executador = (event) => {
  const exist_element = document.querySelectorAll('[class*="k2-"]');
  if (exist_element) {
    pt(event);
    pb(event);
    pl(event);
    pr(event);
    width(event);
    height(event);
    color(event);
    fontFamily(event);
    border(event);
    borderSides(event);
    bg(event);
  } else {
    return;
  }
};

document.addEventListener("DOMContentLoaded", executador);
