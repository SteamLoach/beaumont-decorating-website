<template>

  <div class="page-wrapper"
       :style="background">
    
    <nav>
      <nuxt-link v-for="item in navItems"
                 :to="item.route.value"> {{item.title.value}} </nuxt-link>
  
    </nav>
    
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
    
    await store.dispatch('getContentByCodename', {codename: "home_page", fill: 
      "homePage"}) ;
    
  },
  
  mixins: [pageResolver, backgroundImage],
  
  computed: {
    
    background: function() {
      return this.setBackground(this.Page.backgroundImageAssets[1].url) ; 
    },
    
    navItems: function() {
      return this.$store.state.mainNavMenu['menu_items'] ; 
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


