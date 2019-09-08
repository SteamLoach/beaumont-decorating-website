import Vue from 'vue' ; 

import pageHeader from '~/components/page-header.vue';
import contentPanels from '~/components/content-panels.vue';
import contactForm from '~/components/contact-form.vue';
import svgLoader from '~/components/svg-loader.vue';


//misc
import scrollToChevron from '~/components/misc/scroll-to-chevron.vue';


Vue.component('page-header', pageHeader);
Vue.component('content-panels', contentPanels);
Vue.component('contact-form', contactForm);


//misc
Vue.component('svg-loader', svgLoader) ; 
Vue.component('scroll-to-chevron', scrollToChevron) ; 