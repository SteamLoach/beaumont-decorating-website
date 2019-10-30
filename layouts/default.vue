<template>
  <div>
    <top-nav></top-nav>
    <lightbox-overlay></lightbox-overlay>
    <nuxt/>
    <site-footer></site-footer>
  </div>
</template>

<script>
  
import topNav from '~/components/top-nav/top-nav.vue' ; 
import siteFooter from '~/components/site-footer.vue';
import lightboxOverlay from '~/components/utilities/lightbox-overlay.vue';
  
export default {
  
  components: {
    topNav,
    siteFooter,
    lightboxOverlay,
  },
}

</script>


<style lang="scss">
   
  //HTML Base
  html{@extend %html-base;}
      
</style>

