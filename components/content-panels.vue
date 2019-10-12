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
  
export default {
  
  props: ['panels'],
  
  components: {
    servicePanel,
    reviewPanel,
    recentProjectPanel
  }
  
}

</script>

<style lang="scss">

  //Content Panels
  .content-panel-wrapper {@extend %content-panel-wrapper;}
  .content-panel {@extend %content-panel;}
  .content-panel-title {@extend %content-panel-title;}
  
  //Content Items
  .content-item-wrapper {@extend %content-item-wrapper;}

</style>

