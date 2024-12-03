/*
* File: app.java
* Author: Sallai András
* Copyright: 2024, Sallai András
* Group: szit.hu
* Date: 2024-12-03
* Github: https://github.com/oktat/terhombdiag
* Licenc: MIT
*/

import {calcArea} from './utils.js';

const doc = {
  ediagonalInput: document.querySelector('#ediagonal'),
  fdiagonalInput: document.querySelector('#fdiagonal'),
  areaInput: document.querySelector('#area'),
  calcButton: document.querySelector('#calcButton'),
  aboutButton: document.querySelector('#aboutButton'),
}

doc.calcButton.addEventListener('click', () => {
  const ediagonal = Number(doc.ediagonalInput.value);
  const fdiagonal = Number(doc.fdiagonalInput.value);
  const area = calcArea(ediagonal, fdiagonal);
  doc.areaInput.value = area;
})

doc.aboutButton.addEventListener('click', () => {
  alert("Sallai András\nLicenc: MIT\n2024-12-03");
})
