<template>

  <section>
  
    <div class="page-feature-image"
         :style="makeBackground(featureImage)">
      
      <div class="page-title-wrapper">
        <h1 class="page-title"> {{ title }} </h1>
        <p class="page-strapline"> {{ strapline }} </p>
      </div>
      
    </div>
  
  </section>

</template>


<script>

import {backgroundImage} from '~/mixins/backgroundImage.js';  
  
export default {
  
  mixins: [backgroundImage],
  
  props:['featureImage', 'title', 'strapline']
  
}

</script>

<style lang="scss">

  .page-feature-image {
    @include container(center, center);
    height: 100vh;
    margin-bottom: $outer-space-medium;
    @include centered-background();
    @include down-shadow(light);
  }
  
  .page-title-wrapper {
    @include row(center, center);
    align-content: center;
    min-height: 100%;
    text-align: center;
    color: $offset-font-color;
    background-image: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0.8), rgba(0,0,0,0));
  }
  
  .page-title {
    @include column(24);
    @include x-pad($space-medium);
    padding-bottom: $space-lighter;
    font-size: 2.2rem;
    color: $offset-font-color;
    font-weight: 800;
    line-height: 1.2;
  }
  
  .page-strapline {
    
  }

</style>