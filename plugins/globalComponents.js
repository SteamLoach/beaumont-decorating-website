import Vue from 'vue' ; 

import topNav from '~/components/top-nav/top-nav.vue' ; 
import contentPanels from '~/components/content-panels.vue';
import pageHighlight from '~/components/page-highlight.vue';


Vue.component('top-nav', topNav); 
Vue.component('content-panels', contentPanels);
Vue.component('page-highlight', pageHighlight);