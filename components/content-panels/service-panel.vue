<template>

  <article class="service-panel">
  
    <div v-for="item in content.serviceItems"
         :key="item.id"
         class="service-item">
      
      <div class="service-image"
           :style="makeBackground(item.image[0].url)"></div>
      
      <div class="service-content">
        <h3> {{item.title}} </h3>
        <p> {{item.text}} </p>
      </div>
  
    </div>
  
  </article>

</template>




<script>

import {backgroundImage} from '~/mixins/backgroundImage.js';
  
export default {
  
  props: ['content'],
  
  mixins: [backgroundImage]
}

</script>




<style lang="scss">
  
  .service-panel {
    @include row(center, center);
  }
  
  .service-item {
    @include wrapper(center, center);
      @include x-from(550px, start);
        @include x-from($tablet, around);
        @include y-from($tablet, start);
          @include y-from($laptop, center);
    @include column(22);
      @include column-break($tablet, 23);
        @include column-break($laptop, 20);
          @include custom-break($desktop, 1248px);
    margin-bottom: $outer-space-medium;
    padding-top: $space-light;
    border-top: 1px solid $brand-1;
  }
  
  .service-image {
    @include column(22);
      @include custom-break(550px, 375px);
        @include custom-break($tablet, 315px);
    height: 315px;
      @include height-break($tablet, 350px);
    @include x-margin-from($touch, $space-lighter);
    @include y-margin-from($tablet, $space-light);
    margin-bottom: $space-lighter;
    @include centered-background();
    @include centered-shadow(medium);
    
  }
  
  .service-content {
    
    @include column-break($tablet, 12);
    
    h3 {
      padding-left: $space-lighter;
    }
    
    p {
      padding-left: $space-lighter;
    }
    
  }

</style>