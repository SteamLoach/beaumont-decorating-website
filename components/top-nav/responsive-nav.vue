<template>

  <nav class="responsive-nav"
       :class="state">
    
    <div class="handheld-nav-close">
      <responsive-nav-toggle :state="state"></responsive-nav-toggle>
    </div>
    
    <div class="responsive-nav-inner">
      <div v-for="link in navLinks"
           :key="link.id"
           @click="handheldNavClose"
           class="responsive-nav-link">
        <nuxt-link :to="link.route"> {{link.title}} </nuxt-link>
      </div>
    </div>
    
  </nav>

</template>


<script>

import {navMutations} from './navMutations.js';   
import responsiveNavToggle from './responsive-nav-toggle.vue';
  
export default {
  
  mixins: [navMutations],
  
  props: ['state', 'navLinks'],
  
  components: {
    responsiveNavToggle,
  }
    
}
  
</script>


<style lang="scss">
  
  .responsive-nav {
    z-index: 999;
    @include hidden-from($laptop);
    position: absolute;
      top: 0;
      right: -100%;
      &.is-active {right: 0;}
    @include column(20);
    height: 100vh;
    overflow-y: scroll;
    text-align: center;
    background-color: $page-background;
    @include standard-transition(right);
    transition-timing-function: linear;
    
    .nav-toggle {
      transition-delay: 0.2s;
    }
    
    
    
  }
  
  .handheld-nav-close {
    padding: $space-lighter;
    text-align: right;
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

</style>