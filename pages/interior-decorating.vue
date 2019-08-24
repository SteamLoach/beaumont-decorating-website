<template>

  <div>
  
    <page-highlight :content="Page.featureImage[0]"></page-highlight>
    
    <div class="page-header">
      <h1> Interior Decorating Services </h1>
    </div>
    
    <content-panels :panels="Page.contentPanels"></content-panels>
  
  </div>

</template>

<script>

  
import {metaData} from '~/mixins/metaData.js';
import {backgroundImage} from '~/mixins/backgroundImage.js';
  
export default {

  mixins: [metaData, backgroundImage],
  
  computed: {
    Page: function() {
      return this.$store.state.cms.interiorDecorating ; 
    }, 
  }
}

</script>

<style lang="scss">
  


</style>