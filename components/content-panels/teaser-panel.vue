<template>
  
  <article>
  
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
  
  $teaser-item-spacing: $space-light;
  
  .teaser-item {
    overflow: hidden;
    margin: 0 auto;
    @include column(22);
    margin-bottom: $outer-space-heavy;
    text-align: center;
    @include centered-background();
    border-radius: 5px;
    @include centered-shadow(medium);
  }
  
  .teaser-content {
    @include y-pad($space-medium);
    background-color: rgba(233, 233, 233, 0.6);
    
  }
    
  .teaser-title {
    margin-bottom: $teaser-item-spacing;
  }
    
  .teaser-text {
    margin-bottom: $teaser-item-spacing;
    @include x-pad($teaser-item-spacing);
  }
    
  //add cta styling to 'project.scss'
  .teaser-cta {
    margin-bottom: $teaser-item-spacing;
  }
     
  

</style>