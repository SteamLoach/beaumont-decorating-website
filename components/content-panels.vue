<template>

  <section>
    <component v-for="panel in panels"
               :is="panel.componentReference"
               :key="panel.id"
               :content="panel"></component>
  </section>

</template>


<script>

import teaserPanel from '~/components/content-panels/teaser-panel.vue';
import servicePanel from '~/components/content-panels/service-panel.vue';
  
export default {
  
  props: ['panels'],
  
  components: {
    teaserPanel,
    servicePanel
  }
  
}

</script>

