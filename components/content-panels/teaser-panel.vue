<template>
  
  <article class="teaser-panel">
  
    <div v-for="teaser in content.teaserItems"
         :key="teaser.id"
         :style="makeBackground(teaser.image[0].url)"
         class="teaser-item">
      
      <div class="teaser-content">
        <h2 class="teaser-title"> {{ teaser.title }} </h2>
        
        <svg-loader class="teaser-icon" :icon="teaser.icon"></svg-loader>
        
        <p class="teaser-text"> {{ teaser.text }} </p>
        
        <nuxt-link class="cta teaser-cta"
                   :to="teaser.route"> {{ teaser.button }} </nuxt-link>
        
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
    padding-top: $outer-space-medium;
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
    border-radius: $project-border-radius;
  }
  
  .teaser-content {
    @include wrapper(center, center);
    @include y-pad($space-medium);
    background-color: rgba(233, 233, 233, 0.6);
  }
    
  .teaser-title {
    line-height: 1.2;
    @include x-pad($space-lighter);
      @include x-pad-from($touch, $space-light);
    margin-bottom: $space-light;
  }
  
  .teaser-icon {
    margin-bottom: $space-lighter; 
    width: 150px;
    height: 150px;
      .homepage-svg {
        fill: $brand-1;
      }
  }
    
  .teaser-text {
    margin-bottom: $space-light;
    @include x-pad($space-light);
      @include x-pad-from($touch, $space-medium)
  }
    
  .teaser-cta {
    @extend %cta;
    margin-bottom: $space-light;
    
    a {
      height: 100%;
      width: 100%;
    }
  }
     
  

</style>