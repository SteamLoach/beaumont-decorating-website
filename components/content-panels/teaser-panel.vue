<template>
  
  <article class="teaser-panel">
  
    <div v-for="teaser in content.teaserItems"
         :key="teaser.id"
         class="teaser-item"
         :class="{ 'is-reversed': teaser.id % 2 == 0}">
      
      <div class="teaser-inner-right">
        <svg-loader :icon="teaser.icon"></svg-loader>
      </div>
      
      <div class="teaser-inner-left">
        <div class="content"> 
          <h2 class="title"> {{ teaser.title }} </h2>
          <p class="text"> {{ teaser.text }} </p>
          <nuxt-link class="cta teaser-cta"
                     :to="teaser.route"> {{ teaser.button }} </nuxt-link>
        </div>
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
    @include row(center, stretch);
    min-height: 100vh;
    margin-bottom: $outer-space-heavy;
  }
  
  .teaser-item {
    @include container(start, stretch);
    @include column(18);
    &.is-reversed {
      flex-direction: row-reverse;
    }
    
    .homepage-icon {
      width: 275px;
      height: 275px;
      fill: $brand-1;
    }
  }
  
  .teaser-inner-left {
    @include wrapper(center, center);
    @include column(10);
    text-align: center;
    
    .content {
      @include column(18);
    }
    
    .title, .text {
      padding-bottom: $space-light;
    }
    
    .teaser-cta {
      @extend %cta;
      margin-bottom: $space-light;
    
      a {
        height: 100%;
        width: 100%;
      }
    }
  }
  
  .teaser-inner-right {
    @include wrapper(center, center);
    @include column(4);
    @include centered-background();
  }
        
     
  

</style>