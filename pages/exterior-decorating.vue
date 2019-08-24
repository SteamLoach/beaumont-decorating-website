<template>

  <div>
  
    <page-highlight :content="Page.featureImage[0]"></page-highlight>
    
    <div class="page-header">
      <h1> Exterior Decorating Services </h1>
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
      return this.$store.state.cms.exteriorDecorating ; 
    },   
  }
}
  
</script>

<style lang="scss">


  
</style>