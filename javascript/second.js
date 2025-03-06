import { information } from "./information.js";
//TODO:find a solution and link every flat to his own information using id or find something else
const params = new URLSearchParams(window.location.search);
const urunId = params.get('id');

const urun = information.find(u => u.id == urunId);
if(urun){
    document.getElementById('slide-1').src = urun.image1;
    document.getElementById('slide-2').src = urun.image2;
    document.getElementById('slide-3').src = urun.image3;
    document.getElementById('slide-4').src = urun.image4;
    document.getElementById('slide-5').src = urun.image5;
    document.getElementById('slide-6').src = urun.image6;
    document.getElementById('slide-7').src = urun.image7;
    document.getElementById('slide-8').src = urun.image8;
    document.getElementById('slide-9').src = urun.image9;
    document.getElementById('slide-10').src = urun.image10;
    document.getElementById('slide-11').src = urun.image11;
    document.getElementById('slide-12').src = urun.image12;
    document.getElementById('slide-13').src = urun.image13;
    document.getElementById('slide-14').src = urun.image14;
    document.getElementById('slide-15').src = urun.image15;
    document.getElementById('slide-16').src = urun.image16;
    document.getElementById('slide-17').src = urun.video;
    document.getElementById('addressHref').href = urun.maps;
    document.getElementById('address').textContent = urun.address;
    document.getElementById('rooms').textContent = urun.rooms;
    document.getElementById('floor').textContent = urun.floor;
    document.getElementById('type').textContent = urun.type;
    document.getElementById('gender').textContent = urun.gender;
    document.getElementById('price').textContent = urun.price;
    document.getElementById('paymentType').textContent = urun.paymentType;
    document.getElementById('aptArea').textContent = urun.apartmentErea;
    document.getElementById('deposit').textContent = urun.deposit;
    document.getElementById('commission').textContent = urun.commission;
    
}else{
    document.body.innerHTML = '<h1>IT`S NOT AVAILABLE FOR NOW</h1>';
}

document.getElementById('one').textContent = "+90 531 284 34 19";
document.getElementById('two').textContent = "+90 535 961 77 58";

// next and previos buutons functionality

document.querySelector('.next').addEventListener('click', nextSlide);
document.querySelector('.prev').addEventListener('click', prevSlide);

let currentIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

export function nextSlide() {
  currentIndex = (currentIndex + 1) % slides.length;
  showSlide(currentIndex);
}

export function prevSlide() {
  currentIndex = (currentIndex - 1 + slides.length) % slides.length;
  showSlide(currentIndex);
}


showSlide(currentIndex);


//opening a fullscreen image  
document.querySelector('.close').addEventListener('click', closeModal);
document.querySelector('.modalNext').addEventListener('click', nextModalImage);
document.querySelector('.modalPrev').addEventListener('click', prevModalImage);
const images = document.querySelectorAll('.slides img');
  images.forEach((img) => {
    img.addEventListener('click', () => openModal(img.src));
  });
const imageSources = Array.from(images).map(img => img.src);
let currentModalIndex = 0;

function openModal(src) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    currentModalIndex = imageSources.indexOf(src);
    modal.style.display = 'block';
    modalImage.src = src;
  }
  
  function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
  }
  function nextModalImage() {
    currentModalIndex = (currentModalIndex + 1) % imageSources.length; 
    document.getElementById('modalImage').src = imageSources[currentModalIndex];
  }
 
  function prevModalImage() {
    currentModalIndex =
      (currentModalIndex - 1 + imageSources.length) % imageSources.length; 
    document.getElementById('modalImage').src = imageSources[currentModalIndex];
  }
  
  images.forEach((img) => {
    img.addEventListener('click', () => openModal(img.src));
  });
  
  
  

//safari css solution

  var isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
  if (isSafari) {
      document.body.classList.add('safari');
  }