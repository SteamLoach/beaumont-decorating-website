<template>

  <section class="content-panels">
    <component v-for="panel in panels"
               :is="panel.componentReference"
               :key="panel.id"
               :content="panel"></component>
  </section>

</template>


<script>

  
  
import teaserPanel from '~/components/content-panels/teaser-panel.vue';
import servicePanel from '~/components/content-panels/service-panel.vue';
import reviewPanel from '~/components/content-panels/review-panel.vue' ; 
  
export default {
  
  props: ['panels'],
  
  components: {
    teaserPanel,
    servicePanel,
    reviewPanel
  }
  
}

</script>

<style lang="scss">

  .content-panels {
    @include row(center,center);
  }

</style>

