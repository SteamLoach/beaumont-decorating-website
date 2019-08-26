<template>

  <section>
  
    <div class="page-feature-image"
         :style="makeBackground(featureImage)">
      <h1 class="page-title"> {{ title }} </h1>
    </div>
  
  </section>

</template>


<script>

import {backgroundImage} from '~/mixins/backgroundImage.js';  
  
export default {
  
  mixins: [backgroundImage],
  
  props:['featureImage', 'title']
  
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
  
  .page-title {
    @include column(22);
    padding-bottom: $space-light;
    color: $offset-font-color;
    font-size: 2.2rem;
    text-align: center;
    line-height: 1.2;
    text-shadow: -2px -2px 2px $brand-1;
  }

</style>