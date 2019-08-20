<template>
  
  <article>
  
    <div v-for="teaser in teaserItems"
         :key="teaser.id"
         :style="teaser.background"
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
  
  computed: {
    teaserItems: function() {
      let teaserItems = this.content.teaserItems ; 
      
      teaserItems.forEach(item => {
        item['background'] = this.makeBackground(item.image[0].url)
      }) ; 
      
      return teaserItems;
    }
  }
  
}

</script>




<style lang="scss">

  .teaser-item {
    margin: 0 auto;
    @include column(22);
    margin-bottom: $outer-space-light;
    text-align: center;
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 10px;
    @include centered-shadow(medium);
  }
  
  .teaser-content {
    @include y-pad($space-light);
    background-color: rgba(233, 233, 233, 0.6);
    
  }
    
  .teaser-title {
    margin-bottom: $space-lighter;
  }
    
  .teaser-text {
    margin-bottom: $space-lighter;
    @include x-pad($space-lighter);
  }
    
  //add cta styling to 'project.scss'
  .teaser-cta {
    margin-bottom: $space-lighter;
  }
     
  

</style>