<template>

  <main class=sandbox>
  
    <service-panel :content="Page.contentPanels[0]"></service-panel>
  
  </main>

</template>



<script>

import servicePanel from '~/components/content-panels/service-panel.vue';
  
export default {
  components: {
    servicePanel,
  },
  
  computed: {
    Page: function() {
      return this.$store.state.cms.exteriorDecorating ; 
    }
  }
}

</script>


<style lang="scss">

  .top-nav {
    display: none;
  }
  
  .sandbox {
    @include row(center, center);
    min-height: 100vh;
  }
  
  

</style>