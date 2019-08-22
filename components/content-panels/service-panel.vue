<template>

  <article>
  
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
  
  .service-item {
    @include column(22);
    margin: 0 auto;
  }
  
  .service-image {
    height: 315px;
    width: 315px;
    margin: 0 auto;
    @include centered-background();
  }

</style>