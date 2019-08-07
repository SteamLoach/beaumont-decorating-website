<template>

  <div class="page-wrapper"
       :style="background">
    <h1 class="box">Index</h1>
  </div>

</template>




<script>

import {pageResolver} from '~/mixins/pageResolver.js'; 
import {backgroundImage} from '~/mixins/backgroundImage.js' ;

  
export default {
  
  //this can probably be a mixin
  head() {
    return {
      title: this.Page.metaTitle
    }
  },
  
  async fetch ({store}) {
    await store.dispatch('getPage', {codename: "home_page", fill: 
      "homePage"}) ; 
  },
  
  mixins: [pageResolver, backgroundImage],
  
  computed: {
    
    background: function() {
      return this.setBackground(this.Page.backgroundImageAssets[1].url) ; 
    }
    
  },
  
  data() {
    return {
      mxn_StoreReference: 'homePage'
    }
  },
  
  
}
  
</script>


<style lang="scss">

  .page-wrapper {
    width: 100%;
    min-height: 100vh;
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
  }
  
</style>


