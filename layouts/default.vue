<template>
  <div>
    <top-nav></top-nav>
    <div class="lightbox-overlay"
         :class="{'is-active': overlayState}"></div>
    <nuxt/>
    <site-footer></site-footer>
  </div>
</template>

<script>
  
import topNav from '~/components/top-nav/top-nav.vue' ; 
import siteFooter from '~/components/site-footer.vue';
  
export default {
  
  components: {
    topNav,
    siteFooter,
  },
  
  computed: {
    overlayState: function() {
      return this.$store.state.menus.topNav.state['is-active'] ;
    }
  }
  
}

</script>


<style lang="scss">
   
  
  //HTML Base
  html{@extend %html-base;}
    
  //Lightbox
  .lightbox-overlay {
    z-index: 5;
    position: absolute;
    width: 0;
    height: 0;
    background-color: rgba(0,0,0,0.0);
    @include standard-transition(background-color);
    
    &.is-active {
      width: 100%;
      height: 100%;
      background-color: rgba(0,0,0,0.6);
    }
  }
  
    
</style>

