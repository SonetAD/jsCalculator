let valarray = [];

let symbollist = [];
let temnum = '';
let output = 0;
let doclist = document.querySelectorAll('button');

doclist.forEach(function (n) {
  n.addEventListener('click', function () {
    if (
      n.textContent == '/' ||
      n.textContent == '*' ||
      n.textContent == '+' ||
      n.textContent == '-'
    ) {
      symbollist.push(n.textContent);
      valarray.push(Number(temnum));
      temnum = '';
      document.querySelector(
        '.output'
      ).innerHTML = `<h1 id='result'>${n.textContent}</h1>`;
    } else if (n.textContent == 'DEL') {
      valarray = [];
      output = 0;
      symbollist = [];
      temnum = '';
      document.querySelector('.output').innerHTML = '<h1></h1>';
    } else if (n.textContent == '=') {
      if (temnum.length != 0) {
        valarray.push(Number(temnum));
      }
      for (let i = 0; i < valarray.length; i++) {
        if (i == 0) {
          output += valarray[i];
        } else {
          let temsymbol = symbollist[i - 1];
          if (temsymbol == '+') {
            output += valarray[i];
          } else if (temsymbol == '-') {
            output -= valarray[i];
          } else if (temsymbol == '*') {
            output *= valarray[i];
          } else {
            output /= valarray[i];
          }
        }
      }
      document.querySelector(
        '.output'
      ).innerHTML = `<h1 class='final' id='result'>${output}</h1>`;
    } else {
      temnum += String(n.textContent);
      document.querySelector(
        '.output'
      ).innerHTML = `<h1 id='result'>${temnum}</h1>`;
    }
  });
});
