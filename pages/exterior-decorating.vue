<template>

  <div>
  
    <page-header :featureImage="Page.featureImage[0].url"
                 :title="Page.pageTitle"
                 :strapline="Page.pageStrapline">
      <scroll-to-chevron :scrollTarget="'.page-feature-image'"></scroll-to-chevron>
    </page-header>
    
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