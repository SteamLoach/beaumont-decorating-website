<template>

  <main>
    
    <page-header :featureImage="Page.featureImage[0].url"
                 :title="Page.pageTitle"
                 :strapline="Page.pageStrapline"> 
  
      <nuxt-link class="cta title-cta"
                 to="#"> Book A Quote </nuxt-link>
    </page-header>

    <content-panels :panels="Page.contentPanels"></content-panels>
    
  </main>

</template>




<script>

import {metaData} from '~/mixins/metaData.js'; 
  
export default {
  
  mixins: [metaData],
     
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
      border-color: $brand-2;
    }
  }
  
</style>


