import Vue from 'vue' ; 

import topNav from '~/components/top-nav/top-nav.vue' ; 
import pageHeader from '~/components/page-header.vue';
import contentPanels from '~/components/content-panels.vue';
import cornerSwatches from '~/components/corner-swatches.vue';


Vue.component('top-nav', topNav); 
Vue.component('page-header', pageHeader);
Vue.component('content-panels', contentPanels);
Vue.component('corner-swatches', cornerSwatches);