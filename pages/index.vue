<template>

  <main>
    
    <!-- Maybe look at creating a distinct page header content model -->
    <page-header :featureImage="Page.featureImage[0].url"
                 :title="Page.pageTitle"
                 :strapline="Page.pageStrapline"> 
    </page-header>
    
    <page-intro class="homepage-intro"
                :title="Page.pageTitle"
                :intro="Page.pageIntro"> 
      <contact-form></contact-form> 
    </page-intro>
    
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


<style lang="scss">
  
  .homepage-intro {
    
    .contact-form {
      @include absolute-from($laptop, $bottom: -15%);
      
      label {display: none;}
    }
  }
    
</style>


