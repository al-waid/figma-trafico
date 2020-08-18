import { Component } from '@angular/core';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'trafico';

  config: SwiperConfigInterface = {
    /* a11y: true,
    direction: 'horizontal',    
    slideToClickedSlide: true,
    mousewheel: true,
    scrollbar: false,
    watchSlidesProgress: true,
    navigation: true,
    keyboard: true,
    pagination: false,
    centeredSlides: false,    
    roundLengths: true,
    updateOnWindowResize: true, */
    
    loop: true,
    slidesPerView: 1,
    speed:3000,
    autoplay: true,
    navigation: true,
    spaceBetween: 20,
    breakpoints: {
        // when window width is >= 320px
        768: {
            slidesPerView: 1
        },
        992: {
          slidesPerView: 2
        },
        1200: {
          slidesPerView: 3
        }

    }
}

testis = [
  {
    name: "John Doe",
    poste: "Artiste",
    img: "https://via.placeholder.com/100",
    msg: "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla."
  },
   {
    name: "Jane Doe",
    poste: "Ps vita",
    img: "https://via.placeholder.com/100",
    msg: "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla."
  },
  {
    name: "Melanie Doe",
    poste: "Journaliste",
    img: "https://via.placeholder.com/100",
    msg: "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla."
  },
  {
    name: "Kayode W",
    poste: "Web Art",
    img: "https://via.placeholder.com/100",
    msg: "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla."
  },
  {
    name: "Waidi K",
    poste: "Art code",
    img: "https://via.placeholder.com/100",
    msg: "Suspendisse ultrices at diam lectus nullam. Nisl, sagittis viverra enim erat tortor ultricies massa turpis. Arcu pulvinar aenean nam laoreet nulla."
  } 
];
}
