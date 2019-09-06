<template>

  <main>
    
    <page-header :featureImage="Page.featureImage[0].url"
                 :title="Page.pageTitle"
                 :strapline="Page.pageStrapline"> 
  
      <button class="cta title-cta"
              @click="scrollToTarget('.page-feature-image')"> Book A Quote </button>
    </page-header>

    <content-panels :panels="Page.contentPanels"></content-panels>
    
  </main>

</template>




<script>

import {metaData} from '~/mixins/metaData.js'; 
import {scrollPage} from '~/mixins/scrollPage.js';
  
export default {
  
  mixins: [metaData, scrollPage],
     
  computed: {
    Page: function() {
      return this.$store.state.cms.homePage ; 
    }
  }
    
}
  
</script>


<style lang="scss" scoped>
  
  .title-cta {
    @extend %cta;
    font-size: 1.2rem;
    color: $offset-font-color;
    border-color: $project-border-color;
    
    &:hover {
      border-color: $brand-1;
    }
  }
  
</style>


