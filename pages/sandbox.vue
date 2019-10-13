<template>

  <main class=sandbox>
  
    <image-gallery :content="Page.contentPanels[1]"></image-gallery>
  
  </main>

</template>



<script>

import imageGallery from '~/components/content-panels/image-gallery.vue';
  
export default {
  components: {
    imageGallery,
  },
  
  computed: {
    Page: function() {
      return this.$store.state.cms.exteriorDecorating ; 
    }
  }
}

</script>


<style lang="scss">

  .top-nav {
    display: none;
  }
  
  .sandbox {
    @include row(center, center);
    min-height: 100vh;
  }
  
  

</style>