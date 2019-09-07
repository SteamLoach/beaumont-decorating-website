<template>

  <main>
    
    <page-header :featureImage="Page.featureImage[0].url"
                 :title="Page.pageTitle"
                 :strapline="Page.pageStrapline"> 
  
      <button class="cta title-cta"
              @click="scrollToTarget('.teaser-panel')"> Book A Quote </button>
    </page-header>

    <content-panels :panels="Page.contentPanels"></content-panels>
    
    <contact-form></contact-form>
    
  </main>

</template>




<script>

import {metaData} from '~/mixins/metaData.js'; 
import {scrollPage} from '~/mixins/scrollPage.js';
  
import contactForm from '~/components/contact-form.vue';
  
export default {
  
  mixins: [metaData, scrollPage],
  
  components: {
    contactForm,
  },
     
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


