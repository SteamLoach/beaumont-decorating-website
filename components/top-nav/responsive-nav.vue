<template>

  <nav class="responsive-nav"
       :class="state">
    
    <div class="responsive-nav-inner">
      <div v-for="link in navLinks"
           :key="link.id"
           @click="responsiveNavClose"
           class="responsive-nav-link">
        <nuxt-link :to="link.route"> {{link.title}} </nuxt-link>
      </div>
    </div>
    
  </nav>

</template>


<script>

import {navMutations} from './navMutations.js';  
  
export default {
  
  mixins: [navMutations],
  
  props: ['state', 'navLinks']
    
}
  
</script>


<style lang="scss">
  
  .responsive-nav {
    @include responsive-nav();
    @include y-pad($space-heaviest);
  }
  
  .responsive-nav-inner {
    width: 100%;
  }
  
  .responsive-nav-link {
    position: relative;
    font-size: 1.2rem;
    
    background-color: $page-background;
    
    a {
      position: relative;
      width: 100%;
      @include y-pad($space-medium);    
      
      &.nuxt-link-exact-active {
        color: $offset-font-color;
        background-image: url('~assets/navbar_swatch.png');
        background-repeat: no-repeat;
        background-position: center;
        background-size: auto 70%;
      }
    }
    
  }
  
  .responsive-nav.is-active {
    right: 0; 
  }
  
  

</style>