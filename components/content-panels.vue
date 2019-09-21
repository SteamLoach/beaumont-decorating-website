<template>

  <section class="content-panels">
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

  .content-panels {
    @include row(center,center);
  }

</style>

