<template>
  
  <article class="teaser-panel">
  
    <div v-for="teaser in content.teaserItems"
         :key="teaser.id"
         :style="makeBackground(teaser.image[0].url)"
         class="teaser-item">
      <div class="teaser-content">
        <h3 class="teaser-title"> {{ teaser.title }} </h3>
        <p class="teaser-text"> {{ teaser.text }} </p>
        <button class="cta teaser-cta"> {{ teaser.button }} </button>
      </div>
    </div>
  
  </article>

</template>





<script>

import {backgroundImage} from '~/mixins/backgroundImage.js';
  
export default {
  
  props: ['content'],
  
  mixins: [backgroundImage],
  
}

</script>




<style lang="scss">
  
  .teaser-panel {
    @include row(center, center);
  }
  
  .teaser-item {
    overflow: hidden;
    @include column(22);
      @include column-break(625px, 18);
        @include custom-break($laptop, 725px);
          @include column-break($desktop, 8);
    @include x-margin-from($desktop, $outer-space-medium);
    margin-bottom: $outer-space-heavy;
    text-align: center;
    @include centered-background();
    border-radius: 5px;
    //@include centered-shadow(medium);
  }
  
  .teaser-content {
    @include y-pad($space-medium);
    background-color: rgba(233, 233, 233, 0.6);
    
  }
    
  .teaser-title {
    @include x-pad($space-lighter);
      @include x-pad-from($touch, $space-light);
    margin-bottom: $space-light;
  }
    
  .teaser-text {
    margin-bottom: $space-light;
    @include x-pad($space-light);
      @include x-pad-from($touch, $space-medium)
  }
    
  .teaser-cta {
    margin-bottom: $space-light;
  }
     
  

</style>