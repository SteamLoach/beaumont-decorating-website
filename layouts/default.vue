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
    color: $brand-1;
  }

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

