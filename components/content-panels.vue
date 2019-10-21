<template>

  <section class="content-panel-wrapper">
    <component v-for="panel in panels"
               :is="panel.componentReference"
               :key="panel.id"
               :content="panel"></component>
  </section>

</template>


<script>
  
import servicePanel from '~/components/content-panels/service-panel.vue';
import reviewPanel from '~/components/content-panels/review-panel.vue' ; 
import recentProjectPanel from '~/components/content-panels/recent-project-panel.vue' ;
import galleryPanel from '~/components/content-panels/gallery-panel.vue' ;
  
export default {
  
  props: ['panels'],
  
  components: {
    servicePanel,
    reviewPanel,
    recentProjectPanel,
    galleryPanel
  }
  
}

</script>

<style lang="scss">

  //Content Panels
  .content-panel-wrapper {@extend %content-panel-wrapper;}

</style>

