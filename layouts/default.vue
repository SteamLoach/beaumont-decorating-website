<template>
  <div  class="page-wrapper">
    <top-nav></top-nav>
    <div class="lightbox-overlay"
         :class="{'is-active': overlayState}"></div>
    <nuxt />
  </div>
</template>

<script>
  
import topNav from '~/components/top-nav/top-nav.vue' ; 
  
export default {
  
  components: {
    topNav,
  },
  
  computed: {
    overlayState: function() {
      return this.$store.state.menus.topNav.state['is-active'] ;
    }
  }
  
}

</script>


<style lang="scss">
   
  
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: $shade-darkest;
    line-height: 1.2;
  }
  
  h1 {font-size: 2.2rem;}
  h2 {font-size: 1.4rem;}
  h3 {font-size: 1.2rem;}

  html {
    background-color: $page-background;
    font-family: $primary-font;
    font-size: $font-size-root;
    line-height: $line-height-root;
    color: $default-font-color;
  }
  
  body {
    position: relative;
    min-height: 100vh;
  }
    
  .lightbox-overlay {
    z-index: 5;
    position: absolute;
    width: 0;
    height: 0;
    background-color: rgba(0,0,0,0.0);
    transition-property: background-color;
    transition-duration: $project-transition-duration;
    transition-timing-function: ease-in-out;
    
    &.is-active {
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.6);
    }
  }
  
</style>

