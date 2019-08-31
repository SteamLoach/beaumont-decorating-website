import Vue from 'vue' ; 

import pageHeader from '~/components/page-header.vue';
import contentPanels from '~/components/content-panels.vue';


//misc
import scrollToChevron from '~/components/misc/scroll-to-chevron.vue';


Vue.component('page-header', pageHeader);
Vue.component('content-panels', contentPanels);


//misc
Vue.component('scroll-to-chevron', scrollToChevron)