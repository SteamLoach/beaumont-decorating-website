import Vue from 'vue' ; 

import pageHeader from '~/components/page-header.vue';
import pageIntro from '~/components/page-intro.vue';
import contentPanels from '~/components/content-panels/Content-Panel-Loader.vue';
import contactForm from '~/components/contact-form.vue';
import svgLoader from '~/components/svg-icons/Svg-Loader.vue';


//misc
import scrollToChevron from '~/components/utilities/scroll-to-chevron.vue';


Vue.component('page-header', pageHeader);
Vue.component('page-intro', pageIntro);
Vue.component('content-panels', contentPanels);
Vue.component('contact-form', contactForm);


//misc
Vue.component('svg-loader', svgLoader) ; 
Vue.component('scroll-to-chevron', scrollToChevron) ; 