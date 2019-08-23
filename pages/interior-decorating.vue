<template>

  <div>
    
    <content-panels :panels="Page.contentPanels"></content-panels>
    
  </div>

</template>

<script>

  
import {metaData} from '~/mixins/metaData.js';

export default {

  mixins: [metaData],
  
  computed: {
    Page: function() {
      return this.$store.state.cms.interiorDecorating ; 
    }
  }
  
  
}

</script>

<style lang="scss">


</style>