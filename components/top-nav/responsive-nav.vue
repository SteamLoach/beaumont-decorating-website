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
  
  props: ['state', 'navLinks'],
    
}
  
</script>


<style lang="scss">
  
  .responsive-nav {
    overflow-y: scroll;
    @include hidden-from($laptop);
    position: absolute;
    @include row(center, center);
      @include y-from($tablet, start);
    padding-top: $mobile-nav-height;
      @include pad-from($tablet, top, $tablet-nav-height);
    height: 100vh;
    right: -100%;
    top: 0;
    text-align: center;
    transition-property: right;
    transition-duration: $project-transition-duration;
    transition-timing-function: linear;
  }
  
  .responsive-nav-inner {
    overflow: hidden;
    @include column(22);
    max-height: 100vh;
    @include margin-from($tablet, top, $outer-space-medium) 
    border-radius: $project-border-radius;
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
        @extend %active-nav-link;
        background-size: auto 80%;
      }
    }
    


  }
  
  .responsive-nav.is-active {
    right: 0; 
  }
  
  

</style>