<template>

  <div>
    
    <img class="title-image" src="~/assets/beaumont_decorating_logo.png"/>
    <button class="cta title-cta">Book a Quote</button>
    <content-panels :panels="Page.contentPanels"></content-panels>
    
  </div>

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


<style lang="scss">

  .title-image {
    @include column(24);
    @include x-pad(.2rem);
    margin-top: $outer-space-light;
    margin-bottom: $outer-space-medium;
  }
  
  .title-cta {
    display: block;
    margin: 0 auto;
    margin-bottom: $outer-space-heavy;
    font-size: 1.2rem;
  }
  
</style>


