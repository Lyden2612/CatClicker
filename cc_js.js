const menu = document.querySelectorAll('.menu');
const infText = document.querySelectorAll('.inf');
const playBut = document.querySelectorAll('.play');
const Troph = document.querySelectorAll('.trp');
// Масив з посиланнями на елементи котів
  const catPics = [
    document.getElementById("cat1"),
    document.getElementById("cat2"),
    document.getElementById("cat3"),
    document.getElementById("cat4"),
    document.getElementById("cat5"),
    document.getElementById("cat6"),
    document.getElementById("cat7"),
    document.getElementById("cat8"),
    document.getElementById("cat9"),
    document.getElementById("cat10"),
    document.getElementById("cat11"),
    document.getElementById("cat12"),
    document.getElementById("cat13"),
    document.getElementById("cat14"),
    document.getElementById("cat15"),
    document.getElementById("cat16"),
    document.getElementById("cat17"),
    document.getElementById("cat18"),
    document.getElementById("cat19"),
    document.getElementById("cat20"),
    document.getElementById("cat21"),
    document.getElementById("cat22"),
    document.getElementById("cat23"),
    document.getElementById("cat24"),
    document.getElementById("cat25"),
    document.getElementById("cat26"),
    document.getElementById("cat27"),
    document.getElementById("cat28"),
    document.getElementById("cat29"),
    document.getElementById("cat30"),
    document.getElementById("cat31"),
    document.getElementById("cat32"),
    document.getElementById("cat33"),
    document.getElementById("cat34"),
    document.getElementById("cat35"),
    document.getElementById("cat36"),
    document.getElementById("cat37"),
    document.getElementById("cat38"),
    document.getElementById("cat39"),
    document.getElementById("cat40"),
    document.getElementById("cat41"),
    document.getElementById("cat42"),
    document.getElementById("cat43"),
    document.getElementById("cat44"),
    document.getElementById("cat45"),
    document.getElementById("cat46"),
    document.getElementById("cat47"),
    document.getElementById("cat48"),
    document.getElementById("cat49"),
    document.getElementById("cat50"),
  ];

  const catCount = catPics.length; // автоматичне визначення кількості

  document.getElementById('click').addEventListener('click', () => {
    // Сховати всі коти
    catPics.forEach(cat => {
      if (cat) {
        cat.style.display = 'none';
      }
    });

    // Випадкове число в діапазоні
    const randomNumber = Math.floor(Math.random() * catCount);

    // Показати випадкового кота якщо існує
    const selectedCat = catPics[randomNumber];
    if (selectedCat) {
      selectedCat.style.display = 'inline'; // або 'block'
    }
  });
function inf() {
  menu.forEach(e => e.style.display = 'none');
  infText.forEach(e => e.style.display = 'block');
}
function rttm() {
  menu.forEach(e => e.style.display = 'flex');
  infText.forEach(e => e.style.display = 'none');
  playBut.forEach(e => e.style.display = 'none');
  Troph.forEach(e => e.style.display = 'none');
document.querySelectorAll('.pht').forEach(e => e.style.display = 'none');
    }

function play() {
  menu.forEach(e => e.style.display = 'none');
  playBut.forEach(e => e.style.display = 'flex');
}
const image = document.getElementById('1img')
const image2 = document.getElementById('2img')
const image3 = document.getElementById('3img')
function troph() {
  menu.forEach(e => e.style.display = 'none');
  Troph.forEach(e => e.style.display = 'flex');
    count++;
if (count >= 100){
image.src='brz.jpg';
}
if (count >= 1000){
image2.src='sbr.jpg';
}
if (count >= 10000){
image3.src='gld.jpg';
}}
let count = 0;
const counterSpan = document.getElementById('span');
const clickerAdd = document.getElementById('click');
const progressBarFill = document.querySelector('.progress-bar-fill');

clickerAdd.addEventListener("click", () => {
  count += 1;
  counterSpan.textContent = Math.floor(count);
  // Оновлюємо прогрес-бар
  if (progressBarFill) {
    progressBarFill.style.width = Math.min(count, 100) + "%";
  }
});

// Початкові значення і цілі
let count1 = 0;
let count2 = 0;
let count3 = 0;

const max1 = 100;
const max2 = 1000;
const max3 = 10000;

const span1 = document.getElementById('cnt1');
const span2 = document.getElementById('cnt2');
const span3 = document.getElementById('cnt3');

const bar1 = document.getElementById('bar1');
const bar2 = document.getElementById('bar2');
const bar3 = document.getElementById('bar3');

// Функція для оновлення прогрес-барів і тексту
function updateProgress() {
  // Оновлюємо для 1-го рівня
  if (count1 < max1) {
    count1++;
    span1.textContent = count1;
    bar1.style.width = (count1 / max1) * 100 + '%';
  }

  // Оновлюємо для 2-го рівня
  if (count2 < max2) {
    count2++;
    span2.textContent = count2;
    bar2.style.width = (count2 / max2) * 100 + '%';
  }

  // Оновлюємо для 3-го рівня
  if (count3 < max3) {
    count3++;
    span3.textContent = count3;
    bar3.style.width = (count3 / max3) * 100 + '%';
  }
}

// Обробник натискання на кнопку
document.getElementById('click').addEventListener('click', () => {
  updateProgress();
});
