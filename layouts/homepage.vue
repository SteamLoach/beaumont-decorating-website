<template>
  <div class="full-page-background"
       :style="background">
    <top-nav></top-nav>
    <nuxt />
  </div>
</template>

<script>

import {backgroundImage} from '~/mixins/backgroundImage.js';   
  
export default {
  
  mixins: [backgroundImage],
  
  computed: {
    background: function() {
      return this.makeBackground(this.$store.state.cms.homePage.featureImage[0].url)
    }
  }
  
}

</script>


<style lang="scss">

  .full-page-background {
    background-position: center top;
    background-repeat: no-repeat;
    background-size: cover;
  }
  
</style>

