<template>

  <div>
    
    <content-panels :panels="Page.contentPanels"></content-panels>
    
  </div>

</template>

<script>

  
import {metaData} from '~/mixins/metaData.js';

export default {

  mixins: [metaData],
  
  async fetch( {store} ) {
    
    await store.dispatch('cms/getContentByCodename', {
      codename: "interior_decorating",
      mutation: 'cms/setContentByCodename',
      module: 'cms',
      name: 'interiorDecorating'    
    }) ; 
  },
  
  computed: {
    Page: function() {
      return this.$store.state.cms.interiorDecorating ; 
    }
  }
  
  
}

</script>

<style lang="scss">


</style>