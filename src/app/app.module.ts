import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SwiperModule, SwiperConfigInterface, SWIPER_CONFIG } from 'ngx-swiper-wrapper';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FaqComponent } from './components/faq/faq.component';
import { FaqQrComponent } from './components/faq-qr/faq-qr.component';
import { TestimonialComponent } from './components/testimonial/testimonial.component';
import { QuickContactComponent } from './components/quick-contact/quick-contact.component';


const DEFAULT_SWIPER_CONFIG: SwiperConfigInterface = {
  observer: true,
  direction: 'horizontal',
  threshold: 50,
  spaceBetween: 5,
  slidesPerView: 3,
  centeredSlides: true
};

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FaqComponent,
    FaqQrComponent,
    TestimonialComponent,
    QuickContactComponent
  ],
  imports: [
    BrowserModule,
    SwiperModule
  ],
  providers: [
    {
      provide: SWIPER_CONFIG,
      useValue: DEFAULT_SWIPER_CONFIG
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
