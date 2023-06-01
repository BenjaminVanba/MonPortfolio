import './assets/main.css'

import { createApp } from 'vue'
import { createPinia } from 'pinia'

import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(createPinia())
app.use(router)

app.mount('#app')

function parallax_height() {
    var scroll_top = $(this).scrollTop();
    var sample_section_top = $(".sample-section").length ? $(".sample-section").offset().top : 0;
    var header_height = $(".sample-header-section").outerHeight();
    $(".sample-section").css({ "margin-top": header_height });
    $(".sample-header").css({ height: header_height - scroll_top });
}
parallax_height();
$(window).scroll(function () {
    parallax_height();
});
$(window).resize(function () {
    parallax_height();
});
$(document).ready(function() {
    parallax_height();
  });
  
  $(window).on('load resize', function() {
    parallax_height();
  });
