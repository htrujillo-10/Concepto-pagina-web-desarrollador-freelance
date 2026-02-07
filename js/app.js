// import Swiper JS
import Swiper from 'swiper';
import { Navigation, Pagination } from 'swiper/modules';
// import Swiper styles
import 'swiper/css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';


const swiper = new Swiper('.swiper', {

  // configure Swiper to use modules
  modules: [Navigation, Pagination],
  // Optional parameters
  observer: true,
  observeParents: true,
  direction: 'horizontal',
  loop: true,
  speed: 500,
  spaceBetween: 30,

  // If we need pagination
  pagination:{
    el: '.swiper-pagination',
    type: 'bullets',
    clickable: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    addIcons: true,
  },

  // And if we need scrollbar
  scrollbar: {
    el: '.swiper-scrollbar',
  },
});